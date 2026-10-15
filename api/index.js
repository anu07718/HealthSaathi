// Vercel serves files under api/ as serverless functions; server.js is a
// plain Express app at the repo root, so expose it from here. Express sees
// the original /api/... path because vercel.json rewrites rather than redirects.
module.exports = require("../server.js");
