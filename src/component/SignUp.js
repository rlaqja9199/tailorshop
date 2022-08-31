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


  return (
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
                <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='PASSWORD' />
                <div className='inputLine' style={{backgroundColor: passwordLineColor}}></div>
            </li>
            <li>
                <p style={{opacity:passwordCheckTextOpacity}}>PASSWORD CHECK</p>
                <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='PASSWORD CHECK' />
                <div className='inputLine' style={{backgroundColor: passwordCheckLineColor}}></div>
            </li>
            <li>
                <p style={{opacity:eMailTextOpacity}}>E-MAIL</p>
                <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='E-MAIL' />
                <div className='inputLine' style={{backgroundColor: eMailLineColor}}></div>
            </li>
            <li>
                <p style={{opacity:mobileNumberTextOpacity}}>MOBILE NUMBER</p>
                <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='MOBILE NUMBER' />
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
                    <input onFocus={inputFocus} onChange={textTypeOpacity} placeholder='QUESTION ANSWER'/>
                </div>
                <div className='inputLine' style={{backgroundColor:questionLineColor}}></div>
            </li>
            <li>
                <button id='joinBtn'>JOIN BARON</button>
            </li>
        </ul>
    </div>
  )
}

export default SignUp