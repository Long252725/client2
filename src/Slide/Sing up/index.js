// import { useEffect } from 'react';
// import './style.css';
// function Singup() {
//     // useEffect(() => {
//     //     let check = {
//     //         isAlpha: (c) => {
//     //             let n = c.charCodeAt(0);
//     //             return (n > 47 && n < 58) || (n > 64 && n < 91) || (n > 96 && n < 123);
//     //         },
//     //         isAlphaAndNotNumber: (c) => {
//     //             let n = c.charCodeAt(0);
//     //             return (n > 64 && n < 91) || (n > 96 && n < 123) || c === ' ';
//     //         },
//     //         isNumber: (c) => {
//     //             let n = c.charCodeAt(0);
//     //             return n > 47 && n < 58;
//     //         },
//     //         checkNickName: (nickName) => {
//     //             if (!check.isAlpha(nickName[0])) return false;
//     //             for (let i = 0; i < nickName.length; ++i) {
//     //                 if (!check.isAlpha(nickName[i]) && nickName[i] !== '-' && nickName[i] !== '_') return false;
//     //             }
//     //             return nickName.length > 0;
//     //         },
//     //         checkFullName: (fullName) => {
//     //             for (let i = 0; i < fullName.length; ++i) {
//     //                 if (!check.isAlphaAndNotNumber(fullName[i])) return false;
//     //             }
//     //             return fullName.length > 0;
//     //         },
//     //         checkPhoneNumber: (numberPhone) => {
//     //             for (let i = 0; i < numberPhone.length; ++i) {
//     //                 if (!check.isNumber(numberPhone[i])) return false;
//     //             }
//     //             if (numberPhone[0] === '0') return numberPhone.length === 10;
//     //             else return numberPhone.length === 11;
//     //         },
//     //         checkEmail: (email) => {
//     //             let valid = '@gmail.com';
//     //             if (email.length <= valid.length) return false;
//     //             let i = valid.length - 1,
//     //                 j = email.length - 1;
//     //             while (i >= 0) {
//     //                 if (valid[i] !== email[j]) return false;
//     //                 --i;
//     //                 --j;
//     //             }
//     //             return email.length > 0;
//     //         },
//     //         checkPassWord: (passWord) => {
//     //             return passWord.length >= 6;
//     //         },
//     //     };

//     //     let errNotice = document.getElementById('error');
//     //     let userData = new Object();
//     //     let userNameData = new Set();
//     //     let userEmailData = new Set();
//     //     let userNumberData = new Set();
//     //     document.getElementById('btnAcc--singup').onclick = () => {
            
//     //             console.log(1);
//     //         let fullName = document.getElementById('infoSingup--fullname').value;
//     //         let nickName = document.getElementById('infoSingup--username').value;
//     //         let email = document.getElementById('infoSingup--email').value;
//     //         let passWord = document.getElementById('infoSingup--password').value;
//     //         let phoneNumber = document.getElementById('infoSingup--phonenumber').value;
//     //         let fullNameElement = document.getElementById('infoSingup--fullname');
            
//     //         let nickNameElement = document.getElementById('infoSingup--username');
//     //         let emailElement = document.getElementById('infoSingup--email');
//     //         let passWordElement = document.getElementById('infoSingup--password');
//     //         let phoneNumberElement = document.getElementById('infoSingup--phonenumber');
//     //         if (userNameData.has(nickName)) {
//     //             errNotice.innerHTML = 'Nick Name is exits!';
//     //             nickNameElement.classList.add('warning');

//     //             return;
//     //         } else {
//     //             nickNameElement.classList.remove('warning');
//     //         }
//     //         if (!check.checkNickName(nickName)) {
//     //             nickNameElement.classList.add('warning');

//     //             errNotice.innerHTML = 'Your nick name have some problem!';
//     //             return;
//     //         } else {
//     //             nickNameElement.classList.remove('warning');
//     //         }
//     //         if (!check.checkFullName(fullName)) {
//     //             errNotice.innerHTML = 'Your full name have some problem!';
//     //             fullNameElement.classList.add('warning');

//     //             return;
//     //         } else {
//     //             fullNameElement.classList.remove('warning');
//     //         }
//     //         if (userNumberData.has(phoneNumber)) {
//     //             phoneNumberElement.classList.add('warning');

//     //             errNotice.innerHTML = 'Number is exits!';
//     //             return;
//     //         } else {
//     //             phoneNumberElement.classList.remove('warning');
//     //         }
//     //         if (!check.checkPhoneNumber(phoneNumber)) {
//     //             phoneNumber.classList.add('warning');

//     //             errNotice.innerHTML = 'Your phone number have some problem!';
//     //             return;
//     //         } else {
//     //             phoneNumberElement.classList.remove('warning');
//     //         }
//     //         if (userEmailData.has(email)) {
//     //             emailElement.classList.add('warning');

