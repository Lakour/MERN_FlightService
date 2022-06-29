import React from "react";

//https://developers.google.com/identity/sign-in/web/reference#authentication

class OAuth extends React.Component {
  state = {userId: ''};
  // autho = {};
  componentDidMount() {
    
    //initalizes Google library
    window.gapi.load("client:auth2", () => {
      // console.log(this.props)

      //init returns a promise
      window.gapi.client
        .init({
          clientId:
            "495241874855-vq1bmk07av8jmp3ms2a1mjunc23olgl7.apps.googleusercontent.com",
          //request email only
          scope: "email",
          plugin_name: "streamy"
        })
        .then(() => {

          //^get auth instance object and assign it
          this.autho = window.gapi.auth2.getAuthInstance();
          
           // ^set user id
          this.setState({userId:this.autho.currentUser.get().getId()});
          
        
          //^update autho state 
          this.props.setSignIn(this.autho.isSignedIn.get())
          this.onAuthoChange(this.autho.isSignedIn.get());

          // console.log(this.props.signIn)
          // console.log(Number(this.autho.currentUser.get().getId()))

          //^anytime the autho changes, google will call onAuthoChange
          this.autho.isSignedIn.listen(this.onAuthoChange);
        }).catch((err)=>{console.log(err)})
    });
  }



  onAuthoChange = (isSignedIn) => {
   if(isSignedIn){
     //pass userId
     console.log(isSignedIn)
    //  this.autho.currentUser.get().getId()
    //  this.props.setSignIn(this.autho.currentUser.get())
    this.props.setSignIn(isSignedIn);
   } else {
    //  this.props.setSignIn(false);
   }
  };

  onSignInClick =()=>{
    // console.log(this.autho)
    this.autho.signIn();
  }

  onSignOutClick = ()=>{
    console.log(this.autho)

    this.props.setSignIn(false)
    this.autho.signOut()
  }

  auth() {
    if (!this.props.signIn) {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui red button  flex-container-two"
        >
          <i className="google icon" />Sign In
        </button>
      );
    } else {
   
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui green button flex-container-two"
        >
          <i className="google icon" />Sign Out
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.auth()}
      </div>
    );
  }
}



export default OAuth;