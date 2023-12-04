import './body.css';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import './../Component/component.css'

function Body({ token, userData, isLoggedIn }) {
    
    const [posts, setposts] = useState([]);
    const [comments, setComments] = useState([]);
    let startListObj = useRef([]);
    let listComments = useRef([]);
    useEffect(() => {
        function handleComment() {
            let inputComment = document.getElementById('boxcomment_taskbar_input--input');
            let btnSend = document.getElementById('iconSend');
            btnSend.onclick = () => {
                let formComments = {
                    
                    nd: inputComment.value,
                };
                console.log(formComments);
                sendComment(formComments);
            };
        }
        handleComment();
        function sendComment(data) {
            let content = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            };
            fetch('https://api2-otinstore.onrender.com/comments', content)
                .then((res) => res.json())
                .then((comment) => {
                    setComments(comment);
                    
                    listComments.current.push(comment);
                })
                .catch((loi) => {
                    console.log(loi);
                });
        }
    }, [comments]);
    useEffect(() => {
        

        function handleNextSp() {
            let btnNextSp = document.getElementById('next-sp');
            btnNextSp.onclick = () => {
                let cointainerHeight = document.getElementById('cointainer');
                cointainerHeight.style.maxHeight = `${cointainerHeight.clientHeight * 4}px `;
                console.log(cointainerHeight.clientHeight);
            };
        }
        handleNextSp();
        function handleUpload() {
            let upLoad = document.getElementById('upload');
            let nameInput = document.getElementById('upload_box_select_input--name');
            let picInput = document.getElementById('upload_box_select_input--pic');
            let priceInput = document.getElementById('upload_box_select_input--price');
            let detailsInput = document.getElementById('upload_box_select_input--details');
            let btnDang = document.getElementById('btn_upload');
            let boxDone = document.getElementById('upload_box_done');
            let boxInput = document.getElementById('upload_box_cointainer');
            let upLoadBox = document.getElementById('upload_box');
            let lopPhuBody = document.getElementById('lopphu_body');
            let header = document.getElementById('header');
            upLoad.onclick = () => {
                lopPhuBody.style.display = 'block';
                upLoadBox.style.display = 'block';
                boxInput.style.display = 'block';
                boxDone.style.display = 'none';
                header.style.zIndex = '9';
            };
            btnDang.onclick = () => {
                boxInput.style.display = 'none';
                boxDone.style.display = 'block';
                console.log(nameInput.value, picInput.value, priceInput.value, detailsInput.value);
            };
            lopPhuBody.onclick = () => {
                header.style.zIndex = '16';
                lopPhuBody.style.display = 'none';
                upLoadBox.style.display = 'none';
            };
        }
        handleUpload();
    }, []);
    useEffect(() => {
        function handlePost() {
            axios
                .get('https://api2-otinstore.onrender.com/posts')
                .then((posts) => {
                    let postss = posts.data;
                    setposts(postss);
                })
                .catch((rejected) => {
                    console.log(rejected);
                });
        }
        handlePost();
    }, []);
    useEffect(() => {
        function handleWatchlist() {
            let startList = startListObj.current;
            let start = document.querySelectorAll('.product_save');
            for (let i = 0; i < start.length; i++) {
                start[i].addEventListener('click', (e) => {
                    let container = e.target.closest('.product');
                    let children = container.children;
                    let nameStar = children[0].textContent;
                    if (startList.includes(nameStar) === false) {
                        startList.push(nameStar);
                    }
                    var html = ``;
                    startList.map((startName) => {
                        return (html += `<li id="listproduct_like_select">${startName}</li>`);
                    });
                    document.querySelector('.listproduct_like').innerHTML = html;
                });
            }
        }
        handleWatchlist();
        function deleteComment() {
            console.log(document.querySelectorAll('.delete_comment'))
        }
        
        function handleComment() {
            let btnComments = document.querySelectorAll('#product_comment');
            let boxcomment = document.getElementById('boxcomment');
            let lopPhuBodyy = document.getElementById('lopphu_body2');
            let header = document.getElementById('header');

            for (let i = 0; i < btnComments.length; i++) {
                btnComments[i].onclick = () => {
                    boxcomment.style.display = 'block';
                    lopPhuBodyy.style.display = 'block';
                    header.style.zIndex = '9';
                    function getComment() {
                        fetch('https://api2-otinstore.onrender.com/comments')
                            .then((res) => res.json())
                            .then((comments) => {
                                console.log(comments);
                                let html = ``;
                                comments.map((comment, index) => {
                                    return (html += `<div key="${index}" class="boxcomment_comments_select">
                                <div class="boxcomment_comments_select--pic"></div>
                                <div class="boxcomment_comments_select--box">
                                    <div class="boxcomment_comments_select--name">
                                        Nguyễn Thành Long
                                        <i class="fa-solid fa-circle-check right " style="color: #4884ea;"></i>
                                    </div>

                                    <div class="boxcomment_comments_select--nd">${comment.nd}</div>
                                    </div>
                                    <button class="delete_comment" id="delete_comment">Delete</button>
                            </div>`);
                                });
                                document.getElementById('boxcomment_comments').innerHTML = html;
                            });
                            
                        }
                    getComment();
                    deleteComment()
                };
            }
            lopPhuBodyy.onclick = () => {
                header.style.zIndex = '16';
                lopPhuBodyy.style.display = 'none';
                boxcomment.style.display = 'none';
            };
        }
        handleComment();
        function handleStick() {
            window.onscroll = function () {
                let cointainer = document.getElementById('cointainer');
                var taskbar = document.getElementById('taskbar_body');
                var startBox = document.getElementById('listproduct');

                if (window.scrollY > 150) {
                    taskbar.style.position = 'fixed';
                    taskbar.style.top = '0';
                    startBox.style.position = 'fixed';
                    startBox.style.top = '0';

                    if (window.scrollY > cointainer.clientHeight - 490) {
                        taskbar.style.position = 'absolute';
                        taskbar.style.top = `${cointainer.clientHeight - 640}px`;

                        
                        startBox.style.position = 'absolute';
                        startBox.style.top = `${cointainer.clientHeight - 640}px`;
                        startBox.style.right = '';
                    } else {
                        taskbar.style.position = 'fixed';
                        // taskbar.style.top = '0';
                        startBox.style.position = 'fixed';
                        startBox.style.top = '0';
                        startBox.style.right = '140px';
                    }
                } else {
                    taskbar.style.position = 'absolute';
                    taskbar.style.top = '0';
                    startBox.style.position = 'absolute';
                    startBox.style.top = '0';

                    startBox.style.right = '';
                }
            };
        }
        handleStick();
    }, [posts]);
    return (
        <div id="body">
            <div className="cointainer" id="cointainer">
                <div className="taskbar_body" id="taskbar_body">
                    <div className="box_search">
                        <div className="box_search_title">Xem thêm </div>
                        <input className="box_search_input" placeholder="Máy tính casio 580 cũ"></input>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="box_search_icon" />
                    </div>
                    <div className="boloc">
                        <div className="boloc_title font_big">Bộ lọc tìm kiếm</div>
                        <div className="bocloc_adress">
                            <div className="bocloc_adress--title font_normal ">Nơi bán</div>
                            <ul className="list">
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                
                            </ul>
                        </div>
                        <div className="bocloc_type">
                            <div className="bocloc_type--title font_normal ">Doanh mục</div>
                            <ul className="list">
                            <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                                <li className="selecter"><i class="fa-solid fa-circle left" style={{fontSize: `${6}px`}}></i>Nghệ An</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="listproduct" id="listproduct">
                    <div className="listproduct_title">Yêu thích</div>
                    <div className="listproduct_like"></div>
                </div>
                <button className="next-sp font_normal" id="next-sp">
                    Tiếp
                </button>
                <div className="box_product" id="box_product">
                    {posts.map((post, index) => {
                        return (
                            <div className="product" id="product" key={index}>
                                <a href="/chitiet">
                                    <div className="product_name" id="product_name">
                                        {post.name}
                                    </div>
                                </a>
                                <FontAwesomeIcon icon={faBookmark} className="product_save" />
                                <a href="/profile">
                                    <div
                                        className="product_pic"
                                        id="product_pic"
                                        style={{
                                            backgroundImage: `url('${post.image}')`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </a>
                                <div className="price" id="price">
                                    Giá niêm yết:{' '}
                                    <div className="price_price" id="price_price">
                                        {' '}
                                        {post.price}
                                    </div>
                                </div>
                                <a href='bill'>
                                    <button className=" btn_buy" id="btn_buy">
                                        {' '}
                                        Mua ngay
                                    </button>
                                </a>
                                <a href='./chitiet'>
                                    <button className=" btn_trade" id="btn_trade">
                                        {' '}
                                        Chi tiết sản phẩm
                                    </button>
                                </a>
                                <div className="content" id="content">
                                    Chi tiết sản phẩm
                                </div>
                                <div className="noidungchitiet" id="noidungchitiet">
                                    {post.details}
                                </div>
                                <div className="product_box_tt">
                                    <div className="product_box_tt_select product_like" id="product_like">
                                        <i className="fa-regular fa-thumbs-up left"></i>Like
                                    </div>
                                    <div className="product_box_tt_select product_comment" id="product_comment">
                                        <i className="fa-regular fa-comments left "></i>Comment
                                    </div>
                                    <div className="product_box_tt_select product_share" id="product_share">
                                        <i className="fa-solid fa-arrow-up-from-bracket left"></i>Share
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="more">
                <div className="more_title">Otin Store - Không lo đồ cũ</div>
                <div className="more_video">
                    <ReactPlayer
                        url="https://assets-global.website-files.com/63ba8e823d3d7a927e5c2971/63baa96818d4e0e50d349d2b_shiny-bull-in-costume-made-of-mirrors-dancing-robo-2021-08-30-14-52-45-utc%20(1)-transcode.mp4"
                        width="1100px"
                        height="620px"
                        position="absolute"
                        controls={false}
                        loop
                        playing={true}
                        muted
                    />
                </div>
            </div>
            <div className="lopphu_body" id="lopphu_body"></div>
            <div className="lopphu_body2" id="lopphu_body2"></div>
            <div className="upload" id="upload">
                Đăng bài
            </div>
            <div className="upload_box" id="upload_box">
                <div className="upload_box_title">Đăng tải sản phẩm</div>
                <div id="upload_box_cointainer">
                    <div className="upload_box_cointainer">
                        <div className="upload_box_select upload_box_name left">
                            Tên mặt hàng
                            <input
                                type="text"
                                className="upload_box_select_input"
                                id="upload_box_select_input--name"
                                placeholder="Máy tính CASIO 580 VNPlus"
                            ></input>
                        </div>
                        <div className="upload_box_select upload_box_pic left">
                            Link ảnh
                            <input
                                className="upload_box_select_input"
                                id="upload_box_select_input--pic"
                                placeholder="VD: https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*"
                            ></input>
                        </div>
                        <div className="upload_box_select upload_box_price left">
                            Giá bán
                            <input
                                type="number"
                                className="upload_box_select_input"
                                id="upload_box_select_input--price"
                                placeholder="100.000k"
                            ></input>
                        </div>
                        <div className="upload_box_select upload_box_details left">
                            Chi tiết
                            <input
                                className="upload_box_select_input upload_box_select_input--details"
                                id="upload_box_select_input--details"
                                maxLength={50}
                                placeholder="Máy dùng được hơn nửa năm, bề ngoài vẫn tốt lắm ạ."
                            ></input>
                        </div>
                    </div>
                </div>
                <div id="upload_box_done">
                    <div className="upload_box_done">
                        <div className="upload_box_done_title">
                            <i className="fa-regular fa-circle-check left"></i>Đăng bài thành công !
                        </div>
                    </div>
                </div>
                <div className="btn_upload btn_upload2" id="btn_upload">
                    Đăng
                </div>
            </div>
            <div className="boxcomment" id="boxcomment">
                <div className="boxcomment_top">
                    <i className="fa-solid fa-comment-dots left"></i>Comments
                </div>
                <div className="boxcomment_comments" id="boxcomment_comments">
                    {listComments.current.map((comment, index) => {
                        return (
                            <div key={index} className="boxcomment_comments_select">
                                <div className="boxcomment_comments_select--pic"></div>
                                <div className="boxcomment_comments_select--box">
                                    <div className="boxcomment_comments_select--name">
                                        Nguyễn Thành Long{' '}
                                        <i className="fa-solid fa-circle-check right " style={{ color: '#4884ea' }}></i>
                                    </div>

                                    <div className="boxcomment_comments_select--nd">{comment.nd}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="boxcomment_taskbar">
                    <div className="boxcomment_taskbar_pic"></div>
                    <div className="boxcomment_taskbar_input">
                        <input className="boxcomment_taskbar_input--input" id="boxcomment_taskbar_input--input"></input>
                        <i className="fa-solid fa-paper-plane iconSend" id="iconSend"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
