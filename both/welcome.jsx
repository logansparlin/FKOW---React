Welcome = React.createClass({
    buttonClick(){
      FlowRouter.go('/heritage-history')
    },
    nextButton(){
      if(Meteor.user()){
        return(
          <button
            onClick={this.buttonClick}
            >Continue</button>
          )
      }else{
        return(
          <button
              onClick={this.buttonClick}
            >Get Started</button>
        )
      }
    },
    render() {
        return (
            <div>
                Welcome to Frank's King of Wings
                <br/>
                {this.nextButton()}
            </div>
        )
    }
})
