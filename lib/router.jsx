var subs = new SubsManager();

FlowRouter.route('/', {
	name:'home',
	// subscriptions: function() {
	// 	this.register('users', subs.subscribe('users'));
	// },
	action: function() {
		if(Meteor.isClient) {
			document.title = "FKOW | React"
		}
		ReactLayout.render(Welcome)
	}
});

FlowRouter.route('/:page', {
	name: 'post',
	subscriptions: function(params) {
		var pageSlug = params.page;
		this.register('pages', subs.subscribe('pages'));
		// this.register('users', subs.subscribe('users'));
	},
	triggersEnter: [checkIfLoggedIn],
	action: function(params) {

		ReactLayout.render(App, {
			content: <Page title={params.page} />
		});
	}
});

function checkIfLoggedIn(context){

	if(!Meteor.userId()){
		Meteor.call('createNewUser', function(err, response){
				if(err){
					console.log(err)
				}else{
					Meteor.loginWithPassword(response.user, response.password,function(error){
						if(error){
							console.log(error)
						}else{

						}
					})
				}
		})
	}
}
