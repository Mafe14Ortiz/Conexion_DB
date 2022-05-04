const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'bgvsmwuf3sdt1subkpnr-mysql.services.clever-cloud.com',
  user:'uokwlbzphtnm5fzl',
  password:'wJyma0MAZ0dVSFEHdRft',
  database:'bgvsmwuf3sdt1subkpnr'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `ALUMNOS`',(err,rows)=>{
    console.log(rows)
    res.send(rows)
  })
  //connection.end()
})

app.listen(3000)