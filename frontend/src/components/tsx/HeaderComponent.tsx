import React from "react";
import birdie from "../../birdie.svg";
import "../css/HeaderComponent.css";

interface Props {
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  nbAlerts: number;
}

function HeaderComponent(props: Props) {
  
  function HandleClick() {
    //Handle the click on the "important events" button to display or not the alerts card
    props.setShowAlerts(!props.showAlerts);
  }

  return (
    <nav className="navbar fixed-top navbar-light">
      <div className="navbar-brand">
        <a href="https://www.birdie.care/">
          <img
            id="logo"
            src={birdie}
            width="35%"
            height="35%"
            className="d-inline-block align-center"
            alt=""
          />
        </a>
      </div>
      <button
        onClick={HandleClick}
        type="button"
        className="btn btn-warning position-relative"
      >
        Important Events
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.nbAlerts}
        </span>
      </button>
    </nav>
  );
}

export default HeaderComponent;
