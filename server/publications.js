Meteor.publish('pages', function() {
	return Pages.find({});
});

Meteor.publish('singlePage', function(slug) {
	return Pages.find({slug: slug});
});

// Meteor.publish('users', function() {
// 	return Meteor.users.find({}, {fields: {username: 1, profile: 1}})
// });
