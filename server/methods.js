Meteor.methods({
    giveUserPoints: function(page_id) {
        var page = Pages.findOne({random_id: page_id})
        var userId = Meteor.userId()
        if ( ! userId ) {
            throw new Meteor.Error('not-authorized');
            return false;
        } else if( !page ) {
            console.log('error: no page matching that ID')
            throw new Meteor.Error('no page matching that ID');
            return false;
        } else {
            if(!page.completed) {
                Meteor.users.update({_id: userId}, {$inc: {'profile.progress': page.totalPoints}})
                Pages.update({random_id: page_id}, {$set: {completed: true}})
                return true;
            } else {
                throw new Meteor.Error('This page has already been completed')
                return false;
            }
        }
    },
    resetPoints: function() {
        var userId = Meteor.userId()
        if( ! userId ) {
            throw new Meteor.Error("not-authorized");
        } else {
            Meteor.users.update({_id: userId}, {$set: {'profile.progress': 0}})
            Pages.update({}, {$set: {completed: false}}, {multi: true})
        }
    },
    createNewUserAndLogin:function(){
      var randomName = Random.hexString(5)
      var randomSecret = Random.secret()
      var newUser = Accounts.createUser({username: randomName, password: randomSecret, profile:{'firstName':'John','lastName':'Doe','level':'rookie'}})
      return ({
        user: randomName,
        password: randomSecret
      })

    }
})
