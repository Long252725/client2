import { useDispatch } from "react-redux";
import { getOne } from "../../store/actions";
import { useEffect } from "react";
import Setting from "../setting/setting";
import "./setting-profile.css";
function Settingprofile({ token, userData, isLoggedIn }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getOne(token));
    }
  }, [dispatch]);
  return (
    <div className="setting-profile">
      {console.log(userData)}
      <div className="setting_profile_box">
        <div className="setting-profile_cointainer">
          <div className="setting-profile_top">
            <div className="setting-profile_top_title">Hồ sơ của tôi</div>
            <div className="setting-profile_top_second">
              Quản lý thông tin bảo mật tài khoản của bạn
            </div>
          </div>
          <div className="setting-profile_body">
            <div className="setting-profile_body_main">
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_name">
                  Tên đăng nhập
                </div>
                <div className="setting-profile_body_main_namereal">
                  Long252725
                </div>
              </div>
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_fullname">Tên: </div>
                {isLoggedIn ? (
                  <input
                    className="setting-profile_body_main_fullnamereal"
                    placeholder={userData?.name}
                  ></input>
                ) : (
                  <input
                    className="setting-profile_body_main_fullnamereal"
                    placeholder="Tên đầy đủ của bạn "
                  ></input>
                )}
              </div>
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_email">Email: </div>
                {isLoggedIn ? (
                  <div className="setting-profile_body_main_emailreal">
                    {userData?.email}
                  </div>
                ) : (
                  <div className="setting-profile_body_main_emailreal">
                    email@gmail.com
                  </div>
                )}
              </div>
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_sdt">
                  Số điện thoại
                </div>
                <div className="setting-profile_body_main_sdtreal">
                  09234278462347
                </div>
              </div>
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_gen">Giới tính</div>
                <input
                  className="setting-profile_body_main_genreal"
                  placeholder="Nam"
                ></input>
              </div>
              <div className="setting-profile_body_main_select">
                <div className="setting-profile_body_main_bird">Ngày sinh</div>
                <input
                  className="setting-profile_body_main_birdreal"
                  placeholder="10/07/2006"
                ></input>
              </div>
            </div>
          </div>
          <button className="setting-profile_save">Lưu</button>
          {isLoggedIn ? (
            <div
              className="setting-profile_pic"
              style={{ backgroundImage: `url('${userData?.avatarUrl}')` }}
            ></div>
          ) : (
            <div className="setting-profile_pic"></div>
          )}
          <button className="setting-profile_changepic">Chọn ảnh</button>
        </div>
      </div>
      <Setting token={token} userData={userData} isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default Settingprofile;
