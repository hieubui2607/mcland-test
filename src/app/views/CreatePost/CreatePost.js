import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import postsApi from "../../api/postsApi";
import uploadApi from "../../api/uploadApi";
import dataCity from "./local.json";
import { useNavigate } from "react-router-dom";
import "./CreatePost.scss";

function CreatePost() {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  const [checkDistricts, setCheckDistricts] = useState([]);
  const [checkWards, setCheckWards] = useState([]);
  const navigate = useNavigate();

  const optionSelectorArea = (e) => {
    setSell(e === "sell");
    setRent(e === "rent");
  };

  const optionSell = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
  ];
  const optionRent = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
    { value: "homestay", title: "Phòng trọ" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      want: "",
      title: "",
      classify: "",
      location: {
        address: "",
        city: "",
        ward: "",
        district: "",
      },
      utilities: {
        acreage: "",
        price: "",
        bedroom: "",
        bathroom: "",
      },
      description: "",
    },
  });

  const onSubmit = async (data) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    };
    let formData = new FormData();
    const files = data.files;
    for (let i = 0; i < files.length; i++) {
      let file = files.item(i);
      const s = `photo`;
      formData.append(s, file);
      console.log(file);
      console.log(formData);
    }
    await uploadApi
      .upload(formData, config)
      .then((response) => {
        const photos = response.photos;
        const postData = { ...data, photos };
        postsApi.create(postData, config).then((res) => {
          navigate(`/${res.slug}`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }} className="container">
      <div className="row pt-3">
        <h1 className="text-center">Đăng bài</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-md-6 pb-3">
              <span className="title-input ">Bạn muốn: </span>
              <input
                {...register("want", { required: true })}
                type="radio"
                onChange={(e) => optionSelectorArea("sell")}
                className="btn-check r-sell"
                defaultValue="sell"
                id="option1"
              />
              <label
                className="btn btn-custom_l form-control-lg"
                htmlFor="option1"
              >
                Bán
              </label>
              <input
                {...register("want", { required: true })}
                type="radio"
                onChange={(e) => optionSelectorArea("rent")}
                className="btn-check r-rent"
                defaultValue="rent"
                id="option2"
              />
              <label
                className="btn btn-custom_r form-control-lg"
                htmlFor="option2"
              >
                Cho thuê
              </label>
            </div>
            <div className="col-12 col-md -6">
              <select
                type="select"
                Disable={!sell && !rent ? true : false}
                className="form-select"
                {...register("classify", { required: true })}
              >
                <option disabled selected>
                  Chọn bật động sản
                </option>
                {sell
                  ? optionSell.map((data) => (
                      <option value={data.value}>{data.title}</option>
                    ))
                  : null}
                {rent
                  ? optionRent.map((data) => (
                      <option value={data.value}>{data.title}</option>
                    ))
                  : null}
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="exampleInput" className="form-label">
                Tiêu đề bài viết:
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                {...register("title", { required: true })}
                placeholder="Tiêu đề của bạn"
              ></input>
            </div>
            <div className="mt-3">
              <label htmlFor="exampleInput" className="form-label">
                Địa chỉ:
              </label>
              <input
                className="form-control"
                type="text"
                {...register("location.address", { required: true })}
                placeholder="(ví trí khu đất, nhà, phòng trọ...)"
              ></input>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-sm-4">
                <label htmlFor="exampleInput" className="form-label">
                  Thành phố/Tỉnh:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  {...register("location.city", { required: true })}
                  onChange={(e) => {
                    const districtsOfLand = dataCity.find(
                      (data) => data.name === e.target.value
                    );
                    setCheckDistricts(districtsOfLand.districts);
                  }}
                >
                  <option disabled selected>
                    Thành phố/Tỉnh
                  </option>
                  {dataCity.map((city) => (
                    <option value={city?.name}>{city?.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-sm-4">
                <label htmlFor="exampleInput" className="form-label">
                  Quận/Huyện:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  {...register("location.district", { required: true })}
                  onChange={(e) => {
                    const wardsOfLand = checkDistricts.find(
                      (data) => data.name === e.target.value
                    );
                    setCheckWards(wardsOfLand.wards);
                  }}
                >
                  <option disabled selected>
                    Quận/Huyện
                  </option>
                  {checkDistricts?.map((dist) => (
                    <option value={dist?.name}>{dist?.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-sm-4">
                <label htmlFor="exampleInput" className="form-label">
                  Phường/Xã:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  {...register("location.ward", { required: true })}
                >
                  <option disabled selected>
                    Phường/Xã
                  </option>
                  {checkWards.map((ward) => (
                    <option value={ward.name}>{ward.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 col-sm-3">
                <label htmlFor="inputPassword" className="col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    {...register("utilities.acreage", { required: true })}
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <label htmlFor="inputPassword" className="col-form-label">
                  Giá cả:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    {...register("utilities.price", { required: true })}
                  />
                  <select className="input-group-text">
                    <option value="1">Triệu</option>
                    <option value="2">Tỷ</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <label for="inputPassword" className="col-form-label">
                  Phòng ngủ
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    {...register("utilities.bedroom")}
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <label htmlFor="inputPassword" className="col-form-label">
                  Phòng tắm
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    {...register("utilities.bathroom")}
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
            </div>

            <label for="exampleInput" className="col-sm-1 col-form-label">
              Mô tả
            </label>
            <div className="input-group pt-3">
              <textarea
                for="exampleInput"
                className="form-control"
                {...register("description", { required: true })}
              ></textarea>
            </div>
            <div className="pt-3">
              <label htmlFor="formFileLg" className="form-label">
                Chọn ảnh
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                {...register("files")}
                type="file"
                multiple
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary btn-lg ">
              Đăng bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
