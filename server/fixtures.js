if(Pages.find().count() === 0) {
	Pages.insert({
		'order':1,
		'random_id': Random.id(),
		'name':'Heritage / History',
		'slug':'heritage-history',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 100
	});
	Pages.insert({
		'order':2,
		'random_id': Random.id(),
		'name':'Wing Popularity',
		'slug':'wing-popularity',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 50
	});
	Pages.insert({
		'order':3,
		'random_id': Random.id(),
		'name':'Wing Decider',
		'slug':'wing-decider',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 150
	});
	Pages.insert({
		'order':4,
		'random_id': Random.id(),
		'name':'Wing Prep',
		'slug':'wing-prep',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false,
		'totalPoints': 100
	});
	Pages.insert({
		'order':5,
		'random_id': Random.id(),
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
