App = React.createClass({

	render() {
		return (
			<div className="site-wrapper">
				<div className="sidebar">
					<h1><a href={FlowRouter.path('home')}>FKOW</a> | React</h1>
					<Login />
					<Nav />
				</div>
				<div className="main-content">
					{this.props.content}
				</div>
			</div>
		)
	}

});
