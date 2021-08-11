import express from 'express';

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

app.get('/', (req, res) => {
  res.send({ name: 'Marcelo', age: 38 });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server running at http://localhost:${PORT}`);
  }
});
