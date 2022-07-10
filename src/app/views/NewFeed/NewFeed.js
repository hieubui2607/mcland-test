import React from "react";
import Post from "../../components/Post/Post";
import "./NewFeed.scss";

export default function NewFeed() {
  return (
    <div className="container-fluid h-custom">
      <div className="row nf-row_custom">
        <div className="nf-search">
          <div className="row">
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <p>sdadadasaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <p>sasdasssssssssssssssssssssssssssss</p>
              </div> */}
          </div>
        </div>
        <div className="nf-title">
          <div className="nf-title_left">
            <span>
              <i className="fa-solid fa-house"></i> Mua nhà đất
            </span>
          </div>
          <div className="nf-title_right">
            <button className="btn custom-btn">
              <i className="fa-solid fa-arrows-rotate"></i>
              <span className="text-refresh"> Làm mới</span>
            </button>
          </div>
        </div>
        <div className="nf-post">
          <Post />
        </div>
      </div>
    </div>
  );
}
