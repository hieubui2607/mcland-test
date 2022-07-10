import { React } from "react";
import LoginContact from "../../assets/img/logo/logocontactmcland.png";

const Contact = () => {
  return (
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 m-custom">
            <img className="img-login" src={LoginContact} alt="img-login" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="row g-3 shadow p-4 mb-5 bg-body rounded">
              <div className="col-12 mx-4">
                <h3 className="fw-bold mb-4">Liên hệ hợp tác với chúng tôi!</h3>
                <h5 className="fst-italic">
                  <i className="fa-solid fa-user"></i> Thiều Quang Mạnh Cường
                </h5>
                <h5 className="fst-italic">
                  <i className="fa-solid fa-phone"></i> 0906124143
                </h5>
                <h5 className="fst-italic">
                  <i className="fa-solid fa-envelope"></i>{" "}
                  manhcuongland@gmail.com
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
