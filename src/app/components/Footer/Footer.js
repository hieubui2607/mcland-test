import { React } from "react";

function Footer() {
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
        <p
          style={Stylefooter}
          className="text-white fst-italic m-0 p-3 text-center  p-0 mt-5"
        >
          @ 2022 Copyright: MC-Lander
        </p>
      </div>
    </>
  );
}

export default Footer;
