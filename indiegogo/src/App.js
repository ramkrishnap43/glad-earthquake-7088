import logo from './logo.svg';
import './App.css';

import SignUp from './Component/SignUp';
import Login from "./Component/Login"
import ForgetPassword from './Component/Forget';
import Navbar from './Component/Navbar';
import PopUp from './Component/PopUp';
import Footer from './Component/Footer';
import MessageBox from './Component/MessageBox';
import Home from "./Component/Home"
import Block from './Component/Block';


function App() {
  return (
    <div className="App">
        {/* <SignUp/> */}
        {/* <Login /> */}
        {/* <ForgetPassword /> */}
        {/* <PopUp /> */}
        {/* <Navbar /> */}
        {/* < MessageBox /> */}
        {/* <Footer/> */}
        <Block />
        {/* <Home /> */}
    </div>
  );
}

export default App;
