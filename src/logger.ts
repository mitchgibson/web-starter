type LogLevel = 'info' | 'warn' | 'error';

async function sendToLoki(level: LogLevel, message: string) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    streams: [
      {
        stream: {
          level,
          app: "vue-app",
        },
        values: [
          [`${Date.now() * 1000000}`, `${timestamp} ${level}: ${message}`],
        ],
      },
    ],
  };

  try {
    const response = await fetch("http://localhost:3100/loki/api/v1/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntry),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.error("Error sending log to Loki:", e);
  }
}

const logger = {
  info: (message: string) => {
    console.info(`[INFO] ${message}`);
    sendToLoki('info', message);
  },
  warn: (message: string) => {
    console.warn(`[WARN] ${message}`);
    sendToLoki('warn', message);
  },
  error: (message: string) => {
    console.error(`[ERROR] ${message}`);
    sendToLoki('error', message);
  }
};

export default logger;