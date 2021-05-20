const { createLogger, format, transports } = require("winston");
const { combine, printf, colorize, timestamp } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  format: combine(colorize(), timestamp(), myFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
