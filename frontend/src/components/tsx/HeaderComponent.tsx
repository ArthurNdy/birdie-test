import React from "react";
import birdie from "../../birdie.svg";
import "../css/HeaderComponent.css";

function HeaderComponent() {
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
      <button type="button" className="btn btn-warning position-relative">
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
