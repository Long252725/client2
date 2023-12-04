import "./profile.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOne } from "../../store/actions";
import Header from "../../containers/Public/Header";
import Bottom from "../../Bottom/bottom";

const Profile = ({ token, userData, isLoggedIn }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getOne(token));
    }
  }, [dispatch]);
  useEffect(() => {
    function handleFixed() {
      window.onscroll = function () {
        let maxHeight = document.getElementById(
          "profile_cointainer_box"
        ).clientHeight;
        var userBox = document.getElementById("profile_cointainer_box_user");
        console.log(window.scrollY);
        if (window.scrollY > 148) {
          console.log(maxHeight);
          userBox.style.position = "fixed";
          userBox.style.top = "30px";

          if (window.scrollY > maxHeight - 390) {
            userBox.style.position = "absolute";
            userBox.style.top = "";
            userBox.style.bottom = "10px";
          } else {
            userBox.style.position = "fixed";
            userBox.style.top = "30px";
            userBox.style.bottom = "";
          }
        } else {
          userBox.style.position = "absolute";
          userBox.style.top = "";
        }
      };
    }
    handleFixed();
  }, []);

  return (
    <div className="profile">
      {console.log(isLoggedIn, userData)}
      <Header token={token} userData={userData} isLoggedIn={isLoggedIn} />
      <div className="profile_cointainer">
        <div className="profile_cointainer_box" id="profile_cointainer_box">
          <div
            className="profile_cointainer_box_user"
            id="profile_cointainer_box_user"
          >
            {isLoggedIn ? (
              <div>
                <div className="profile_cointainer_box_user--name">
                  {userData?.name}
                </div>
                <div
                  className="profile_cointainer_box_user--pic"
                  style={{ backgroundImage: `url('${userData?.avatarUrl}')` }}
                ></div>
                <div className="profile_cointainer_box_user--username">
                  @long252725
                  <i
                    class="fa-solid fa-circle-check right"
                    style={{ color: "#4884ea" }}
                  ></i>
                </div>

                <div className="profile_cointainer_box_user--star">
                  Star: 100k
                </div>
                <div className="profile_cointainer_box_user--chat">
                  <i class="fa-solid fa-comment-dots left"></i>Chat
                </div>
                <div className="profile_cointainer_box_user--diachi">
                  <i class="fa-solid fa-location-dot left"></i>Tp.Vinh
                </div>
                <div className="profile_cointainer_box_user--state">
                  <i class="fa-solid fa-heart left"></i>Trạng thái: Độc thân
                </div>
                <div className="profile_cointainer_box_user--details">
                  Người sáng lập, CEO và kỹ sư trưởng/nhà thiết kế của SpaceX,
                  CEO và kiến trúc sư sản phẩm của Tesla, Inc, người sáng lập
                  The Boring Company, đồng sáng lập của Neuralink; đồng sáng lập
                  và đồng chủ tịch ban đầu của OpenAI. Long là người giàu nhất
                  thế giới vào thời điểm hiện tại, khi tài sản ròng của ông vượt
                  mốc 273 tỷ đô la vào tháng 4 năm 2022.
                </div>
              </div>
            ) : (
              <div>
                <div className="profile_cointainer_box_user--name"></div>
                <div className="profile_cointainer_box_user--pic"></div>
                <div className="profile_cointainer_box_user--username">
                  @long252725
                  <i
                    class="fa-solid fa-circle-check right"
                    style={{ color: "#4884ea" }}
                  ></i>
                </div>

                <div className="profile_cointainer_box_user--star">
                  Star: 100k
                </div>
                <div className="profile_cointainer_box_user--chat">
                  <i class="fa-solid fa-comment-dots left"></i>Chat
                </div>
                <div className="profile_cointainer_box_user--diachi">
                  <i class="fa-solid fa-location-dot left"></i>Tp.Vinh
                </div>
                <div className="profile_cointainer_box_user--state">
                  <i class="fa-solid fa-heart left"></i>Trạng thái: Độc thân
                </div>
                <div className="profile_cointainer_box_user--details">
                  Người sáng lập, CEO và kỹ sư trưởng/nhà thiết kế của SpaceX,
                  CEO và kiến trúc sư sản phẩm của Tesla, Inc, người sáng lập
                  The Boring Company, đồng sáng lập của Neuralink; đồng sáng lập
                  và đồng chủ tịch ban đầu của OpenAI. Long là người giàu nhất
                  thế giới vào thời điểm hiện tại, khi tài sản ròng của ông vượt
                  mốc 273 tỷ đô la vào tháng 4 năm 2022.
                </div>
              </div>
            )}
          </div>

          <div
            className="profile_cointainer_box_posts"
            id="profile_cointainer_box_posts"
          >
            <div className="profile_cointainer_box_posts_select">
              <a href="/">
                <div className="profile_cointainer_box_posts_select--name">
                  Đôi giày MLB Chunky Bigbal Boston Chính Hãng{" "}
                </div>
                <div
                  className="profile_cointainer_box_posts_select--pic"
                  style={{
                    backgroundImage:
                      "url('https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyzss7e1cylfd')",
                  }}
                ></div>
                <div className="profile_cointainer_box_posts_select--price">
                  Giá:{" "}
                  <div className="profile_cointainer_box_posts_select--price--price">
                    350.000đ
                  </div>
                </div>
                <div className="profile_cointainer_box_posts_select--boxdetails">
                  <div className="profile_cointainer_box_posts_select--detailstitle">
                    Chi tiết sản phẩm:{" "}
                  </div>
                  <div className="profile_cointainer_box_posts_select--detailscontent">
                    Mua được 1 tuần nhưng chưa unbox.
                  </div>
                </div>
              </a>
              <div className="product_box_tt profile-only">
                <div
                  className="product_box_tt_select product_like"
                  id="product_like"
                >
                  <i className="fa-regular fa-thumbs-up left"></i>Like
                </div>
                <div
                  className="product_box_tt_select product_comment"
                  id="product_comment"
                >
                  <i className="fa-regular fa-comments left "></i>Comment
                </div>
                <div
                  className="product_box_tt_select product_share"
                  id="product_share"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket left"></i>
                  Share
                </div>
              </div>
            </div>
            <div className="profile_cointainer_box_posts_select">
              <a href="/">
                <div className="profile_cointainer_box_posts_select--name">
                  Đôi giày MLB Chunky Bigbal Boston Chính Hãng{" "}
                </div>
                <div
                  className="profile_cointainer_box_posts_select--pic"
                  style={{
                    backgroundImage:
                      "url('https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyzss7e1cylfd')",
                  }}
                ></div>
                <div className="profile_cointainer_box_posts_select--price">
                  Giá:{" "}
                  <div className="profile_cointainer_box_posts_select--price--price">
                    350.000đ
                  </div>
                </div>
                <div className="profile_cointainer_box_posts_select--boxdetails">
                  <div className="profile_cointainer_box_posts_select--detailstitle">
                    Chi tiết sản phẩm:{" "}
                  </div>
                  <div className="profile_cointainer_box_posts_select--detailscontent">
                    Mua được 1 tuần nhưng chưa unbox.
                  </div>
                </div>
              </a>
              <div className="product_box_tt profile-only">
                <div
                  className="product_box_tt_select product_like"
                  id="product_like"
                >
                  <i className="fa-regular fa-thumbs-up left"></i>Like
                </div>
                <div
                  className="product_box_tt_select product_comment"
                  id="product_comment"
                >
                  <i className="fa-regular fa-comments left "></i>Comment
                </div>
                <div
                  className="product_box_tt_select product_share"
                  id="product_share"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket left"></i>
                  Share
                </div>
              </div>
            </div>
            <div className="profile_cointainer_box_posts_select">
              <a href="/">
                <div className="profile_cointainer_box_posts_select--name">
                  Đôi giày MLB Chunky Bigbal Boston Chính Hãng{" "}
                </div>
                <div
                  className="profile_cointainer_box_posts_select--pic"
                  style={{
                    backgroundImage:
                      "url('https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkyzss7e1cylfd')",
                  }}
                ></div>
                <div className="profile_cointainer_box_posts_select--price">
                  Giá:{" "}
                  <div className="profile_cointainer_box_posts_select--price--price">
                    350.000đ
                  </div>
                </div>
                <div className="profile_cointainer_box_posts_select--boxdetails">
                  <div className="profile_cointainer_box_posts_select--detailstitle">
                    Chi tiết sản phẩm:{" "}
                  </div>
                  <div className="profile_cointainer_box_posts_select--detailscontent">
                    Mua được 1 tuần nhưng chưa unbox.
                  </div>
                </div>
              </a>
              <div className="product_box_tt profile-only">
                <div
                  className="product_box_tt_select product_like"
                  id="product_like"
                >
                  <i className="fa-regular fa-thumbs-up left"></i>Like
                </div>
                <div
                  className="product_box_tt_select product_comment"
                  id="product_comment"
                >
                  <i className="fa-regular fa-comments left "></i>Comment
                </div>
                <div
                  className="product_box_tt_select product_share"
                  id="product_share"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket left"></i>
                  Share
                </div>
              </div>
            </div>
            <div className="profile_cointainer_box_posts_select">
              <a href="/">
                <div className="profile_cointainer_box_posts_select--name">
                  Laptop Gamming Lenovo Legion 5 Pro{" "}
                </div>
                <div
                  className="profile_cointainer_box_posts_select--pic"
                  style={{
                    backgroundImage:
                      "url('https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm24eivhm8kf58')",
                  }}
                ></div>
                <div className="profile_cointainer_box_posts_select--price">
                  Giá:{" "}
                  <div className="profile_cointainer_box_posts_select--price--price">
                    9.000.000đ
                  </div>
                </div>
                <div className="profile_cointainer_box_posts_select--boxdetails">
                  <div className="profile_cointainer_box_posts_select--detailstitle">
                    Chi tiết sản phẩm:{" "}
                  </div>
                  <div className="profile_cointainer_box_posts_select--detailscontent">
                    Máy chính chủ dùng cẩn thận nên còn như mới
                  </div>
                </div>
              </a>
              <div className="product_box_tt profile-only">
                <div
                  className="product_box_tt_select product_like"
                  id="product_like"
                >
                  <i className="fa-regular fa-thumbs-up left"></i>Like
                </div>
                <div
                  className="product_box_tt_select product_comment"
                  id="product_comment"
                >
                  <i className="fa-regular fa-comments left "></i>Comment
                </div>
                <div
                  className="product_box_tt_select product_share"
                  id="product_share"
                >
                  <i className="fa-solid fa-arrow-up-from-bracket left"></i>
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Profile;
