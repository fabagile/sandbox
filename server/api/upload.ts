export default defineEventHandler(async (event) => {
  try {
    // Processing code here
    const formData = await readMultipartFormData(event);
    if (!formData || formData.length === 0) {
      throw createError({
        statusCode: 400, statusMessage: "No files uploaded",
      });
    }
    const file = formData[0];
    const storage = useStorage("uploads");
    // Validate file size (5MB limit)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    if (file.data.length > MAX_FILE_SIZE) {
      throw createError({
        statusCode: 400,
        statusMessage: `File ${file.filename} exceeds maximum size of 5MB`,
      });
    }
    const allowedTypes = [
      "image/jpeg", "image/png", "image/gif", "application/pdf", "text/plain",];

    if (!file.type || !allowedTypes.includes(file.type)) {
      throw createError({
        statusCode: 400,
        statusMessage:
          `File type ${file.type || "unknown"} not allowed. 
        Allowed types: ${allowedTypes.join(", ")}`,
      });
    }
    // Store file using useStorage
    const fileName = `${Date.now()}-${file.filename}`;
    await storage.setItemRaw(`${fileName}`, file.data);
    return fileName;
  } catch (error) {
    // check if the error is an instance of H3Error  
    // means we can pass on our validation errors to the frontend 
    // with the proper message and HTTP status code 
    if (error /* instanceof H3Error */) {
      throw error;
    }
    // this takes care of everything else  
    throw createError({
      statusCode: 500,
      statusMessage: "Error uploading files",
    });
  }
});