//     //             errNotice.innerHTML = 'Email is exits!';
//     //             return;
//     //         } else {
//     //             emailElement.classList.remove('warning');
//     //         }
//     //         if (!check.checkEmail(email)) {
//     //             emailElement.classList.add('warning');

//     //             errNotice.innerHTML = 'Your email have some problem!';
//     //             return;
//     //         } else {
//     //             emailElement.classList.remove('warning');
//     //         }
//     //         if (!check.checkPassWord(passWord)) {
//     //             passWordElement.classList.add('warning');

//     //             errNotice.innerHTML = 'Your password have some problem!';
//     //             return;
//     //         } else {
//     //             passWordElement.classList.remove('warning');
//     //         }
//     //         userData[nickName] = {};
//     //         errNotice.innerHTML = '';
//     //         userNameData.add(nickName);
//     //         userData[nickName].fullName = fullName;
//     //         userData[nickName].phoneNumber = phoneNumber;
//     //         userNumberData.add(phoneNumber);
//     //         userData[nickName].email = email;
//     //         userEmailData.add(email);
//     //         userData[nickName].passWord = passWord;
//     //         console.log(userData[nickName]);
//     //         console.log(userData);
            
            
            
//     //             fullNameElement.style.display = 'none'
//     //             nickNameElement.style.display = 'none'
            

            
//     //     };

//     //     document.getElementById('btnAcc--login').onclick = () => {
//     //         function logIn() {
//     //             let userNickNamen = document.getElementById('infoSingup--username').value;
//     //             let userPassWordn = document.getElementById('infoSingup--password').value;

//     //             if (userNameData.has(userNickNamen)) {
//     //                 if (userData[userNickNamen].passWord === userPassWordn) {
//     //                     errNotice.innerHTML = '';
//     //                     let userName = document.getElementById('infoSingup--fullname');
//     //                     let userEmail = document.getElementById('infoSingup--email');
//     //                     let userPhone = document.getElementById('infoSingup--phonenumber');
//     //                     userName.innerHTML = userData[userNickNamen].fullName;
//     //                     userEmail.innerHTML = userData[userNickNamen].email;
//     //                     userPhone.innerHTML = userData[userNickNamen].phoneNumber;
//     //                 } else errNotice.innerHTML = 'Password is wrong!';
//     //             } else errNotice.innerHTML = 'Nick Name invalid!';
//     //         }
//     //         logIn();
//     //     };

//     //     function logOut() {
//     //         errNotice.innerHTML = '';
//     //         let userName = document.getElementById('userFullName');
//     //         let userEmail = document.getElementById('userEmail');
//     //         let userPhone = document.getElementById('userPhoneNumer');
//     //         userName.innerHTML = 'Full Name';
//     //         userEmail.innerHTML = 'Email';
//     //         userPhone.innerHTML = 'Phone Number';
//     //     }
//     // }, []);

//     return (
//         <div>
//             <div className="singup">
//                 <div className="boxSingup">
//                     <div className='boxSingup_title'>Sign up - Log in</div>
//                     <div className="infoSingup">
//                         <input
//                             className="inputSingup infoSingup--username"
//                             id="infoSingup--username"
//                             placeholder="Username"
//                         ></input>
//                         <input
//                             className="inputSingup infoSingup--fullname"
//                             id="infoSingup--fullname"
//                             placeholder="Tên đầy đủ"
//                         ></input>
//                         <input
//                             className="inputSingup infoSingup--phonenumber"
//                             id="infoSingup--phonenumber"
//                             placeholder="Số điện thoại"
//                         ></input>
//                         <input
//                             className="inputSingup infoSingup--email"
//                             id="infoSingup--email"
//                             type="text"
//                             placeholder="Email"
//                         ></input>
//                         <input
//                             className="inputSingup infoSingup--password"
//                             id="infoSingup--password"
//                             type="password"
//                             placeholder="Mật Khẩu"
//                         ></input>
//                         <label className="infoSingup--notice">
//                             {' '}
//                             <input type="checkbox" className="inputSingup--input" id="inputSingup--input"></input> Đồng
//                             ý với mọi điều khoản cung cấp
//                         </label>
//                     </div>
//                     <div className="btnAcc">
//                        <a href="/">
//                             <button className="btnAcc_all btnAcc--singup" id="btnAcc--singup">
//                             Truy cập dùng thử ngay
//                             </button>
//                        </a>

//                         <a href="/">
//                             {/* <button className="btnAcc_all btnAcc--login" id="btnAcc--login">
                                
//                             </button> */}
//                         </a>
//                     </div>
//                     <a href="/d" className="forgetmk" id="forgetmk"> 
//                         Quên mật khẩu ?
//                     </a>
//                     <div className="error" id="error"></div>

//                     <div className="picSingup">
//                         <div className="picSingup_logo"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Singup;
