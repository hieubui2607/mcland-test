import { React } from "react";
import imgbanner from "../../assets/img/logo/banner-mcland.png";
import Search from "../Banner/Banner";
import "./Banner.scss";

function Banner() {
  const Stylefooter = {
    backgroundColor: "#474747",
    bottom: "0",
    left: "0",
    opacity: "0.7",
    height: "3.5em",
    width: "100%",
  };

  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide p-0"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={imgbanner}
                  className="d-block banner-img-stl rounded-4"
                  alt="banner"
                />
              </div>
            </div>
          </div>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Banner;
