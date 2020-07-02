import app from 'src/App';

const port = process.env.PORT;
const defaultPort = 3333;

app.listen(port || defaultPort, () => {
  console.log(`⚡️ Server listening on http://localhost:${port || defaultPort}`);
});
