// 리덕스 액션타입, 초기값, 액션생성함수, 리듀서
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";

// 초깃값 설정
const initialState = {
   isLogin: false
}

// 액션 생성 함수 
export const setLogin = () => {
    return {
        type: SET_LOGIN,
    }
}
export const setLogout = () => {
    return {
        type: SET_LOGOUT
    }
}
// 홈으로 이동 함수
export const goToHome = (navigate) => () => {
    navigate('/')
}


//리듀서 만들기
export default function logincookie(state = initialState, action){
    switch(action.type){
        case SET_LOGIN:
            return {
                isLogin: true
            }
        case SET_LOGOUT:
            return {
                isLogin: false
            }
        
        default:
            return state;
    }
}

