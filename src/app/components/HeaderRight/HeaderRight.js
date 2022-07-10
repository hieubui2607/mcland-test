import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/authState/authAction";
import usersApi from "../../api/usersApi";
import { checkTokenSuccess } from "../../reducers/authState/authAction";
import "./HeaderRight.scss";

function HeaderRight() {
  const [isUser, setIsUser] = useState(null);
  const checkAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    if (checkAuth.user) {
      setIsUser(checkAuth.user);
    }
  }, [checkAuth]);

  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (checkToken) {
      usersApi.check().then((res) => {
        dispatch(
          checkTokenSuccess({ accesssToken: res.token, user: res.infoUser })
        );
      });
    }
  }, []);

  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      {isUser ? (
        <div>
          <ul
            className="user_right__header"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
          >
            <li className="user_right__header-name fw-bold">{isUser.name}</li>
            <li className="user_right__header-role badge bg-danger">
              <i className="fa-solid fa-crown"></i> {isUser.role}
            </li>
          </ul>
          <ul
            className="dropdown-menu s-dropdown"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link className="dropdown-item" to="/manager/posts">
                <i className="fa-solid fa-list-check"></i> Quản lí bài viết
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/members">
                <i className="fa-solid fa-people-roof"></i> Quản lí thành viên
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/create-post">
                <i className="fa-solid fa-file-circle-plus"></i> Tạo bài viết
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/add-member">
                <i className="fa-solid fa-user-plus"></i> Thêm thành viên
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                href="/thue-nha-dat"
                className="dropdown-item"
                onClick={logOut}
              >
                <i className="fa-solid fa-right-from-bracket"></i> Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/contact" type="button" className="btn btn-success m-4">
          Liên hệ đăng bài
        </Link>
      )}
    </>
  );
}

export default HeaderRight;
