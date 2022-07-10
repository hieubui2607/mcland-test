import { React } from "react";
import { useForm } from "react-hook-form";
import usersApi from "../../api/usersApi";
import { ErrorMessage } from "@hookform/error-message";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      telephone: "",
      role: "mod",
    },
  });

  const onSubmit = async (data) => {
    await usersApi
      .register(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">Tạo tài khoản</p>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            {...register("name")}
            className="form-control form-control-lg"
            placeholder="Họ và tên"
          />
          <label className="form-label">Họ và tên</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            {...register("telephone")}
            className="form-control form-control-lg"
            placeholder="Số điện thoại"
          />
          <label className="form-label">Số điện thoại</label>
          <ErrorMessage
            errors={errors}
            name="telephone"
            render={({ message }) => <p className="text-danger">{message}</p>}
          ></ErrorMessage>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            {...register("email")}
            className="form-control form-control-lg"
            placeholder="Điền tài khoản"
          />
          <label className="form-label">Email</label>
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
        </div>
        <div className="form-outline mb-3">
          <select
            type="select"
            {...register("role", { required: true })}
            className="form-select form-control-lg"
          >
            <option value="mod">Quản trị viên</option>
            <option value="admin">Quản lí (Cấp bậc cao nhất)</option>
          </select>
          <label className="form-label">Vai trò</label>
        </div>
        <div className="text-center mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg">
            Tạo tài khoản
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
