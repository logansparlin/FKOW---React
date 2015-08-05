Nav = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
      var handle = Meteor.subscribe('pages');
      var data = {};
      data.route = this.props.route;
      if(handle.ready()) {
          data.pages = Pages.find({}, {sort: {id: 1}}).fetch()
      }

      return data;
  },

  getInitialState() {
      return {
          transitioning: false
      }
  },

  routeHandler(slug) {
      this.props.onClick(slug)
  },

  getContent() {
      var that = this;
      return (
          <div className="main-div">
            <ul className="main-nav">
              {this.data.pages.map(function(page) {
                return <li
                            key={page._id}
                            onClick={(page.slug !== that.data.route) ? that.routeHandler.bind(that, page.slug) : ''}
                            className={(page.slug === that.data.route) ? 'active' : ''}
                            >
                            <a>{page.name}</a>
                        </li>
              })}
            </ul>
          </div>
      )
  },

  render() {
    return (this.data.pages) ? this.getContent() : <div>Loading...</div>
  }

});
