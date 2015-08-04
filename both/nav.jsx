Nav = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
      var handle = Meteor.subscribe('pages');
      var data = {};
      data.route = FlowRouter.current().params.page;
      if(handle.ready()) {
          data.pages = Pages.find({}, {sort: {id: 1}}).fetch()
      }

      return data;
  },

  getContent() {
      var that = this;
      return (
          <div className="main-div">
            <ul className="main-nav">
              {this.data.pages.map(function(page) {
                return <li
                            key={page._id}
                            className={(page.slug === that.data.route) ? 'active' : ''}
                            >
                            <a href={page.slug}>{page.name}</a><
                        /li>
              })}
            </ul>
          </div>
      )
  },

  render() {
    return (this.data.pages) ? this.getContent() : <div>Loading...</div>
  }

});
