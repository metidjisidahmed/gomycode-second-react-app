import logo from './logo.svg';
import './App.css';
import AdoptCatForm from "./Compounent/AdoptCatForm";
import LastPosts from "./Compounent/LastPosts";
import AdoptCatFormV2 from "./Compounent/AdoptCatFormV2";
import SignUpForm from "./Compounent/SignUpForm";
import HeadNavBar from "./Compounent/HeadNavBar";
import {Route , Router , Switch} from "react-router";

import {history} from "./index";
import {useState} from "react";

import {Link , Redirect} from "react-router-dom";

// you have to be connected to enter them
const PrivateRoute =(props)=>{
    return(
        props.isAuth == true ?  props.children : <Redirect to="/signup"/>
    )
}


// you have to be disconnected to enter them

const AuthRoute= (props)=>{
    return(
        props.isAuth == false ?  props.children : <Redirect to="/"/>
    )
}


function App() {

    const [ isOussamahappy , setOussamahappiness]= useState(true)


   function goBack(event){
       history.goBack()
   }

    function pushForward(event){
        history.goForward()
    }

    function push(event){
        if(isOussamahappy){
            history.push('/signup')
        }
    }


    const [isAuthState , setAuthState]= useState(false)

  return (
      <>
        {/*<LastPosts/>*/}
        {/*<AdoptCatForm/>*/}
        {/*  <AdoptCatFormV2/>*/}
        {/*  <SignUpForm/>*/}
          <HeadNavBar/>
        <button ><Link to={"/signup"}>Go to signup Form</Link></button>
        <button><Link to={"/adopt-cat"}>Go to Adopt Cat</Link></button>
        <button><Link to={"/adopt-cat-v2"}>Go to Adopt Cat V2</Link></button>
        <button onClick={goBack}>Go back </button>
        <button onClick={pushForward}> go forward </button>
        <button onClick={()=>setOussamahappiness(false)}>Make oussama Sad</button>
        <button onClick={()=>setOussamahappiness(true)}>Make oussama Happy</button>

        <button onClick={push} > Go to /signup if oussama is happy</button>


          <div style={{ display : "flex"}}>
              <button onClick={()=>setAuthState(true)}>Connect </button>
              <button onClick={()=>setAuthState(false)}>DeConnect </button>

              { isAuthState == true ? <div style={{color : "green"}}>Connected !</div> : <div style={{color : "red"}}>Disconnected!</div>  }
          </div>

          <Switch>
              <Route exact={true} path="/signup" component={()=> <AuthRoute isAuth={isAuthState}> <SignUpForm/> </AuthRoute>    } />
              <Route exact={true} path="/adopt-cat" component={()=> <PrivateRoute isAuth={isAuthState}> <AdoptCatForm/> </PrivateRoute> }  />
              <Route exact={true} path="/adopt-cat-v2" component={()=> <PrivateRoute isAuth={isAuthState}> <AdoptCatFormV2/> </PrivateRoute>}  />
          </Switch>
      </>

  );
}

export default App;
