export default defineEventHandler(async (event) => {
  const storage = useStorage("uploads");  
  const path = await getRouterParam(event, "path");  

  // you could also put in logic here  
  // to restrict access to the file based on  
  // the user, file type, or any other criteria  
  // but this implementation makes the file public  
  if (!path) {
        throw createError({
      statusCode: 400,      
      statusMessage: "Path is required",
      });  
    }
return await storage.getItemRaw(path);});