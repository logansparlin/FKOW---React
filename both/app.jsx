App = React.createClass({

	render() {
		return (
			<div className="site-wrapper">
				<div className="sidebar">
					<h1>Home | React</h1>
					<Login />
					<Nav />
				</div>
				<div className="main-content">
					{this.props.content}content
				</div>
			</div>
		)
	}

});
