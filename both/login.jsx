Login = React.createClass({

    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },

    formSubmit(e) {
        e.preventDefault()
		var email = $('.login-email');
		var password = $('.login-password');
		Meteor.loginWithPassword(email.val(), password.val(), function(err) {
			if(err) {
				console.log(err.reason)
				Session.set('loginError', err.reason)
			} else {
				console.log('success')
				email.val('')
				password.val('')
			}
		})
    },

    signOut() {
        console.log('logging out')
        Meteor.logout();
        FlowRouter.go('/');
    },

    toggleButton() {
        var that = this
		if(!this.props.dashboard) {
            var page = FlowRouter.current().params.page
            Session.set('currentPage', page)
            return (
                <button onClick={this.props.toggleDashboard.bind(null, page)} className="admin-toggle">Open Dashboard</button>
            )
        } else {
            var page = Session.get('currentPage')
            return(
                <button onClick={this.props.toggleDashboard} className="admin-toggle admin-close">Close Dashboard</button>
            )
        }
	},

    renderForm() {
        return (
          <div>
          <form autoComplete="on" onSubmit={this.formSubmit}>
        			<input type="email" className="login-email" placeholder="Email" />
        			<input type="password" className="login-password" placeholder="Password" />
        			<button className="login-button">Login</button>
    		  </form>

          </div>

        )
    },

    renderUser() {
        return (
            <div>
                <h2 className="user-name">Hey, {this.data.currentUser.profile.firstName}</h2>
    		    <h3>Level | {this.data.currentUser.profile.level}</h3>
                <h3>Points | {this.data.currentUser.profile.progress}</h3>
                {this.toggleButton()}

    		    <span className="signout" onClick={this.signOut}>Sign Out</span>
            </div>
        )
    },

    render() {
        if(this.data.currentUser) {
            return ( this.renderUser() )
        } else {
            return( this.renderForm())
        }
    }
})
