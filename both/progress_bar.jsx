Progress = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },

    progressStyle(progress) {
        return {
            transform: 'ScaleX(' + progress + ')'
        }
    },

    render() {
        if(this.data.currentUser) {
            var progress = this.data.currentUser.profile.progress;
        } else {
            progress = 0;
        }
        var percentage = progress / 500;
        return (
            <div className="progress-bar-outer">
                <span className="progress" style={this.progressStyle(percentage)}></span>
            </div>
        )
    }
});
