if(Pages.find().count() === 0) {
	Pages.insert({
		'id':1,
		'name':'Heritage / History',
		'slug':'heritage-history',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false
	});
	Pages.insert({
		'id':2,
		'name':'Wing Popularity',
		'slug':'wing-popularity',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false
	});
	Pages.insert({
		'id':3,
		'name':'Wing Decider',
		'slug':'wing-decider',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false
	});
	Pages.insert({
		'id':4,
		'name':'Wing Prep',
		'slug':'wing-prep',
		'allowedAccess': [ 'fan', 'rookie', 'pro', 'mvp', 'king' ],
		'completed': false
	});
	Pages.insert({
		'id':5,
		'name':'Flavor Tool',
		'slug':'flavor-tool',
		'allowedAccess': [ 'pro', 'mvp', 'king' ],
		'completed': false
	})
}

if(Meteor.users.find().count() === 0) {
	console.log('NO USERS')
	Accounts.createUser({
		email: 'lsparlin@marlinco.com',
		password: 'password',
		profile: {
			firstName: 'Logan',
			lastName: 'Sparlin',
			level: 'pro'
		}
	})
}
