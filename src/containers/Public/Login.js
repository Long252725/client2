import React, { useState, useEffect, useRef } from "react";
import videoLogin from "../../assets/login.mp4";
import logo from "../../assets/logowhite.png";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import { apiRegister } from "../../services/authService";
import { path, text } from "../../ultils/constant";
import icons from "../../ultils/icons";

// import { useNavigate } from 'react-router-dom';
// import { logout } from '../store/actions/authAction';
// import { useDispatch, useSelector } from 'react-redux';

import "./login.css";
import { invalid } from "moment";

const { RiEyeOffFill, RiEyeFill, FcGoogle, FaFacebook } = icons;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [invalidFields, setInvalidFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const { isLoggedIn, msg, isTryLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitBtnRef = useRef();
  useEffect(() => {
    const containerSignup = document.getElementById("container_signup");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    registerBtn.addEventListener("click", () => {
      setIsLogin(false);
      containerSignup.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      setIsLogin(true);
      containerSignup.classList.remove("active");
    });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(false);
      navigate(path.HOME);
    } else {
      setIsLoading(false);
      msg && Swal.fire("Oops!", msg, "error");
    }
  }, [isLoggedIn, msg, isTryLogin]);
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      isLogin ? handleLogin() : handleSignup();
    }
  };
  const handleLogin = () => {
    let isValid = validateFields(email, password);
    if (isValid) {
      setIsLoading(true);
      dispatch(actions.login({ email, password }));
      console.log(invalidFields);
      setEmail("");
      setPassword("");
    }
  };
  const handleSignup = async () => {
    let isValid = validateFields(email, password);
    if (isValid) {
      setIsLoading(true);
      let response = await apiRegister({ email, password });
      setIsLoading(false);
      if (response?.data?.err === 0) {
        setIsLogin(true);
        Swal.fire("Success!", response?.data?.msg, "success");
        setEmail("");
        setPassword("");
      } else {
        Swal.fire("Oops!", response?.data?.msg, "error");
      }
    }
  };
  const validateFields = (...argument) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmail = argument[0] ? regexEmail.test(argument[0]) : false;
    let isPasswordMore6 =
      argument[1] && argument[1].trim().length >= 6 ? true : false;
    let invalidFields = [];
    argument.forEach((item, index) => {
      if (item.trim() === "") invalidFields = [...invalidFields, index];
    });
    setInvalidFields(invalidFields);
    if (invalidFields.length === 0) {
      if (!isEmail) {
        setInvalidFields((prev) => [...prev, 0]);
      } else if (!isPasswordMore6) {
        setInvalidFields((prev) => [...prev, 1]);
      } else {
        return true;
      }
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        marginTop: "32px",
      }}
    >
      <div>
        {isLoggedIn ? (
          <div>
            <button type="button" className="btn btn-danger">
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="Signupbox">
            <div className="container_signup" id="container_signup">
              <div className="form-container sign-up">
                <form>
                  <div className="title_login">Create Account</div>
                  <div className="social-icons">
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/google`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                  </div>
                  <span>hoặc sử dụng email của bạn để đăng ký</span>
                  <input type="text" placeholder="Name"></input>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      invalidFields.length !== 0 && setInvalidFields([]);
                    }}
                    onFocus={() => setInvalidFields([])}
                    onKeyDown={handleSubmit}
                  ></input>
                  <input
                    type={isHidePassword ? "password" : "text"}
                    placeholder="Enter password here ..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      invalidFields.length !== 0 && setInvalidFields([]);
                    }}
                    onFocus={() => setInvalidFields([])}
                    onKeyDown={handleSubmit}
                  />
                  {isHidePassword ? (
                    <div
                      title="Hiện mật khẩu"
                      onClick={() => setIsHidePassword(false)}
                      className="icon-eyes"
                    >
                      <RiEyeOffFill />
                    </div>
                  ) : (
                    <div
                      title="Ẩn mật khẩu"
                      onClick={() => setIsHidePassword(true)}
                      className="icon-eyes"
                    >
                      <RiEyeFill />
                    </div>
                  )}
                  {invalidFields.some((item) => item === 1) && (
                    <small className="px-2 text-[#dc3545] italic">
                      {text.PASSWORD_6_LETTERS}
                    </small>
                  )}
                  <div className="signup_title--v1" onClick={handleSignup}>
                    Đăng ký
                  </div>
                </form>
              </div>
              <div className="form-container sign-in">
                <form>
                  <div className="title_login">Đăng nhập</div>
                  <div className="social-icons">
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/google`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                    <a
                      href={`${process.env.REACT_APP_SERVER_URL}/api/auth/facebook`}
                    >
                      <button type="button" class="icon">
                        <i class="fa-brands fa-google-plus-g"></i>
                      </button>
                    </a>
                  </div>
                  <span>hoặc sử dụng mật khẩu email của bạn</span>
                  <input
                    type="email"
                    placeholder="Enter email here ..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      invalidFields.length !== 0 && setInvalidFields([]);
                    }}
                    onFocus={() => setInvalidFields([])}
                    onKeyDown={handleSubmit}
                  />
                  {invalidFields.some((item) => item === 0) && (
                    <small className="px-2 text-[#dc3545] italic">
                      {text.INVALID_EMAIL}
                    </small>
                  )}
                  <input
                    type={isHidePassword ? "password" : "text"}
                    placeholder="Enter password here ..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      invalidFields.length !== 0 && setInvalidFields([]);
                    }}
                    onFocus={() => setInvalidFields([])}
                    onKeyDown={handleSubmit}
                  />
                  {isHidePassword ? (
                    <div
                      title="Hiện mật khẩu"
                      onClick={() => setIsHidePassword(false)}
                      className="icon-eyes-login"
                    >
                      <RiEyeOffFill />
                    </div>
                  ) : (
                    <div
                      title="Ẩn mật khẩu"
                      onClick={() => setIsHidePassword(true)}
                      className="icon-eyes-login"
                    >
                      <RiEyeFill />
                    </div>
                  )}
                  {invalidFields.some((item) => item === 1) && (
                    <small className="px-2 text-[#dc3545] italic">
                      {text.PASSWORD_6_LETTERS}
                    </small>
                  )}
                  <a className="tag-a" href="#">
                    Quên mật khẩu ?
                  </a>
                  <div className="signup_title--v1" onClick={handleLogin}>
                    Đăng nhập
                  </div>
                </form>
              </div>
              <div className="toggle-container">
                <div className="toggle">
                  <div className="toggle-panel toggle-left">
                    <div className="title_login">Welcome Back!</div>
                    <p>
                      Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả
                      các tính năng của trang web
                    </p>
                    <button className=" signup_title" id="login">
                      Đăng nhập
                    </button>
                  </div>
                  <div className="toggle-panel toggle-right">
                    <div className="title_login">Hello, Friend!</div>
                    <p>
                      Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả
                      các tính năng của trang web
                    </p>
                    <button className=" signup_title" id="register">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link to={path.HOME} className="skip_login">
              {text.SKIP_LOGIN}
            </Link>
          </div>
        )}
        {isLoading && <Loading top={"top-0"} />}
      </div>
    </div>
  );
};

export default Login;
