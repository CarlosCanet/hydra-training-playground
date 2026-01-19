import path from "path";
import fs from "fs";
import { LoginAttempt } from "./services/authService";


export function addLog({ level, clientIP, username, password, success, isHuman, message }: LoginAttempt) {
  try {
    const logDir = path.join(__dirname, "..", "..", "server-logs");
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    const out = { timestamp: new Date().toISOString(), level, clientIP, success, username, password, isHuman, message };
    fs.appendFileSync(path.join(logDir, "attempts.jsonl"), JSON.stringify(out) + "\n");
    return out;
  } catch (error) {
    console.warn("Failed to write log", error);
  }
}
