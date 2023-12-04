import Bottom from '../../Bottom/bottom';
import Header from '../../containers/Public/Header';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getOne } from '../../store/actions'
import './setting.css';
function Setting({ token, userData, isLoggedIn }) {
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
            dispatch(getOne(token))
        }
    }, [dispatch])
    return (
        <div className="setting">
             <Header  token={token} userData={userData} isLoggedIn={isLoggedIn} />
            <div className="setting_cointainer">
                <div className="setting_box ">
                    <div className="setting_taskbar">
                        <div className="setting_taskbar_title">
                            <i class="fa-solid fa-user left"></i>Tài khoản của tôi
                        </div>
                        <div className="setting_taskbar_box">
                            <a href="setting-profile">
                                <div className="setting_taskbar_box_select">Hồ sơ</div>
                            </a>
                            <a href="setting-payment">
                                <div className="setting_taskbar_box_select">Ngân hàng</div>
                            </a>
                            <a href='setting-address'><div className="setting_taskbar_box_select">Địa chỉ</div></a>
                            <div className="setting_taskbar_box_select">Đổi mật khẩu</div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </div>
    );
}

export default Setting;
