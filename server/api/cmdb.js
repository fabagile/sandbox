import {records} from "~/data/cmdb_model.json"
// const {records} = cmdb
// const cleanedData = 
export default defineEventHandler(async (event) => records.map(item => ({
  id: item.sys_id,
  displayName: item.display_name,
  name: item.name,
  description: item.short_description,
  className: item.sys_class_name,
  status: item.status,
})))