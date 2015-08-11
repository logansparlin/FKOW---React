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

        var button,
            component = this.data.page.component;
        if(this.data.page.completed == true) {
            button = <button
                        key={this.data.page.id}
                        id="completeSection"
                        style={styles.completed}>
                        Section Completed
                    </button>
        } else {
            button = <button
                        key={this.data.page.id}
                        onClick={this.giveUserPoints}
                        id="completeSection">
                        Complete this section +{this.data.page.totalPoints}
                    </button>
        }
        return (
            <div>
                <h1 className="content-title container">
                    <span className="title-inner">
                        {this.data.page.name}
                    </span>
                </h1>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                        eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                        justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                        lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                    </p>
                    <div className="content container">
                        {button}
                        <h2 onClick={this.resetPoints}>Reset Points</h2>
                    </div>
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
