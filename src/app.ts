import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ name: 'Marcelo', age: 38 });
});

export default app;
