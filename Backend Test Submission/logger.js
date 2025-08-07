
const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';

/**

 * @param {string} stack '
 * @param {string} level 
 * @param {string} pkg 
 * @param {string} message 
 * @param {string} token 
 */
export async function Log(stack, level, pkg, message, token) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to log');
    }

    console.log(`✅ Log sent: ${data.message}`);
  } catch (error) {
    console.error('❌ Logging failed:', error.message);
    console.error(error);
  }
}
