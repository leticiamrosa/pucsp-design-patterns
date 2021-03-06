import App from 'src/app';

const port = process.env.PORT;
const defaultPort = 3333;

App.listen(port || defaultPort, () => {
  console.log(`⚡️ Server listening on http://localhost:${port || defaultPort}`);
});
