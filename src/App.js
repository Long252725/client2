import React from "react";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import { useSelector } from "react-redux";
// IMPORT COMPONENT

import { Login, Home, LoginSucess } from "./containers/Public";
import Singup from "./Slide/Sing up";

import Buy from "./Slide/Buy/buy";
import Profile from "./Slide/Profile/profile";
import Details from "./Slide/Details/details";
import Intro from "./Slide/Introduce/introduce";
import Setting from "./Slide/setting/setting";
import Settingprofile from "./Slide/setting-profile/setting-profile";
import Settingpayment from "./Slide/setting-payment/setting-payment";
import SettingAddress from "./Slide/setting-address/setting-address";
import Bill from "./Slide/Bill/bill";
import "./Component/component.css";
import Header from "./containers/Public/Header";
import Test from "./containers/Public/test";

const App = () => {
  const token = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user.userData);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home token={token} userData={userData} isLoggedIn={isLoggedIn} />
          }
        ></Route>

        <Route path={path.LOGIN} element={<Login />} />
        <Route path="/test" element={<Test token={token} userData={userData} isLoggedIn={isLoggedIn} />} />
        <Route path={path.LOGIN_SUCCESS__USERID} element={<LoginSucess />} />
        <Route path="/singup" element={<Singup token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/bill" element={<Bill token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/chitiet" element={<Details token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/gioithieu" element={<Intro token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/setting" element={<Setting token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/setting-profile" element={<Settingprofile token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/setting-payment" element={<Settingpayment token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/setting-address" element={<SettingAddress token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
        <Route
          path="/profile"
          element={<Profile token={token} userData={userData} isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/donhang" element={<Buy token={token} userData={userData} isLoggedIn={isLoggedIn}/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
