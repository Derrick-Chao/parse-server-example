const config = await Parse.Config.get({useMasterKey: true});

Parse.Cloud.define('hello', function(req, res) {
  return 'Hi';
});

Parse.Cloud.define("push", function(req, res) {

  return Parse.Push.send({
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
  }, { useMasterKey: true });
});
