var friends = require("../data/friends.js");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body)
    friends.push(req.body);
    return res.json(req.body);
  });

}