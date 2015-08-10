var subs = new SubsManager();

FlowRouter.route('/', {
	// subscriptions: function() {
	// 	this.register('users', subs.subscribe('users'));
	// },
	triggersEnter:[createBlankUser],
	action: function() {
		if(Meteor.isClient) {
			document.title = "FKOW | React"
		}
		ReactLayout.render(App, {
			content: <LandingPage />
		})
	}
});

FlowRouter.route('/:page', {
	name: 'post',
	subscriptions: function(params) {
		var pageSlug = params.page;
		this.register('pages', subs.subscribe('pages'));
		// this.register('users', subs.subscribe('users'));
	},
	// triggersEnter: [getPermissions],
	action: function(params) {
		ReactLayout.render(App, {
			content: <Page title={params.page} />
		});
	}
});

function getPermissions(context) {
	var page = context.params.page,
		access = PAGES[page].access,
		user_level;
	if(Meteor.user()) {
		user_level = Meteor.user().profile.level;
	} else {
		user_level = 'fan'
	}
	if(! _.contains(access, user_level) ) {
		FlowRouter.redirect('/');
		alert('access denied')
	}
}

function createBlankUser(context){

	if(!Meteor.userId()){
		Meteor.call('createNewUserAndLogin', function(err, response){
				if(err){
					console.log('nope')
				}else{
					console.log(response.user)
					Meteor.loginWithPassword(response.user, response.password,function(error){
						console.log(error)
					})
				}
		})
	}
}
