import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sakila'
})

const init = async () => {
  await connection.promise().query(`UPDATE actor SET last_name = "BBBBBBBB" WHERE actor_id = 193;`)
  
  const [results] = await connection.promise().query("SELECT * FROM actor WHERE actor_id = 193;")
  console.log(results)
}

init()

