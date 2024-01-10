const express = require("express")

const app = express();
const ExpressError = require("./expressError")
const itemsRoutes = require("./routes/items")

app.use(express.json());
app.use("/items", itemsRoutes);

/** Handle 500 Errors */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.json({error: err.message,
  });
});

/** Handle 404 Errors */

app.use(function(req, res, next) {
    return new ExpressError("Not Found. Please try again.", 404);
  });

module.exports = app