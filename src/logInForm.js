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
    <div>
      <div className="header ">
        <div className="headerTip">
          <span>" What's meant to be will find way "</span>
        </div>
        <div className="logo d-flex ">
          <img src={logoImage} />
        </div>
      </div>

      <div className="bodyIllustrations d-flex justify-content-center ">
        <div className="mainImg d-none d-md-block col-lg-5">
          <img src={logInImage} />
          <div>
            <span>
              To get exciting discounts, offers, free study resources,
            </span>
            <br />
            <span>
              special programs from Kids Galaxy <a href="#">Sign Up here.</a>
            </span>
          </div>
        </div>

        <div class="verticalLine "></div>

        <div className="d-flex justify-content-center col-12 col-md-6 col-lg-4">
          <div className="formBox">
            <div className="cardHeader">
              <p>Log in</p>
              <hr />
            </div>
            <div className="formConrainer">
              <form>
                <div>
                  <label className="d-block">E-mail</label>

                  <input
                    className="inputField"
                    type="text"
                    value={email}
                    onChange={(x) => handleEmail(x.target.value)}
                  />
                </div>
                <div>
                  <label className="d-block">Password </label>
                  <input
                    className="inputField"
                    type="password"
                    value={password}
                    onChange={(e) => handlePassword(e.target.value)}
                  />
                </div>
                <div className="formRow">
                  <div>
                    <input type="checkbox" className="checkBoxInput" />
                    <label>Remember me </label>
                  </div>
                  <a href="#">Forgot Password</a>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={validation}
                    className="logInBtn"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
            <div className="lines ">
              <div class="horizonalLine"></div>
              <div>
                <span>Or log in using</span>
              </div>
              <div class="horizonalLine"></div>
            </div>
            <div className="btnsBox">
              <button className="socialMediaLink" role="link" href="#">
                <img className="socialMediaLink" src={FacebookIcon} />
              </button>

              <button className="socialMediaLink" role="link" href="#">
                <img className="socialMediaLink" src={GmailIcon} />
              </button>
            </div>
            <div className="spanRow">
              <span>
                New User? <a href="#">Sign Up</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pageFooter"></div>
    </div>
  );
}
export default LogInForm;
