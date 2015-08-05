ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

App = React.createClass({

	getInitialState() {
		return {
			currentRoute: FlowRouter.current().params.page
		}
	},

	routeHandler(slug) {
		this.setState({currentRoute: slug})
        TweenMax.to($('.body'), 0.5, {opacity: 0, force3D: true, onComplete: fadeIn, ease: Quart.easeOut})
        function fadeIn() {
            FlowRouter.go('/' + slug)
            TweenMax.to($('.body'), 0.5, {opacity: 1, ease: Quart.easeOut})
        }
    },

	render() {
		return (
			<div className="site-wrapper">
				<div className="sidebar">
					<h1>FKOW | React</h1>
					<Login />
					<Nav onClick={this.routeHandler} route={this.state.currentRoute}/>
				</div>
				<div className="main-content">
					{this.props.content}
				</div>
			</div>
		)
	}

});
