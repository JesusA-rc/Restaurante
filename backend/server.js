const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3307;


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root', 
    password: '123',  
    database: 'Restaurant'  
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error de conexión a MySQL:', err);
      return;
    }
    console.log('Conectado a MySQL');
  });

  app.get('/api/categories',(req,res)=>{
    db.query('select id_category,name_category,image_url from categories;',(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.json(results);
    })
  });

  app.get('/api/getFoods',(req,res)=>{
    db.query(`
      SELECT f.id_food,f.name, f.price, f.description, f.image_url, f.id_category, f.pais,
             c.name_category, country.name_country
      FROM foods f
      INNER JOIN categories c ON c.id_category = f.id_category
      INNER JOIN countries country ON country.id_pais = f.pais;
    `, (err, results) => {
      if (err) throw err;
      res.json(results);
    });    
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
