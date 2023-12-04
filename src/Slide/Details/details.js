import { useDispatch } from "react-redux";
import { getOne } from "../../store/actions";
import { useEffect } from 'react';
import Bottom from '../../Bottom/bottom';
import Header from '../../containers/Public/Header';
import './details.css';
function Details({token, userData, isLoggedIn}) {
    const dispatch = useDispatch();
    useEffect(() => {
      if (token) {
        dispatch(getOne(token));
      }
    }, [dispatch]);
    useEffect(()=> {
        let btnTrade = document.getElementById('chitiet_cointainer_box_details--btnOffer')
        let tradeBox = document.getElementById('trade')
        let lopPhuTrade = document.getElementById('lopphu_trade')
        let sumbitBtn = document.getElementById('trade_btn') 
        let tradeSuccess = document.getElementById('trade_successfull')
        btnTrade.onclick = ()=> {
            tradeBox.style.display = 'block'
            lopPhuTrade.style.display = "block"

        }
        lopPhuTrade.onclick = ()=> {
            tradeBox.style.display = 'none'
            lopPhuTrade.style.display = "none"
            tradeSuccess.style.display = "none"

        }
        sumbitBtn.onclick = ()=> {
            tradeBox.style.display = "none"
            tradeSuccess.style.display = "block"
        }
    }, [])
    return (
        <div className="chitiet">
            <Header token={token} userData={userData}  isLoggedIn={isLoggedIn} />
            <div className='lopphu_trade' id='lopphu_trade'></div>
            <div className="trade_successfull" id="trade_successfull">Yêu cầu của bạn đã được gửi đi <i class="fa-solid fa-face-smile-wink left"></i></div>
            <div className='trade' id='trade'>
               <div className="trade_cointainer" id="trade_cointainer">
                    <div className='trade_title'>Trao đổi đồ O-Trade</div>
                    <div className='trade_box'>
                    <div className='trade_box_title'>Túi đồ của bạn<p>(Chọn một món đồ mà bạn muốn trao đổi)</p></div>
                    <div className='trade_box_cointainer'>
                        <div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div><div className='trade_box_select'>
                        <i class="fa-regular fa-circle-check icon-tick"></i>
                        </div>
                        
                    </div>
                    </div>
                    <div className="trade_time">Thời hạn đề xuất trao đổi: <input type="number" placeholder="24"></input>Giờ</div>
                    <button className='trade_btn' id="trade_btn">Submit</button>
               </div>
               
            </div>
            {console.log(userData)}
            <div className="chitiet_cointainer">
                <div className="chitiet_cointainer_box">
                    <div className="chitiet_cointainer_box_anh">
                        <div className="chitiet_cointainer_box_anh_main"></div>
                        <div className="chitiet_cointainer_box_anh_second">
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx114ygze55')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx11ey2gd58')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx10kza7ua6')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx10103jh29')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx114ygze55')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx114ygze55')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx114ygze55')",
                                }}
                            ></div>
                            <div
                                className="chitiet_cointainer_box_anh_second--select"
                                style={{
                                    backgroundImage:
                                        "url('https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lnpdx114ygze55')",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="chitiet_cointainer_box_details">
                        <div className="chitiet_cointainer_box_details--name">
                            Chuột Game Có Dây Logitech G102 Lightsync - Tùy Chỉnh RGB, 6 Nút Lập Trình, Nhẹ, Siêu Bền,
                            Siêu xịn - PAOLU
                        </div>
                        <div className="chitiet_cointainer_box_details--price">100.000đ</div>
                        <div className="chitiet_cointainer_box_details--state">
                            Trạng thái: <div className="chitiet_sate">Đủ hàng</div>
                        </div>
                        <div className="chitiet_cointainer_box_details--address">
                            Địa chỉ người gửi: <div className="details--address">TP.Vinh, Nghệ An</div>
                        </div>
                        <div className="chitiet_cointainer_box_details--type">
                            Thể loại: <div className="details--type">Đồ Công Nghệ</div>
                        </div>
                        <div className="chitiet_cointainer_box_details--protect">
                            Bảo hành: <div className="details--protect">Không bảo hành</div>
                        </div>
                        <div className="chitiet_cointainer_box_details--details">Mô tả:</div>
                        <div className="details--details">
                            Tại nhà mình hông có điều kiện, mà bữa đi coi đá bóng với bác tớ thì may mắn được Q.Hải cho
                            và kí quả bóng mà mình thì lại không thần tượng Q.Hải lắm nên mình muốn có đồ nghề để sau
                            này làm game thủ Mình có video quay lại nhé:3 Tại nhà mình hông có điều kiện, mà bữa đi coi
                            đá bóng với bác tớ thì may mắn được Q.Hải cho và kí quả bóng mà mình thì lại không thần
                            tượng Q.Hải lắm nên mình muốn có đồ nghề để sau này làm game thủ Mình có video quay lại
                            nhé:3 Tại nhà mình hông có điều kiện, mà bữa đi coi đá bóng với bác tớ thì may mắn được
                            Q.Hải cho và kí quả bóng mà mình thì lại không thần tượng Q.Hải lắm nên mình muốn có đồ nghề
                            để sau này làm game thủ Mình có video quay lại nhé:3
                        </div>
                        <a href='/bill'>
                            <div className="chitiet_cointainer_box_details--btnBuy details--btn">
                                <i class="fa-solid fa-cart-shopping left"></i>Mua ngay
                            </div>
                        </a>
                        <div className="chitiet_cointainer_box_details--btnOffer details--btn" id='chitiet_cointainer_box_details--btnOffer'>
                            <i class="fa-solid fa-retweet left"></i>Trao đổi miễn phí
                        </div>
                    </div>
                </div>
                <div className="chitiet_shopuser">
                    <div className="chitiet_shopuser_box">
                        <div className="chitiet_shopuser_box_pic"></div>
                        <a href="/profile">
                            <div className="chitiet_shopuser_box_name">
                                Nguyễn Thành Long{' '}
                                <i
                                    className="fa-solid fa-circle-check right"
                                    style={{ color: '#4884ea', fontSize: '15px' }}
                                ></i>
                            </div>
                        </a>{' '}
                        <a href="/profile">
                            {' '}
                            <div className="chitiet_shopuser_box_view">
                                <i class="fa-solid fa-shop left"></i>Xem Shop
                            </div>
                        </a>
                        <div className="chitiet_shopuser_box_chat">
                            <i className="fa-solid fa-headset left"></i>Chat
                        </div>
                    </div>
                </div>
                <div className="chitiet_comments">
                    <div className='chitiet_comments_title'>Comments</div>
                    <div className='chitiet_comments_comments'>
                        <div className='chitiet_comments_comments_select'></div>
                        <div className='chitiet_comments_comments_select'></div>
                        <div className='chitiet_comments_comments_select'></div>
                        <div className='chitiet_comments_comments_select'></div>
                        <div className='chitiet_comments_comments_select'></div>
                    </div>
                </div>
            </div>
            
            <Bottom />
            
        </div>
    );
}

export default Details;
