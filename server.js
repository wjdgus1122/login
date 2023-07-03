const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
});
