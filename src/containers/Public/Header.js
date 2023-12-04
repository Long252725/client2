import React, { useState, memo, useEffect } from "react";
import avatarAnonymous from "../../assets/avatarAnonymous.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { logout } from "../../store/actions";
import { getOne } from "../../store/actions";
import { arrayBufferToBase64 } from "../../ultils/toBase64";
import { path } from "../../ultils/constant";

import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";

// import { logout } from '../store/actions/authAction';

const Header = ({ token, userData, isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (token) {
  //     dispatch(getOne(token));
  //   }
  // }, [dispatch]);

  useEffect(() => {
    function handleLogout() {
      let btnLogout = document.getElementById("menu_choice_cointainer--logout");
      btnLogout.onclick = () => {
        dispatch(logout());
        navigate(path.HOME);
      };
    }

    handleLogout();

    function handleMenu() {
      let menu = document.getElementById("menu");
      let menuChoice = document.getElementById("menu_choice");
      let lopPhu = document.getElementById("lopphu");
      menu.onclick = () => {
        menuChoice.style.display = "block";
        lopPhu.style.display = "block";
      };
      lopPhu.onclick = () => {
        menuChoice.style.display = "none";
        lopPhu.style.display = "none";
      };
    }
    handleMenu();

    function handletoTop() {
      let btntoTop = document.getElementById("to-top");
      btntoTop.onclick = () => {
        window.scrollTo(0, 0);
      };
    }
    handletoTop();
    function alert() {
      let btnAlert = document.getElementById("alert-icon");
      let boxAlert = document.getElementById("boxAlert_container");
      let boxAlertAll = document.getElementById("boxAlert");
      let isClick = false;
      btnAlert.onclick = () => {
        if (!isClick) {
          boxAlertAll.style.height = "300px";
          boxAlert.style.display = "block";
          isClick = true;
        } else {
          boxAlert.style.display = "none";
          isClick = false;
          boxAlertAll.style.height = "10px";
        }
      };
    }
    alert();
  }, []);

  return (
    <div>
      <div className="header" id="header">
        <a
          href="https://otinstore.my.canva.site/?fbclid=IwAR3NdXxFLwMdLMxpG2am7cptVdZNJMdGmqWldWsPf1M1NSlTL4kdZqV8gsY"
          target="blank"
        >
          <div className="box_logo">
            <div className="header_pic"></div>
            <div className="header_pic_name"></div>
          </div>
        </a>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="iconSearch" />
        <input id="search" placeholder="Tìm kiếm"></input>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>

        <i class="fa-solid fa-comment mess-icon"></i>

        <div className="boxAlert" id="boxAlert">
          <i className="fa-solid fa-bell alert-icon" id="alert-icon"></i>
          <div className="boxAlert_container" id="boxAlert_container">
            <div className="boxAlert_header">Thông báo</div>
            <div className="boxAlert_body">
              <div className="boxAlert_select">
                <div className="boxAlert_select--avatar"> </div>
                <div className="boxAlert_select--title">
                  {" "}
                  Get 10 free Adobe Stock photos. Start downloading amazing
                  royalty-free stock photos today.
                </div>
                <div
                  className="boxAlert_select--pic"
                  style={{
                    backgroundImage: `url('${
                      arrayBufferToBase64(userData?.avatar) ||
                      userData?.avatarUrl ||
                      avatarAnonymous
                    }')`,
                  }}
                >
                  {" "}
                </div>
                <div className="boxAlert_select--time"> 12/11/2023 </div>
              </div>
              <div className="boxAlert_select">
                <div className="boxAlert_select--avatar"> </div>
                <div className="boxAlert_select--title">
                  {" "}
                  Get 10 free Adobe Stock photos. today.
                </div>
                <div
                  className="boxAlert_select--pic"
                  style={{
                    backgroundImage: `url('${
                      arrayBufferToBase64(userData?.avatar) ||
                      userData?.avatarUrl ||
                      avatarAnonymous
                    }')`,
                  }}
                >
                  {" "}
                </div>
                <div className="boxAlert_select--time"> 12/11/2023 </div>
              </div>
              <div className="boxAlert_select">
                <div className="boxAlert_select--avatar"> </div>
                <div className="boxAlert_select--title">
                  {" "}
                  Get 10 free Adobe Sto today.
                </div>
                <div
                  className="boxAlert_select--pic"
                  style={{
                    backgroundImage: `url('${
                      arrayBufferToBase64(userData?.avatar) ||
                      userData?.avatarUrl ||
                      avatarAnonymous
                    }')`,
                  }}
                >
                  {" "}
                </div>
                <div className="boxAlert_select--time"> 12/11/2023 </div>
              </div>
              <div className="boxAlert_select">
                <div className="boxAlert_select--avatar"> </div>
                <div className="boxAlert_select--title">
                  {" "}
                  Get 10 free Adobe Sto today.
                </div>
                <div
                  className="boxAlert_select--pic"
                  style={{
                    backgroundImage: `url('${
                      arrayBufferToBase64(userData?.avatar) ||
                      userData?.avatarUrl ||
                      avatarAnonymous
                    }')`,
                  }}
                >
                  {" "}
                </div>
                <div className="boxAlert_select--time"> 12/11/2023 </div>
              </div>
            </div>
          </div>
        </div>
        <div id="accountBox">
          {isLoggedIn ? (
            <div></div>
          ) : (
            <a href="/dang-nhap" className="aOfheader">
              <div className="accountBox_sl accountBox_sl--singup">
                Đăng ký / Đăng nhập
              </div>
            </a>
          )}

          <div className="menu accountBox_sl" id="menu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faCircleUp} className="to-top" id="to-top" />
        </div>
        <div className="lopphu" id="lopphu"></div>

        <div className="menu_choice" id="menu_choice">
          <a href="/profile">
            <div className="menu_choice_account">
              {isLoggedIn ? (
                <div>
                  {userData?.avatarUrl && (
                    <div
                      className="menu_choice_account--pic"
                      style={{
                        backgroundImage: `url('${
                          arrayBufferToBase64(userData?.avatar) ||
                          userData?.avatarUrl ||
                          avatarAnonymous
                        }')`,
                      }}
                    ></div>
                  )}

                  <div className="menu_choice_account--name">
                    {" "}
                    {userData?.name}
                    <i
                      className="fa-solid fa-circle-check right"
                      style={{ color: "#4884ea" }}
                    ></i>
                  </div>

                  <div className="menu_choice_account--money">
                    Số dư: 100.000đ
                  </div>
                </div>
              ) : (
                <div>
                  <div className="menu_choice_account--pic"></div>

                  <div className="menu_choice_account--name">
                    {" "}
                    Bạn chưa đăng nhập
                  </div>

                  <div className="menu_choice_account--money">
                    Log in/ Sign up
                  </div>
                </div>
              )}
            </div>
          </a>
          <div className="menu_choice_cointainer">
            <a href="/">
              <div className="menu_choice_cointainer_select menu_choice_cointainer--home">
                <i className="fa-solid fa-house left"></i> Trang chủ
              </div>
            </a>
            <a href="/wallet">
              <div className="menu_choice_cointainer_select menu_choice_cointainer--wallet">
                <i class="fa-solid fa-wallet left"></i> Ví tiền
              </div>
            </a>
            <a href="/donhang">
              <div className="menu_choice_cointainer_select menu_choice_cointainer--product">
                <i className="fa-brands fa-product-hunt left"></i>Đơn hàng
              </div>
            </a>
            <a href="/profile">
              <div className="menu_choice_cointainer_select menu_choice_cointainer--profile">
                <i className="fa-solid fa-user left"></i>Profile
              </div>
            </a>
            <div className="menu_choice_cointainer_select menu_choice_cointainer--like">
              <i className="fa-solid fa-star left"></i>Yêu thích
            </div>
            <a href="/setting-profile">
              <div className="menu_choice_cointainer_select menu_choice_cointainer--setting">
                <i class="fa-solid fa-gear left"></i>Thiết lập tài khoản
              </div>
            </a>
            <a href="./dang-nhap">
              <button
                className="menu_choice_cointainer_select menu_choice_cointainer--logout"
                id="menu_choice_cointainer--logout"
              >
                <i className="fa-solid fa-clock-rotate-left left"></i>Đăng xuất
              </button>
            </a>
            <div className="menu_choice_cointainer_contact">
              <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--title">
                Liên hệ với chúng tôi
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61553137384013"
                target="blank"
              >
                <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--face">
                  <i className="fa-brands fa-facebook"></i> Facebook
                </div>
              </a>
              <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--x">
                <i className="fa-brands fa-twitter"> </i> Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
