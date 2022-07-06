import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
//https://developers.google.com/identity/sign-in/web/reference#authentication

function OAuth(props) {
  let navigate = useNavigate()
  // const [userId, setUserId] = useState('');
  const [autho, setAutho] = useState({});
  useEffect(()=>{
    //initalizes Google library
    window.gapi.load("client:auth2", () => {
      
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
                setAutho(window.gapi.auth2.getAuthInstance());
    
                 // ^set user id
                //  console.log(autho.currentUser.get().getId())
                // setUserId(autho.currentUser.get().getId());
          
          
                //^update autho state 
                props.setSignIn(autho.isSignedIn.get())
                onAuthoChange(autho.isSignedIn.get());
          
                // console.log(props.signIn)
                // console.log(Number(autho.currentUser.get().getId()))
          
                //^anytime the autho changes, google will call onAuthoChange
                autho.isSignedIn.listen(onAuthoChange);
              }).catch((err)=>{console.log(err)})
          })
          
        }
        ,[])



  const onAuthoChange = (isSignedIn) => {
   if(isSignedIn){
     //pass userId
    //  console.log(isSignedIn)
    //  autho.currentUser.get().getId()
    //  props.setSignIn(autho.currentUser.get())
    props.setSignIn(isSignedIn);
   } else {
    //  props.setSignIn(false);
   }
  };

  const onSignInClick =()=>{
    // console.log(autho.signIn)
    // autho.signIn();
    props.setSignIn(true)
    navigate('/show')
  }


  const onSignOutClick = ()=>{
    autho.signOut()
    props.setSignIn(false)
    navigate('/')
  }

  const auth=()=> {
    if (!props.signIn) {
      return (
        <button
          onClick={onSignInClick}
          className="ui red button  flex-container-two"
        >
          <i className="google icon" />Sign In
        </button>
      );
    } else {
   
      return (
        <button
          onClick={onSignOutClick}
          className="ui green button flex-container-two"
        >
          <i className="google icon" />Sign Out
        </button>
      );
    }
  }

 
    return (
      <div>
        {auth()}
      </div>
    );
  
}



export default OAuth;