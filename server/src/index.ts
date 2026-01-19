import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { slowDown } from 'express-slow-down'
import { rateLimit } from 'express-rate-limit'
import { handleLogin } from './services/authService';
import { addLog } from './logs';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const loginSlowDownLimiter = slowDown({
	windowMs: 60 * 1000, // 60 seconds
	delayAfter: 3, // Number of querest to go at full-speed.
	delayMs: (hits) => hits * 100, // Delay
})

const loginRateLimiter = rateLimit({
	windowMs: 60 * 1000, // 60 seconds
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  handler: (req, res) => {
    return res.status(429).send("Invalid credentials");
  }
})

// Apply the delay middleware to API calls only.
app.use('/login/3', loginSlowDownLimiter);
app.use('/login/4', loginRateLimiter);
// app.use('/login/5', loginSlowDownLimiter);

// API endpoint for Hydra exercises
app.post('/login/:level', (req: Request, res: Response) => {
  const level = parseInt(req.params.level);
  const { username, password } = req.body;
  let { isHuman } = req.body;
  if (!isHuman) {
    isHuman = false;
  }
  const result = handleLogin(level, String(username || ''), String(password || ''), isHuman);

  // console.log(`[${new Date().toUTCString()}] Login attempt => ${username}:${password}`);
  // Log attempt to file
  const newLog = addLog({ clientIP: req.ip ?? "", level, username, password, isHuman , ...result });
  console.log(JSON.stringify(newLog));
  if (result.success) {
    return res.send(200);
  }
  return res.status(400).send(result.message);
});

app.listen(PORT, () => {
  console.log(`Hydra backend listening on port ${PORT}`);
});
