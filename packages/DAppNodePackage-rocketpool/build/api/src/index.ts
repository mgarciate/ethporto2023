import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import shelljs from "shelljs";
const { API_PORT = 3000 } = process.env;

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/version", (req: Request, res: Response) => {
  var version = shelljs.exec(`/usr/local/bin/rocketpoold --version`).stdout;
  res.send(version);
});

// POST /api/v1/rocketpool-command
app.post("/api/v1/rocketpool-command", (req: Request, res: Response) => {
  console.log(req.body.cmd);
  res.send(executeCommand(req.body.cmd));
});

// function that executes the command using shelljs
function executeCommand(cmd: string) {
  var result = shelljs.exec(
    `/usr/local/bin/rocketpoold --settings /app/rocketpool/user-settings.yml api ${cmd}`
  ).stdout;
  return result;
}

app.listen(API_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${API_PORT}`);
});
