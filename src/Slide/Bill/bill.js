import Bottom from '../../Bottom/bottom';
import Header from '../../containers/Public/Header';

import './bill.css';
function Bill() {
    return (
        <div className="bill">
            <Header />
            <div className="bill_cointainer_all">
                <div className="bill_cointainer">
                    <div className="bill_cointainer_box bill_cointainer_box_address ">
                        <div className="bill_cointainer_box_address_title">
                            <i class="fa-solid fa-location-dot left"></i>Địa Chỉ Nhận Hàng
                        </div>
                        <div className="bill_cointainer_box_address_name">Nguyên Thành Long (0858997109)</div>
                        <div className="bill_cointainer_box_address_sdt"></div>
                        <div className="bill_cointainer_box_address_addr">
                            Nhà Văn Hóa, Xóm 11 Xuân Trung Nghi Đức, Xóm 11, Xã Nghi Đức, Thành Phố Vinh, Nghệ An
                        </div>
                    </div>
                    <div className="bill_cointainer_box bill_cointainer_box_sp">
                        <div className="bill_cointainer_box_sp_top">
                            <div className="bill_cointainer_box_sp_title">Sản phẩm</div>
                            <div className="bill_cointainer_box_sp_price_title">Đơn giá</div>
                            <div className="bill_cointainer_box_sp_sl_title">Số lượng</div>
                            <div className="bill_cointainer_box_sp_finish_title">Thành tiền</div>
                        </div>
                        <div className="bill_cointainer_box_sp_shopbox">
                            <div className="bill_cointainer_box_sp_shopbox_name">
                                <i class="fa-solid fa-shop left-5"></i>Shop Zata
                            </div>
                            <div className="bill_cointainer_box_sp_shopbox_chat">
                                <i class="fa-regular fa-message left-5"></i>Chat ngay
                            </div>
                        </div>
                        <div className="bill_cointainer_box_sp_productbox">
                            <div className="bill_cointainer_box_sp_productbox_pic"></div>
                            <div className="bill_cointainer_box_sp_productbox_name">
                                Máy Xay Thịt Osaka Nhật Bản, Máy Xay Sinh Tố Cắm Điện Máy Xay Thịt Osaka Nhật Bản, Máy
                                Xay Sinh Tố Cắm Điện
                            </div>
                            <div className="bill_cointainer_box_sp_productbox_price">14.999đ</div>
                            <div className="bill_cointainer_box_sp_productbox_sl">1</div>
                            <div className="bill_cointainer_box_sp_productbox_finish">14.999đ</div>
                        </div>
                        <div className="bill_cointainer_box_sp_send">
                            <div className="bill_cointainer_box_sp_send_note">
                                <div className="bill_cointainer_box_sp_send_note_title">Lời nhắn:</div>
                                <input
                                    className="bill_cointainer_box_sp_send_note_input"
                                    placeholder="Lưu ý cho người bán..."
                                ></input>
                            </div>
                            <div className="bill_cointainer_box_sp_send_vanchuyen">
                                <div className="bill_cointainer_box_sp_send_vanchuyen_title">Đơn vị vận chuyển:</div>
                                <div className="bill_cointainer_box_sp_send_vanchuyen_nd">Nhanh</div>
                                <div className="bill_cointainer_box_sp_send_vanchuyen_time">
                                    Nhận hàng vào 14 Th12 - 16 Th12 ₫
                                </div>
                                <div className="bill_cointainer_box_sp_send_vanchuyen_price">₫37.700</div>
                                <div className="bill_cointainer_box_sp_send_vanchuyen_change">Thay đổi</div>
                            </div>
                        </div>
                        <div className="bill_cointainer_box_sp_total">
                            Tổng số tiền (1 sản phẩm):
                            <div className="bill_cointainer_box_sp_total_price right">₫52.699</div>
                        </div>
                    </div>
                    <div className="bill_cointainer_box bill_cointainer_box_voucher"></div>
                    <div className="bill_cointainer_box bill_cointainer_box_payment">
                        <div className=" bill_cointainer_box_payment_top">
                            <div className="bill_cointainer_box_payment_top_title">Phương thức thanh toán</div>
                            <div className="bill_cointainer_box_payment_top_box">
                                <div className="bill_cointainer_box_payment_top_box_select active">Ví Otin</div>
                                <div className="bill_cointainer_box_payment_top_box_select">Crypto USDT</div>
                            </div>
                        </div>
                        <div className="bill_cointainer_box_payment_total">
                            <div className="bill_cointainer_box_payment_total_select">
                                Tổng tiền hàng{' '}
                                <div className="bill_cointainer_box_payment_total_price--nd">14.999đ</div>
                            </div>
                            <div className="bill_cointainer_box_payment_total_select">
                                Phí vận chuyển <div className="bill_cointainer_box_payment_total_fee--nd">14.999đ</div>
                            </div>
                            <div className="bill_cointainer_box_payment_total_select">
                                Tổng thanh toán:{' '}
                                <div className="bill_cointainer_box_payment_total_pay--nd">14.999đ</div>
                            </div>
                        </div>
                        <div className="bill_cointainer_box_payment_dathang">
                            <div className="bill_cointainer_box_payment_dathang--note">
                                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Otin
                            </div>
                            <button className='bill_cointainer_box_payment_dathang--btn'>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </div>
    );
}

export default Bill;
