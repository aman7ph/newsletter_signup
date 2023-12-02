import { useState, useEffect } from "react";
import icon_list from "../assets/images/icon-list.svg";
import illustration_sign from "../assets/images/illustration-sign-up-desktop.svg";
import illustration_sign_mobile from "../assets/images/illustration-sign-up-mobile.svg";
import Success from "./Success";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validSubmit, setValidSubmit] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
    setValidSubmit(emailRegex.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
  };

  useEffect(() => {
    console.log(isValidEmail);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {validSubmit ? (
        <Success email={email} />
      ) : (
        <div className="app-signup">
          {}
          <div className="app-signup-form">
            <h2>Stay Updated!</h2>
            <p className="ptag">
              Join 60000+ product managers receiving monthly updates on:
            </p>
            <div className="form-desc">
              <img src={icon_list} alt="" />
              <p>product discovery and building what matters</p>
            </div>
            <div className="form-desc">
              <img src={icon_list} alt="" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="form-desc">
              <img src={icon_list} alt="" />
              <p>And much more!</p>
            </div>
            <form onSubmit={handleSubmit} className="email-form">
              {isValidEmail ? (
                <label htmlFor="email">Email address</label>
              ) : (
                <div className="label">
                  <label htmlFor="email">Email address</label>
                  <label htmlFor="email" className="error">
                    Valid email required
                  </label>
                </div>
              )}

              <input
                type="text"
                placeholder="ash@loremCompany.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={isValidEmail ? "" : "invalid"}
              />
              <button type="submit" className="btn">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          <div className="app-signup-img">
            <img
              src={
                windowWidth < 800 ? illustration_sign_mobile : illustration_sign
              }
              alt="hero-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
