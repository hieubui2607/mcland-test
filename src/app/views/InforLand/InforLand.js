import React, { useState, useEffect } from "react";
import ReviewImages from "../../components/ReviewImages/ReviewImage";
import postApi from "../../api/postsApi";
import { useParams } from "react-router-dom";
import "./InforLand.scss";

function InforLand() {
  const slug = useParams().id;
  const [land, setLand] = useState();
  const [isTruncate, setIsTruncate] = useState(true);

  useEffect(() => {
    const fetchLands = () => {
      postApi.land(slug).then((res) => setLand(res));
    };
    fetchLands();
  }, [slug]);

  console.log("info", land);

  return (
    <div className="container">
      {land?.map((data) => (
        <div className="row pt-5">
          <ReviewImages photos={data.photos} />
          <div className="authors_inforland-elm"></div>

          <div className="infor_del-description">
            <div className="infor__title">
              <h4>{data.title}</h4>
              <p className="infor__location">
                {data.location.address}, {data.location.ward},
                {data.location.district}, {data.location.city}
              </p>
            </div>
            <div className="infor-utilities">
              <div className="infor_author">
                <div className="profile_celler">
                  <div className="profile_celler-avatar">
                    <span className="profile_celler-avatar__default">C</span>
                  </div>
                  <div className="profile_celler-author">
                    <span className="profile_celler-author__title">
                      Người đăng bài:
                    </span>
                    <span className="profile_celler-author__name">
                      {data.author.name}
                    </span>
                  </div>
                  <div className="profile_celler-info">
                    <div>
                      <i className="fa-solid fa-phone"></i>
                      <span
                        id="telephone"
                        className="profile_celler-info__hotline"
                      >
                        {data.author.telephone}
                      </span>
                    </div>
                    <div>
                      <i className="fa-solid fa-envelope"></i>
                      <span className="profile_celler-info__mail">
                        {data.author.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="infor-lander">
                  <div className="utilities-item">
                    <span className="title">
                      <i class="fa-solid fa-sack-dollar"></i> Mức giá
                    </span>
                    <span className="value">15tr/tháng</span>
                  </div>
                  <div className="utilities-item">
                    <span className="title">
                      <i class="fa-solid fa-ruler-combined"></i> Diện tích
                    </span>
                    <span className="value">100m2</span>
                  </div>
                  <div className="utilities-item">
                    <span className="title">
                      <i class="fa-solid fa-bed"></i> Phòng ngủ
                    </span>
                    <span className="value">2 phòng</span>
                  </div>
                  <div className="utilities-item">
                    <span className="title">
                      <i class="fa-solid fa-bath"></i> Phòng tắm
                    </span>
                    <span className="value">1 phòng</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="infor-descreption">
              <h4>Thông tin mô tả</h4>
              <p
                className={
                  isTruncate
                    ? "content-descreption-truncate"
                    : "content-descreption"
                }
              >
                {data.description}
              </p>
              <span
                className="watch-continue"
                onClick={() => setIsTruncate(!isTruncate)}
              >
                {isTruncate ? "...Xem thêm" : "...Rút gọn"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InforLand;
