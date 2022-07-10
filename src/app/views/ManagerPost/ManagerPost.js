import { React, useEffect, useState } from "react";
import postsApi from "../../api/postsApi";
import moment from "moment";
import "./ManagerPost.scss";
moment.locale("vi");

const ManagerMember = () => {
  const [managerPosts, setManagerPosts] = useState();

  useEffect(() => {
    const fetchPosts = () => {
      postsApi.myPost().then((res) => setManagerPosts(res));
    };
    fetchPosts();
  }, []);

  console.log(managerPosts);

  return (
    <div className="container-fuild ctn-custom">
      <div className="mx-3 pt-3">
        <h1 className="text-center">Quản lí bài viết</h1>
        <table
          style={{ overflowX: "scroll" }}
          className="table table-success table-responsive"
        >
          <thead>
            <tr>
              <th scope="col">Nhu cầu</th>
              <th scope="col">Chủ đề</th>
              <th scope="col">Ngày đăng</th>
              <th scope="col">Bài viết</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            {managerPosts?.map((post, i) => (
              <tr key={i}>
                <th scope="row">
                  {post.want === "rent" ? "Đăng bán" : "Cho thuê"}
                </th>
                <td
                  className="text-truncate"
                  style={{
                    maxWidth: "200px",
                  }}
                >
                  {post?.title}
                </td>
                <td>{moment(post.createdAt).format("DD/MM/YYYY")}</td>
                <td
                  style={{ width: "500px", heìght: "300px", overflow: "auto" }}
                >
                  {post.description}
                </td>
                <td>
                  <span
                    className={`badge ${
                      post.status ? "bg-success" : "bg-danger"
                    } text-white`}
                  >
                    <i
                      className={
                        post.status
                          ? "fa-solid fa-eye"
                          : "fa-solid fa-eye-slash"
                      }
                      data-toggle="tooltip"
                      data-placement="top"
                      title={post.status ? "Đang hiện" : "đang ẩn"}
                    ></i>
                    {post.status ? " Đang hiện" : " Đang ẩn"}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Chỉnh sửa"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Xóa bài viết"
                  >
                    <i className="fa-solid fa-ban"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerMember;
