import { useDispatch } from "react-redux";
import { getOne } from "../../store/actions";
import { useEffect } from "react";
import Setting from '../setting/setting';
import './setting-payment.css';
function Settingpayment({ token, userData, isLoggedIn }) {
    const dispatch = useDispatch();
    useEffect(() => {
      if (token) {
        dispatch(getOne(token));
      }
    }, [dispatch]);
    useEffect(() => {
        function handleUpdatePayment() {
            let btnPayment = document.getElementById('setting-payment_top_btn');
            let boxPayment = document.getElementById('setting-payment_box');
            let lopphuPayment = document.getElementById('setting-payment_lopphu')
            btnPayment.onclick = () => {
                boxPayment.style.display = 'block';
                lopphuPayment.style.display = 'block'
            }
            lopphuPayment.onclick = () => {
                boxPayment.style.display = 'none'
                lopphuPayment.style.display = 'none'

            }
        }
        handleUpdatePayment();
    }, []);
    return (
        <div className="setting-payment">
            
            <div className="setting-payment_lopphu" id='setting-payment_lopphu'></div>
            <div className="setting-payment_box" id="setting-payment_box"></div>
            <div className="setting-payment_cointainer">
                <div className="setting-payment_top">
                    <div className="setting-payment_top_title">Tài Khoản Ngân Hàng Của Tôi</div>
                    <div className="setting-payment_top_btn " id="setting-payment_top_btn">
                        <i class="fa-solid fa-plus left"></i>Thêm Tài Khoản Ngân Hàng
                    </div>
                </div>
                <div className="setting-payment_alert">Bạn chưa có tài khoản ngân hàng :{'((('}</div>
            </div>
            <Setting token={token} userData={userData} isLoggedIn={isLoggedIn}/>
        </div>
    );
}

export default Settingpayment;
