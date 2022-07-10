import React from "react";
import NotFoundImg from "../../assets/img/logo/pagenotfound.png";

function NotFound() {
  return (
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5 m-custom">
          <img className="img-login" src={NotFoundImg} alt="img-login" />
          <h1>Trang này hiện không có!!!</h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
