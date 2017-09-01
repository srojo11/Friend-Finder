var friendsData = require("../data/friends");

module.exports = function(app) {

app.get('/api/friends', function(req, res) {
 res.json(friendsData);
 // res.send("Welcome to the Star Wars Page!");
 
});



app.post("/api/friends", function(req, res) {
 /*var newfriend = req.body;

  console.log(newfriend);

  // We then add the json the user sent to the character array
  characters.push(newfriend);

  // We then display the JSON to the users
  res.json(newfriend);


for(i = 0; i < .length; i++) {
var score =  newFriend.scores[i];
console.log(score);
}*/
});



////

 /*  var chosen = req.params.friends;

 if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);*/


  };