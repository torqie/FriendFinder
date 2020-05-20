
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(res);
  });

  app.post("api/friends", function (req, res) {
    return res.json();
  });

}