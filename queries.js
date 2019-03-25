const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mateusz',
  host: 'localhost',
  database: 'mateusz',
  password: '',
  port: 5432,
})


const getData = (req,res,query)=>{
    pool.query(query, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
}

const getActors = (req, res) => getData(req,res,'SELECT * from public.actor')

const getPgStatStatements = (req,res)=> getData(req,res,'SELECT query,calls,min_time,max_time,mean_time,rows FROM pg_stat_statements ORDER BY calls DESC')

const getPgStatActivity = (req,res)=> getData(req,res,'SELECT pid,usesysid,application_name,client_addr, client_port,state,query FROM pg_stat_statements')


  module.exports = {
    getActors,
    getPgStatStatements,
    getPgStatActivity
  }