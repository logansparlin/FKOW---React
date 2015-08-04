Meteor.methods({
    giveUserPoints: function(points) {
        var userId = Meteor.userId()
        if ( ! userId ) {
            throw new Meteor.Error("not-authorized");
        } else {
            Meteor.users.update({_id: userId}, {$inc: {'profile.progress': points}})
        }
    },
    resetPoints: function() {
        var userId = Meteor.userId()
        if( ! userId ) {
            throw new Meteor.Error("not-authorized");
        } else {
            Meteor.users.update({_id: userId}, {$set: {'profile.progress': 0}})
        }
    },
    createNewUser:function(){
      var randomName = Random.hexString(5)
      var randomSecret = Random.secret()
      var newUser = Accounts.createUser({username: randomName, password: randomSecret, profile:{'firstName':'John','lastName':'Doe','level':'rookie'}})
      return ({
        user: randomName,
        password: randomSecret
      })
    }
})
