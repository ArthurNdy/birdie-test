import React from "react";
import birdie from "../../birdie.svg";
import "../css/HeaderComponent.css";

interface Props {
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
}


function HeaderComponent(props: Props) {
  
  function HandleClick() {
      console.log("CLICKED")
      props.setShowAlerts(!props.showAlerts);
  }

  return (
    <nav className="navbar fixed-top navbar-light">
      <div className="navbar-brand">
        <img
          id="logo"
          src={birdie}
          width="35%"
          height="35%"
          className="d-inline-block align-center"
          alt=""
        />
      </div>
      <button onClick={HandleClick} type="button" className="btn btn-warning position-relative" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
        Alerts
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          5
        <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </nav>

  );
}

export default HeaderComponent;
