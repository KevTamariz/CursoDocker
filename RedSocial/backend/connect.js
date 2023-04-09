import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"ktamariz",
  password:"990414",
  database:"social"
})