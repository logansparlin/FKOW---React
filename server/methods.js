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
    }
})
