Meteor.publish('pages', function() {
	return Pages.find({}, {
	    fields: {
	        name: 1,
	        slug: 1,
			totalPoints: 1,
			completed: 1
	    },
	    sort: {
	        order: 1
	    }
	});
});

Meteor.publish('singlePage', function(slug) {
	return Pages.find({slug: slug});
});

// Meteor.publish('users', function() {
// 	return Meteor.users.find({}, {fields: {username: 1, profile: 1}})
// });
