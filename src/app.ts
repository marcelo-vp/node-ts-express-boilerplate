import path from 'path';
import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});
app.post('/notify', (req, res) => {
  res.json(req.body);
});

export default app;
