import { useDispatch } from "react-redux";
import { getOne } from "../../store/actions";
import { useEffect } from "react";
import Setting from '../setting/setting';
import './setting-address.css';
function SettingAddress({ token, userData, isLoggedIn } ) {
    const dispatch = useDispatch();
    useEffect(() => {
      if (token) {
        dispatch(getOne(token));
      }
    }, [dispatch]);
    useEffect(() => {
        function handleUpdateAddress() {
            let btnAddress = document.getElementById('setting-address_top_btn');
            let boxAddress = document.getElementById('setting-address_box');
            let lopphuAddress = document.getElementById('setting-address_lopphu');
            btnAddress.onclick = () => {
                boxAddress.style.display = 'block';
                lopphuAddress.style.display = 'block';
            };
            lopphuAddress.onclick = () => {
                boxAddress.style.display = 'none';
                lopphuAddress.style.display = 'none';
            };
        }
        handleUpdateAddress();
    }, []);
    return (
        <div className="setting-address">
            {' '}
            <div className="setting-address_lopphu" id="setting-address_lopphu"></div>
            <div className="setting-address_box" id="setting-address_box">
                <div className='setting-address_box_title'>Địa chỉ mới</div>
                <input className='setting-address_box_name' placeholder='Họ và tên'></input>
                <input className='setting-address_box_sdt' placeholder='Số điện thoại'></input>
                <input className='setting-address_box_address' placeholder='Địa chỉ cụ thể'></input>
                <div className='setting-address_box_type'>Loại địa chỉ:
                <button className='setting-address_box_type_select setting-address_box_type_select--1'> Nhà riêng</button>
                <button className='setting-address_box_type_select setting-address_box_type_select--2'>Văn phòng</button>
                </div>
                <div className='setting-address_box_type_notice'><input type='radio' className='left'></input>Đặt làm địa chỉ mặc định</div>
                <button className='setting-address_box_save'>Lưu</button >
                
            </div>
            <div className="setting-address_cointainer">
                <div className="setting-address_top">
                    <div className="setting-address_top_title">Địa chỉ của tôi</div>
                    <div className="setting-address_top_btn" id='setting-address_top_btn'>
                        <i class="fa-solid fa-plus left"></i>Thêm địa chỉ mới
                    </div>
                </div>
                <div className="setting-address_alert">Bạn chưa thêm địa chỉ :{'((('}</div>
            </div>
            <Setting token={token} userData={userData} isLoggedIn={isLoggedIn}/>
        </div>
    );
}

export default SettingAddress;
