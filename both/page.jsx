Page = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        var handle = Meteor.subscribe('singlePage', this.props.title)
        var data = {};
        data.page = Pages.findOne({slug: this.props.title})
        return data;
    },

    giveUserPoints() {
        Meteor.call('giveUserPoints', this.data.page.random_id )
    },

    resetPoints() {
        Meteor.call('resetPoints')
    },

    getContent() {

        var button;
        if(this.data.page.completed == true) {
            button = <button key={this.data.page.id} id="completeSection" style={styles.completed}>Section Completed</button>
        } else {
            button = <button key={this.data.page.id} onClick={this.giveUserPoints} id="completeSection">Complete this section +{this.data.page.totalPoints}</button>
        }
        return (
            <div>
                <h1 className="content-title container">{this.data.page.name}</h1>
                <div className="content container">
                    {button}
                    <h2 onClick={this.resetPoints}>Reset Points</h2>
                </div>
            </div>
        )
    },

    getLoading() {
        function toUpperCase(str) {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        var slug = this.props.title.replace('-', ' '),
            name = toUpperCase(slug);
        return (
            <div>
                <h1 className="content-title container">{this.props.title}</h1>
            </div>
        )
    },

    render() {
        return (this.data.page) ? this.getContent() : this.getLoading()
    }
});

var styles = {
    completed: {
        backgroundColor: 'green',
    }
}
