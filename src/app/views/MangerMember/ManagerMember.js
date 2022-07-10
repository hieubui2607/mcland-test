import { React, useState, useEffect } from "react";
import usersApi from "../../api/usersApi";
import "./ManagerMember.scss";

const ManagerMember = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchPosts = () => {
      usersApi.member().then((res) => setUserData(res));
    };
    fetchPosts();
  }, []);

  return (
    <div className="container ctn-custom">
      <div className="row pt-3">
        <h1 className="text-center">Quản lí thành viên</h1>
        <table className="table table-success">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Gmail</th>
              <th scope="col">SĐT</th>
              <th scope="col">Vai trò</th>
              <th scope="col">Tùy chọn</th>
            </tr>
          </thead>
          {userData?.map((user, i) => (
            <tbody>
              <tr>
                <th scope="row">3</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <span
                    className={`badge ${
                      userData.role === "admin" ? "bg-warning" : "bg-info"
                    } text-dark`}
                  >
                    Quản trị viên
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
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManagerMember;
