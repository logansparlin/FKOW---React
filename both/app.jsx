App = React.createClass({

	render() {
		return (
			<div className="site-wrapper">
				<div className="sidebar">
					<h1>FKOW | React</h1>
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
