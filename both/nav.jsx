Nav = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
      var handle = Meteor.subscribe('pages');
      var data = {};
      if(handle.ready()) {
          data.pages = Pages.find({}, {sort: {id: 1}}).fetch()
      }

      return data;
  },

  getContent() {
      return (
          <div className="main-div">
            <ul>
              {this.data.pages.map(function(page) {
                return <li key={page._id}><a href={page.slug}>{page.name}</a></li>
              })}
            </ul>
          </div>
      )
  },

  render() {
    return (this.data.pages) ? this.getContent() : <div>Loading...</div>
  }

});
