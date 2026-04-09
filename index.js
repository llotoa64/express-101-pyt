const express = require('express');
const app = express();

const PORT = 3000;

const student = {
  name: "Sebastian",
  lastName: "Nuñez",
  email: "sebastiannufo@unisabana.edu.co",
  id: "355479"
};

app.get('/user-info/:id', (req, res) => {
  const id = req.params.id;

  if (id !== "1") {
    return res.status(404).json({
      error: "Usuario no encontrado"
    });
  }

  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});