import './buy.css';
import Header from '../../containers/Public/Header';
function Buy() {
    return (
        <div className="Buy">
            <Header />
            <div className="buy_cointainer">
                <div className=" buy_cointainer_box ">
                    <div className="buy_cointainer_box_type">
                        <div className="buy_cointainer_box--title">
                            <i class="fa-solid fa-square-check left"></i>Đã mua
                        </div>
                        <div className="buy_cointainer_box--title">
                            <i class="fa-brands fa-product-hunt left"></i>Chờ xác nhận
                        </div>
                        <div className="buy_cointainer_box--title">
                            <i class="fa-brands fa-product-hunt left"></i>Đang giao hàng
                        </div>
                        <div className="buy_cointainer_box--title">
                            <i class="fa-brands fa-product-hunt left"></i>Đã hủy
                        </div>{' '}
                    </div>
                    <div className="buy_cointainer_box_sp">
                        <div className="buy_cointainer_box_sp_taskbar">
                            <div className="buy_cointainer_box_sp_taskbar--name">Tên sản phẩm</div>
                            <div className="buy_cointainer_box_sp_taskbar--price">Giá tiền</div>
                            <div className="buy_cointainer_box_sp_taskbar--time">Thời gian</div>
                            <div className="buy_cointainer_box_sp_taskbar--state">Trạng thái</div>
                            <div className="buy_cointainer_box_sp_taskbar--details">Chi tiết</div>
                        </div>
                        <div className="buy_cointainer_box_sp_select">
                            <div className="buy_cointainer_box_sp_select--box">Lap top gaming LENOVO</div>
                            <div className="buy_cointainer_box_sp_select--price">100.000.000đ</div>
                            <div className="buy_cointainer_box_sp_select--time">5/11/2023</div>
                            <div className="buy_cointainer_box_sp_select--state">
                                <div className="state-green">Đã hoàn thành</div>
                            </div>
                            <div className="buy_cointainer_box_sp_select--details">
                                <div className="state-red">Hủy</div>
                            </div>
                        </div>
                        <div className="buy_cointainer_box_sp_select">
                            <div className="buy_cointainer_box_sp_select--box">Lap top gaming LENOVO</div>
                            <div className="buy_cointainer_box_sp_select--price">100.000.000đ</div>
                            <div className="buy_cointainer_box_sp_select--time">5/11/2023</div>
                            <div className="buy_cointainer_box_sp_select--state">
                                <div className="state-green">Đã hoàn thành</div>
                            </div>
                            <div className="buy_cointainer_box_sp_select--details">
                                <div className="state-red">Hủy</div>
                            </div>
                        </div>
                        <div className="buy_cointainer_box_sp_select">
                            <div className="buy_cointainer_box_sp_select--box">Lap top gaming LENOVO</div>
                            <div className="buy_cointainer_box_sp_select--price">100.000.000đ</div>
                            <div className="buy_cointainer_box_sp_select--time">5/11/2023</div>
                            <div className="buy_cointainer_box_sp_select--state">
                                <div className="state-green">Đã hoàn thành</div>
                            </div>
                            <div className="buy_cointainer_box_sp_select--details">
                                <div className="state-red">Hủy</div>
                            </div>
                        </div>
                        <div className="buy_cointainer_box_sp_select">
                            <div className="buy_cointainer_box_sp_select--box">Lap top gaming LENOVO</div>
                            <div className="buy_cointainer_box_sp_select--price">100.000.000đ</div>
                            <div className="buy_cointainer_box_sp_select--time">5/11/2023</div>
                            <div className="buy_cointainer_box_sp_select--state">
                                <div className="state-green">Đã hoàn thành</div>
                            </div>
                            <div className="buy_cointainer_box_sp_select--details">
                                <div className="state-red">Hủy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buy;
