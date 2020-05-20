var friends = require("../data/friends.js");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body)
    var ret = {
      name: req.body.name,
      photo: req.body.photo,
      scores: [
          parseInt(req.body.question1),
          parseInt(req.body.question2),
          parseInt(req.body.question3),
          parseInt(req.body.question4),
          parseInt(req.body.question5),
          parseInt(req.body.question6),
          parseInt(req.body.question7),
          parseInt(req.body.question8),
          parseInt(req.body.question9),
          parseInt(req.body.question10),
      ]
    }
    var differences = []
    for(let i = 0; i < friends.length; i++) {
      const friendScores = friends[i].scores;
      for(let i = 0; i < friendScores.length; i++) {
        const friendScore = friendScores[i];
        console.log(ret.scores[i] + " - " + friendScore);


        differences.push(calc(ret.scores[i] - friendScore));
      }
    }

    console.log("Diff: ", differences);




    friends.push(ret);
    return res.json(ret);
  });


  var calc = function(a, b) {
    console.log("Math: ", Math.abs(parseInt(a) - parseInt(b)));
    return Math.abs(parseInt(a) - parseInt(b));
  }

}