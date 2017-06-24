var React = require('react');
import Name from './Name'

const SignUp = ()=>(
  <div className="sign-up">
    <button type="button" >Sign Up</button>
  </div>
);
const LogIn =()=>(
  <div className="log-in">
    <button type="button" >Log In</button>
  </div>
);

const Header = ()=>(
  <div className="header">
    <Name/>
    <div className="section-links">
    </div>
  </div>
);
export default Header
