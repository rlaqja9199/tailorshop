import React, { useState } from 'react'
import './SignUp.css'

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
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        eMail: "",
        mobileNumber: "",
    })



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

    //텍스트타이핑 오파시티
    const textTypeOpacity = (e)=>{
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
    };

    const onChange = async (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();

        if(isNaN(formData.mobileNumber)){
            alert("전화번호는 숫자만 입력해주세요");
            setFormData({
                ...formData,
                mobileNumber: "",
            })
        }

        //유효성검사 - 글자수 제한, 유의미한 데이터인지 파악 등
        //1. id의 길이(4-10자 입력)
        if(formData.c_id.length<4 || formData.c_id.length>=11) alert("ID가 양식에 적합하지 않습니다.");
        //2. 비밀번호의 최소길이 4글자 이상
        else if(formData.c_password.length<4 || formData.c_pwch.length<4) alert("비밀번호는 4자 이상 입력해주세요.");
        //3. 비밀번호와 비밀번호확인이 일치하는지
        else if(formData.c_password !== formData.c_pwch) alert("비밀번호가 일치하지 않습니다.");
        //4. 전화번호 phone은 3글자 / phone2, phone3은 4글자
        else if(formData.c_phone.length>=4 || formData.c_phone2.length>=5 || formData.c_phone3.length>=5 ) alert("전화번호 양식에 적합하지 않습니다.");
        //중복아이디 체크
        // else {
        //     if (formData.c_id===)
        // }
        //input에 값이 있는지 체크하고
        if(formData.c_id !== "" && formData.c_password !== "" && formData.c_pwch !== "" && formData.c_name !== "" && formData.c_gender !== "" &&
        formData.c_phone !== "" && formData.c_add !== "" && formData.c_adddetail !=="" && formData.c_email !==""){
            insertJoin();
        }
    }
    //insertJoin 함수
    function insertJoin(){
        axios.post("http://localhost:8000/signup",formData)
        // axios.post(`${API_URL}/register`,formData)
        .then(res=>{
            console.log(res);
            // navigate('/');              
        })
        .catch(e=>{
            console.log(e);
        })
    }


  return (
    <form id='signUpForm' onSubmit={onSubmit}>
        <div id='signUp'>
            <ul id='signUpBox'>
                <li>
                    <h3>SIGN UP</h3>
                </li>
                <li>
                    <p style={{opacity:userNameTextOpacity}}>USERNAME</p>
                    <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='USERNAME' />
                    <div className='inputLine' style={{backgroundColor: userNameLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:passwordTextOpacity}}>PASSWORD</p>
                    <input type="text" onFocus={inputFocus} onChange={textTypeOpacity} placeholder='PASSWORD' />
                    <div className='inputLine' style={{backgroundColor: passwordLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:passwordCheckTextOpacity}}>PASSWORD CHECK</p>
                    <input type="text" onFocus={inputFocus} onChange={textTypeOpacity} placeholder='PASSWORD CHECK' />
                    <div className='inputLine' style={{backgroundColor: passwordCheckLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:eMailTextOpacity}}>E-MAIL</p>
                    <input type="text" onFocus={inputFocus} onChange={textTypeOpacity} placeholder='E-MAIL' />
                    <div className='inputLine' style={{backgroundColor: eMailLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:mobileNumberTextOpacity}}>MOBILE NUMBER</p>
                    <input type="text" name='mobileNumber' onFocus={inputFocus} onChange={textTypeOpacity} placeholder='MOBILE NUMBER' />
                    <div className='inputLine' style={{backgroundColor: mobileNumberLineColor}}></div>
                </li>
                <li>
                    <p style={{opacity:questionTextOpacity}}>QUESTION</p>
                    <div id='questionWrap'>
                        <select name='question' onClick={inputFocus}>
                            <option value="eSchool">출신 초등학교는?</option>
                            <option value="nickname">자신의 별명은?</option>
                            <option value="speciality">자신의 특기는?</option>
                            <option value="bestFriend">가장 친한 친구의 이름은?</option>
                            <option value="bestPlace">가장 좋아하는 장소는?</option>
                        </select>
                        <input type="text" onFocus={inputFocus} onChange={textTypeOpacity} placeholder='QUESTION ANSWER'/>
                    </div>
                    <div className='inputLine' style={{backgroundColor:questionLineColor}}></div>
                </li>
                <li>
                    <button id='joinBtn' type='submit'>JOIN BARON</button>
                </li>
            </ul>
        </div>
    </form>
  )
}

export default SignUp