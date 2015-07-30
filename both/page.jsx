Page = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        var data = {};
        data.page = Pages.findOne({slug: this.props.title})

        return data;
    },

    getContent() {
        return (
            <div>
                <h1 className="content-title container">{this.data.page.name}</h1>
                <div className="content container">
                    <button key={this.data.page.id} id="completeSection">Complete this section</button>
                </div>
            </div>
        )
    },

    render() {
        return (this.data.page) ? this.getContent() : <div>Loading...</div>
    }
});
