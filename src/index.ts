import express, { Request, Response, Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Server response');
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 http://localhost:${PORT}`);
});
