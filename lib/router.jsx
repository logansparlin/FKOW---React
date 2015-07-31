var subs = new SubsManager();

FlowRouter.route('/', {
	subscriptions: function() {
		this.register('users', subs.subscribe('users'));
	},
	action: function() {
		document.title = "FKOW | React"
		ReactLayout.render(App, {
			content: <LandingPage />
		})
	}
});

FlowRouter.route('/:page', {
	name: 'post',
	subscriptions: function() {
		this.register('pages', subs.subscribe('pages'));
		this.register('users', subs.subscribe('users'));
	},
	triggersEnter: [getPermissions],
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
	if(Meteor.userId()) {
		user_level = Meteor.user().profile.level;
	} else {
		user_level = 'fan'
	}
	if(! _.contains(access, user_level) ) {
		FlowRouter.redirect('/');
		alert('access denied')
	}
}
