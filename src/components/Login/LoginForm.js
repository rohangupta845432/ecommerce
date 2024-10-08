import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordReff = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isloding, setisLoding] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setisLoding(true);
    let emailValue = emailRef.current.value;
    let passwordValue = passwordReff.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=******",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setisLoding(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert("Succesful Login");
        authCtx.login(data.idToken);

        history.replace("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordReff} required />
        </div>
        <div className={classes.actions}>
          {!isloding && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isloding && <p>Sending Request.......</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
