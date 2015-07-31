if(Pages.find().count() === 0) {
	Pages.insert({
		'id':1,
		'name':'Heritage / History',
		'slug':'heritage-history',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 100
	});
	Pages.insert({
		'id':2,
		'name':'Wing Popularity',
		'slug':'wing-popularity',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 50
	});
	Pages.insert({
		'id':3,
		'name':'Wing Decider',
		'slug':'wing-decider',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 150
	});
	Pages.insert({
		'id':4,
		'name':'Wing Prep',
		'slug':'wing-prep',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 100
	});
	Pages.insert({
		'id':5,
		'name':'Flavor Tool',
		'slug':'flavor-tool',
		'allowedAccess': [ 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 100
	})
}

if(Meteor.users.find().count() === 0) {
	Accounts.createUser({
		email: 'lsparlin@marlinco.com',
		password: 'password',
		profile: {
			firstName: 'Logan',
			lastName: 'Sparlin',
			level: 'pro',
			progress: 0
		}
	})
}
