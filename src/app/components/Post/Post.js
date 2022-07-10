import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";
import postApi from "../../api/postsApi";
import "./Post.scss";
moment.locale("vi");

function Post() {
  const params = useParams();
  console.log("params", params);
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchLands = async () => {
      const params = {
        _limit: 1,
      };
      const landsList = await postApi.get(params);
      setData(landsList);
    };
    fetchLands();
  }, []);

  if (datas.length <= 0) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  console.log(process.env.REACT_APP_URL_API + `public/${datas}`);

  return (
    <>
      {datas?.map((data, key) => (
        <div key={key} className="card shadow-sm mb-3 s-hover">
          <Link to={`/${data.slug}`}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    process.env.REACT_APP_URL_API + `public/${data.photos[0]}`
                  }
                  className="img-fluid rounded-start img-card"
                  alt="thumb-post"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body p-3 h-100">
                  <h5 className="card-title text-f_title">{data.title}</h5>
                  <div>
                    <span>{data.utilities.price}Tỷ</span> *{" "}
                    <span>{data.utilities.acreage}m²</span>
                  </div>
                  <h5>
                    {data.location.address}, {data.location.district},{" "}
                    {data.location.city}
                  </h5>
                  <p className="card-text text-f_description">
                    {data.description}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {moment(data.createdAt).fromNow()}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Post;
