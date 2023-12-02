import icon_success from "../assets/images/icon-success.svg";

function hadleClick() {
  window.location.reload();
}
const Success = (prop) => {
  return (
    <div className="app-signup-success">
      <div className="p1">
        <img src={icon_success} alt="success" />
        <h2>Thankes for Sucscribing!</h2>
        <p>
          A confirmatiom email has been sent to <p>{prop.email}</p> please open
          it and click the button inside to confirm your subscription
        </p>
      </div>

      <button className="btn" onClick={hadleClick}>
        Dismiss Message
      </button>
    </div>
  );
};

export default Success;
