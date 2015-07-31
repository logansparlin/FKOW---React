Page = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        var data = {};
        data.page = Pages.findOne({slug: this.props.title})

        return data;
    },

    giveUserPoints() {
        Meteor.call('giveUserPoints', this.data.page.totalPoints)
    },

    resetPoints() {
        Meteor.call('resetPoints')
    },

    getContent() {
        return (
            <div>
                <h1 className="content-title container">{this.data.page.name}</h1>
                <div className="content container">
                    <button key={this.data.page.id} onClick={this.giveUserPoints} id="completeSection">Complete this section +{this.data.page.totalPoints}</button>
                    <h2 onClick={this.resetPoints}>Reset Points</h2>
                </div>
            </div>
        )
    },

    render() {
        return (this.data.page) ? this.getContent() : <div>Loading...</div>
    }
});
