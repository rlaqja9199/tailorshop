import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';





const SignUp = () => {
    const [userNameTextOpacity, setUserNameTextOpacity] = useState(0);
    const [passwordTextOpacity, setPasswordTextOpacity] = useState(0);
    const [passwordCheckTextOpacity, setPasswordCheckTextOpacity] = useState(0);
    const [eMailTextOpacity, setEMailTextOpacity] = useState(0);
    const [mobileNumberTextOpacity, setMobileNumberTextOpacity] = useState(0);
    const [questionTextOpacity, setQuestionTextOpacity] = useState(0);
    const [userNameLineColor, setUserNameLineColor] = useState('#eee');
    const [passwordLineColor, setPasswordLineColor] = useState('#eee');
    const [passwordCheckLineColor, setPasswordCheckLineColor] = useState('#eee');
    const [eMailLineColor, setEMailLineColor] = useState('#eee');
    const [mobileNumberLineColor, setMobileNumberLineColor] = useState('#eee');
    const [questionLineColor, setQuestionLineColor] = useState('#eee');
    const [joinCompleteMsg, setJoinCompleteMsg] = useState('none');
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        eMail: "",
        mobileNumber: "",
        question: "1",
        answer: "",
    })
    const navigate = useNavigate();



    //인풋 포커스 라인컬러
    const inputFocus = (e)=>{
        const focus =  e.target.placeholder;
        if(focus === 'USERNAME'){
            setUserNameLineColor('#2e5fd1');
            setPasswordLineColor('#eee');
            setPasswordCheckLineColor('#eee');
            setEMailLineColor('#eee');
            setMobileNumberLineColor('#eee');
            setQuestionLineColor('#eee');
        }else if(focus === 'PASSWORD'){
            setUserNameLineColor('#eee');
            setPasswordLineColor('#2e5fd1');
            setPasswordCheckLineColor('#eee');
            setEMailLineColor('#eee');
            setMobileNumberLineColor('#eee');
            setQuestionLineColor('#eee');
        }else if(focus === 'PASSWORD CHECK'){
            setUserNameLineColor('#eee');
            setPasswordLineColor('#eee');
            setPasswordCheckLineColor('#2e5fd1');
            setEMailLineColor('#eee');
            setMobileNumberLineColor('#eee');
            setQuestionLineColor('#eee');
        }else if(focus === 'E-MAIL'){
            setUserNameLineColor('#eee');
            setPasswordLineColor('#eee');
            setPasswordCheckLineColor('#eee');
            setEMailLineColor('#2e5fd1');
            setMobileNumberLineColor('#eee');
            setQuestionLineColor('#eee');
        }else if(focus === 'MOBILE NUMBER'){
            setUserNameLineColor('#eee');
            setPasswordLineColor('#eee');
            setPasswordCheckLineColor('#eee');
            setEMailLineColor('#eee');
            setMobileNumberLineColor('#2e5fd1');
            setQuestionLineColor('#eee');
        }else if(focus === 'QUESTION ANSWER' || e.target.name === 'question'){
            setUserNameLineColor('#eee');
            setPasswordLineColor('#eee');
            setPasswordCheckLineColor('#eee');
            setEMailLineColor('#eee');
            setMobileNumberLineColor('#eee');
            setQuestionLineColor('#2e5fd1');
        }
    }

    // //텍스트타이핑 오파시티
    // const textTypeOpacity = (e)=>{
       
    // };

    const onChange =  (e) =>{
        if(e.target.placeholder === 'USERNAME'){
            if(e.target.value !== ''){
                setUserNameTextOpacity(1);
            }else{
                setUserNameTextOpacity(0);
            }
        }else if(e.target.placeholder === 'PASSWORD'){
            if(e.target.value !== ''){
                setPasswordTextOpacity(1);
            }else{
                setPasswordTextOpacity(0);
            }
        }else if(e.target.placeholder === 'PASSWORD CHECK'){
            if(e.target.value !== ''){
                setPasswordCheckTextOpacity(1);
            }else{
                setPasswordCheckTextOpacity(0);
            }
        }else if(e.target.placeholder === 'E-MAIL'){
            if(e.target.value !== ''){
                setEMailTextOpacity(1);
            }else{
                setEMailTextOpacity(1);
            }
        }else if(e.target.placeholder === 'MOBILE NUMBER'){
            if(e.target.value !== ''){
                setMobileNumberTextOpacity(1);
            }else{
                setMobileNumberTextOpacity(0);
            }
        }else if(e.target.placeholder === 'QUESTION ANSWER'){
            if(e.target.value !== ''){
                setQuestionTextOpacity(1);
            }else{
                setQuestionTextOpacity(0);
            }
        }
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        if(isNaN(formData.mobileNumber)){
            alert("전화번호는 숫자만 입력해주세요");
            setFormData({
                ...formData,
                mobileNumber: "",
            })
        }

        //유효성검사 - 글자수 제한, 유의미한 데이터인지 파악 등
        //1. id의 길이(4-10자 입력)
        if(formData.username.length<4 || formData.username.length>=13) alert("ID는 4~12글자로 생성가능합니다.");
        //2. 비밀번호의 최소길이 4글자 이상
        else if(formData.password.length<4 || formData.password.length>20) alert("비밀번호는 4~20글자로 생성가능합니다.");
        //3. 비밀번호와 비밀번호확인이 일치하는지
        else if(formData.password !== formData.passwordCheck) alert("비밀번호가 일치하지 않습니다.");
        //4. 전화번호
        else if(formData.mobileNumber.length<10 || formData.mobileNumber.length >12) alert("전화번호 양식에 적합하지 않습니다.");
        //중복아이디 체크
        // else {
        //     if (formData.c_id===)
        // }
        //input에 값이 있는지 체크하고
        else if(formData.username !== "" && formData.password !== "" && formData.passwordCheck !== "" && formData.eMail !== "" 
        && formData.mobileNumber !== "" && formData.question !=="" && formData.answer !==""){
            console.log("값이 있어요")
            insertJoin();
        }else {
            console.log("값이 없어요")
        }
    }
    //insertJoin 함수
    function insertJoin(){
        axios.post("http://localhost:8080/signup",formData)
        // axios.post(`${API_URL}/register`,formData)
        .then(res=>{
            console.log(res);
            setTimeout(() => {
                setJoinCompleteMsg('block')
            }, 500);
        })
        .catch(e=>{
            console.log(e);
        })
    }


  return (
    <div id='signUp'>
        <form id='signUpForm' onSubmit={onSubmit}>
            <ul id='signUpBox'>
                <li>
                    <h3>SIGN UP</h3>
                </li>
                <li>
                    <p style={{opacity:userNameTextOpacity}}>USERNAME</p>
                    <input type="text" onFocus={inputFocus} onChange={onChange} value={formData.username} name="username" placeholder='USERNAME' />
                    <div className='inputLine' style={{backgroundColor: userNameLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:passwordTextOpacity}}>PASSWORD</p>
                    <input type="password" onFocus={inputFocus} onChange={onChange}  value={formData.password} name="password" placeholder='PASSWORD' />
                    <div className='inputLine' style={{backgroundColor: passwordLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:passwordCheckTextOpacity}}>PASSWORD CHECK</p>
                    <input type="password" onFocus={inputFocus} onChange={onChange}  value={formData.passwordCheck} name="passwordCheck" placeholder='PASSWORD CHECK' />
                    <div className='inputLine' style={{backgroundColor: passwordCheckLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:eMailTextOpacity}}>E-MAIL</p>
                    <input type="text" onFocus={inputFocus} onChange={onChange}  value={formData.eMail} name="eMail" placeholder='E-MAIL' />
                    <div className='inputLine' style={{backgroundColor: eMailLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:mobileNumberTextOpacity}}>MOBILE NUMBER</p>
                    <input type="text" onFocus={inputFocus} onChange={onChange}  value={formData.mobileNumber} name="mobileNumber" placeholder='MOBILE NUMBER' />
                    <div className='inputLine' style={{backgroundColor: mobileNumberLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:questionTextOpacity}}>QUESTION</p>
                    <div id='questionWrap'>
                        <select name='question' value={formData.question} onClick={inputFocus} onChange={onChange}>
                            <option value="1">출신 초등학교는?</option>
                            <option value="2">자신의 별명은?</option>
                            <option value="3">자신의 특기는?</option>
                            <option value="4">가장 친한 친구의 이름은?</option>
                            <option value="5">가장 좋아하는 장소는?</option>
                        </select>
                        <input type="text" onFocus={inputFocus} onChange={onChange}  value={formData.answer} name="answer" placeholder='QUESTION ANSWER'/>
                    </div>
                    <div className='inputLine' style={{backgroundColor:questionLineColor}}></div>
                </li>
                <li>
                    <button id='joinBtn' type='submit'>JOIN BARON</button>
                </li>
            </ul>
        </form>
        <div id='joinComplete' style={{display:joinCompleteMsg}}>
            <div className='grayBg'></div>
            <div id='msgBox'>
                <h3>회원가입 완료</h3>
                <p id='usernameCall'><span>{formData.username}</span>님</p>
                <p id='completeMsg'>
                    BARON의 회원이 되신것을<br/>
                    진심으로 축하드립니다.
                </p>
                <button><a href='/'>확인</a></button>
            </div>
        </div>
    </div>
  )
}

export default SignUp