import { useState } from "react";
import FacebookIcon from "./assits/Facebook icon.svg";
import GmailIcon from "./assits/GmailIcon.svg";
import logInImage from "./assits/Login Illustration.svg";
import logoImage from "./assits/navbar logo.svg";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail(x) {
    setEmail(x);
  }
  function handlePassword(e) {
    setPassword(e);
  }
  function validation() {
    if ((password, email)) {
      alert("your are logged in");
    }
  }
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='imageContainer row col-12 col-md-6 col-lg-4'>
        <div>
        <img className='logo' src={logoImage}/>
        </div>
        <img className='main' src={logInImage} />
        <span>
          To get exciting discounts, offers, free study resources,
        </span> <br/>
        <span>
        special programs from Kids Galaxy <a href='#' >Sign Up here.</a>
        </span>
      </div>
      <div class="verticalLine"></div>
      <div className='formBox row col-6 ' >
        <span>Log in
        </span>
        <form>
          <label>
            E-mail
            <input
              type="text"
              value={email}
              onChange={(x) => handleEmail(x.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
            />
          </label>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <br />
          <a href="#">Forgot Password</a>
          <button onClick={validation}>Log in</button>
        </form>
        <div class="horizonalLine"></div>
        <span>Or log in using</span>
        <div class="horizonalLine"></div>
        <button className='socialMediaLink' role="link" href="#">
          <img src={FacebookIcon} />
        </button>
        <button className='socialMediaLink' role="link" href="#">
          <img src={GmailIcon} />
        </button>
        <span>
          New User? <a href="#">Sign Up</a>
        </span>
      </div>
      
      
    </div>
  );
}
export default LogInForm;
