const app = require('./app')
const port = process.env.PORT || 8080; // this can be very useful if you deploy to Heroku!

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
