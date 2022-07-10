import { React, useEffect, useState } from "react";
import LoginImg from "../../assets/img/logo/pagelogin.png";
import usersApi from "../../api/usersApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import "./Login.scss";

import SignUp from "../../components/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { loginAct } from "../../reducers/authState/authAction";

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    usersApi
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.infoUser));
        dispatch(loginAct({ accesssToken: res.token, user: res.infoUser }));
        setIsAuth(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5 m-custom">
          <img className="img-login" src={LoginImg} alt="img-login" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div className="text-end pt-3">
            <button
              type="button"
              className="btn btn-primary btn-lg bd-highlight text-white"
              onClick={handleRegister}
            >
              {showRegister ? "Đăng nhập" : "Tạo tài khoản"}
            </button>
          </div>
          {showRegister ? (
            <SignUp handleRegister />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Đăng nhập</p>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  {...register("email", { required: "Không được để trống." })}
                  className="form-control form-control-lg"
                  placeholder="Điền tài khoản"
                />
                <label className="form-label">Tài khoản</label>
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-danger">{message}</p>
                  )}
                ></ErrorMessage>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  autoComplete="true"
                  {...register("password", { required: true })}
                  className="form-control form-control-lg"
                  placeholder="Điền mật khẩu"
                />
                <label className="form-label">Mật khẩu</label>
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  "Mật khẩu" không chính xác
                </div>
              </div>
              <div className="text-center mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Đăng nhập
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
