const escape = require('escape-html');

function sanitize(value) {
  if (typeof value === 'string') {
    return escape(value);
  }
  return value;
}

function sanitizeObject(obj) {
  const sanitized = {};
  for (const key in obj) {
    sanitized[key] = sanitize(obj[key]);
  }
  return sanitized;
}

module.exports = { sanitizeObject };
