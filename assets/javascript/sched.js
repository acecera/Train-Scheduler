var config = {
    apiKey: "AIzaSyB6oa63DE5uMkIqqzJ3GYt2fCMV0bLFDcc",
    authDomain: "trainhw-ed501.firebaseapp.com",
    databaseURL: "https://trainhw-ed501.firebaseio.com",
    projectId: "trainhw-ed501",
    storageBucket: "trainhw-ed501.appspot.com",
    messagingSenderId: "129559089522"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-button").on("click", function(event){
      event.preventDefault();
      var trainName = $(".trainNameInput").val().trim();
      var trainDestination = $(".destinationInput").val().trim();
      var trainTime = $(".firstTrainTimeInput").val().trim();
      var trainFrequency = $(".frequencyInput").val().trim();

      var newTrain = {
          name: trainName,
          destination: trainDestination,
          time: trainTime,
          frequency: trainFrequency,  
      };

      database.ref().push(newTrain);
      console.log(newTrain.name);
      console.log(newTrain.destination);
      console.log(newTrain.time);
      console.log(newTrain.frequency);

      $(".trainNameInput").val("");
      $(".destinationInput").val("");
      $(".firstTrainTimeInput").val("");
      $(".frequencyInput").val().trim();
  });

  database.ref().on("child_added"), function(childSnapshot, prevChildKey) {
      console.log(childSnapshot.val());

      var trainName = childSnapshot.val().name;
      var trainDestination = childSnapshot.val().destination;
      var trainTime = childSnapshot.val().time;
      var trainFrequency = childSnapshot.val().frequency;

      console.log(trainName);
      console.log(trainDestination);
      console.log(trainTime);
      console.log(trainFrequency);
  }