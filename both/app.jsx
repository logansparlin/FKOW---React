ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

App = React.createClass({

	getInitialState() {
		return {
			currentRoute: FlowRouter.current().params.page
		}
	},

	routeHandler(slug) {
		this.setState({currentRoute: slug})
        TweenMax.to($('.body'), 0.5, {y: -10, opacity: 0, force3D: true, onComplete: fadeIn, ease: Quart.easeOut})
		TweenMax.to($('.title-inner'), 0.3, {opacity: 0, y: 20, force3D: true, ease: Quart.easeOut})
        function fadeIn() {
            FlowRouter.go('/' + slug)
            TweenMax.to($('.body'), 0.5, {y: 0, opacity: 1, ease: Quart.easeOut})
			TweenMax.fromTo($('.title-inner'), 0.3, {opacity: 0, y: 20, force3D: true, ease: Quart.easeOut}, {y: 0, opacity: 1})
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
