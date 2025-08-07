// test.js
import express from 'express';
import { Log } from './logger.js';

const app = express();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIxbnQyMmlzMTA3Lm5pcnVwYW1Abm1pdC5hYy5pbiIsImV4cCI6MTc1NDU0NzE2NywiaWF0IjoxNzU0NTQ2MjY3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYWI2ODkyNWYtZTY2YS00YmM0LTlhYmItYzdiYjFiNmJlNzQ2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmlydXBhbSBuYXJhZ3VuZCIsInN1YiI6Ijk1MWFmNzQ0LWFmMGUtNDhjZC04MzJhLTdmZjg1ZDAzNGQ1MCJ9LCJlbWFpbCI6IjFudDIyaXMxMDcubmlydXBhbUBubWl0LmFjLmluIiwibmFtZSI6Im5pcnVwYW0gbmFyYWd1bmQiLCJyb2xsTm8iOiIxbnQyMmlzMTA3IiwiYWNjZXNzQ29kZSI6InRTZ2JtVCIsImNsaWVudElEIjoiOTUxYWY3NDQtYWYwZS00OGNkLTgzMmEtN2ZmODVkMDM0ZDUwIiwiY2xpZW50U2VjcmV0IjoiYnh3ZlpEc0phVG51VmV0WiJ9.zKRlix3lW6Q3qx88J7cJ7njgmbiiF3oLtk-48-Pvbvg'; // full JWT token

app.get('/health', async (req, res) => {
  await Log('backend', 'info', 'controller', 'check endpoint hit', token);
  res.send('OK');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
