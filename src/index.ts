import { createServer } from "node:http";
import os from "node:os";

const app = createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "Appliction/json",
    server: `${os.arch()} ${os.hostname} ${os.machine()} ${os.version} ${
      os.platform
    }`,
  });

  res.end(JSON.stringify({ app: "Hello" }));
});

app.listen(8000, () => console.log("Server started - http://localhost:8000"));
