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
    },

    renderForm() {
        return (
            <form autoComplete="on" onSubmit={this.formSubmit}>
    			<input type="email" className="login-email" placeholder="Email" />
    			<input type="password" className="login-password" placeholder="Password" />
    			<button className="login-button">Login</button>
    		</form>
        )
    },

    renderUser() {
        return (
            <div>
                <h2 className="user-name">Hey, {this.data.currentUser.profile.firstName}</h2>
    		    <h3>Level | {this.data.currentUser.profile.level}</h3>
                <h2>Points | {this.data.currentUser.profile.progress}</h2>

    		    <span className="signout" onClick={this.signOut}>Sign Out</span>
                <Progress />
            </div>
        )
    },

    render() {
        if(this.data.currentUser) {
            return ( this.renderUser() )
        } else {
            return( this.renderForm() )
        }
    }
})
