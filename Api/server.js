import express from 'express'
import cors from 'cors'
import fs from 'fs'
const app = express();
const port = 9000;

app.use(cors())
app.use(express.json())

const filePath = "./beneficiaries.json"

app.get('/beneficiaries', (req, res) => {
   fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
         console.error("error the reading file");
         return
      }
      try {
         const jsonData = JSON.parse(data);
         res.send(jsonData);
      } catch (error) {
         console.error(error);
         return res.status(500).send('Error parsing JSON');
      }

   })
});
app.post('/beneficiaries', (req, res) => {
   // Get the new user data from the request body
   const newContect = req.body;

   // Read the existing data from the JSON file
   const data = fs.readFileSync(filePath);
   const contects = JSON.parse(data);


   contects.push(newContect);

   fs.writeFileSync(filePath, JSON.stringify(contects, null, 2));


   res.send(contects);
});


app.listen(port, () => {
   console.log(`server is runing on http://localhost:${port}`)
})