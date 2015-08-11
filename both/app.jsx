App = React.createClass({

	getInitialState() {
		return {
			currentRoute: FlowRouter.current().params.page,
			dashboardActive: this.props.dashboardActive || false
		}
	},

	routeHandler(slug) {
		this.setState({currentRoute: slug, dashboardActive: false})
        TweenMax.to($('.body'), 0.5, {y: -10, opacity: 0, force3D: true, onComplete: fadeIn, ease: Quart.easeOut})
		TweenMax.to($('.title-inner'), 0.3, {opacity: 0, y: 20, force3D: true, ease: Quart.easeOut})
        function fadeIn() {
            FlowRouter.go('/' + slug)
            TweenMax.to($('.body'), 0.5, {y: 0, opacity: 1, ease: Quart.easeOut})
			TweenMax.fromTo($('.title-inner'), 0.3, {opacity: 0, y: 20, force3D: true, ease: Quart.easeOut}, {y: 0, opacity: 1})
        }
    },

	toggleDashboard(page) {
		var that = this;
		if(!this.state.dashboardActive) {
			that.setState({dashboardActive: true}, function() {
				TweenMax.fromTo($('#dashboard'), 0.5, {y: '100%', autoRound: false, force3D: true}, {y: '0%', force3D: true, ease: Power4.easeOut})
			})
		} else {
			TweenMax.fromTo($('#dashboard'), 0.2, {y: '0%', opacity: 1, autoRound: false, force3D: true}, {y: '100%', opacity: 0, force3D: true, ease: Circ.easeIn, onComplete: hide})
			function hide() {
				that.setState({dashboardActive: false})
			}
		}
	},

	renderDashboard() {
		if(this.state.dashboardActive) {
			return (
				<div id="dashboard">
					<Dashboard />
				</div>
			)
		}
	},

	render() {
		return (
			<div className="site-wrapper">
				<div className="sidebar">
					<div className="dashboard-info">
						<h1><a href={FlowRouter.path('home')}>FKOW</a> | React</h1>
						<Login toggleDashboard={this.toggleDashboard} dashboard={this.state.dashboardActive}/>
					</div>
					<Progress />
					<Nav onRoute={this.routeHandler} route={this.state.currentRoute}/>
				</div>
				{this.renderDashboard()}
				<div className="main-content">
					{this.props.content}
				</div>
			</div>
		)
	}

});
