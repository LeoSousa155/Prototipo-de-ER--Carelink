const express = require('express');
const formidable = require('express-formidable');
const cors = require('cors');
const path = require('path');
const app = express();



// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(formidable());
app.use(express.json());
app.use(cors());

// Handle all other routes by sending back the React index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/api/submit', (req, res) => {
    const { name, password } = req.fields;
    console.log('Request Body:', req.fields);
    //console.log('Dados recebidos:', { name, password });
    //return a response type
    res.json({ message: 'Dados recebidos com sucesso!' });
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});