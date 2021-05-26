// import libraries
import * as express from "express";
import * as functions from "firebase-functions";

const PORT = 3000;
const app = express();

app.get("/", function(req, res) {
  res.send("Admin Homepage");
});

app.listen(PORT, () => {
  console.info("server is running on PORT:", PORT);
});

exports.app = functions.https.onRequest(app);
