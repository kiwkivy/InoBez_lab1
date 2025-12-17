const { sanitizeObject } = require('../utils/sanitizer');

exports.getData = (req, res) => {
  const data = [
    { id: 1, text: '<script>alert("xss")</script>' },
    { id: 2, text: 'Secure API data' }
  ];

  const sanitizedData = data.map(item => sanitizeObject(item));

  res.json({
    user: req.user.username,
    data: sanitizedData
  });
};
