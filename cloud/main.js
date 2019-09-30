Parse.Cloud.define('hello', function(req, res) {
  return 'Hi';
});

Parse.Push.send({
  channels: [ "Test" ],
  data: {
    title: "Test Push",
    alert: "The Giants won against the Mets 2-3."
  }
})
.then(function() {
  console.log("Push successful")
  // Push was successful
}, function(error) {
  console.log("Push failed: " + error)
  // Handle error
});