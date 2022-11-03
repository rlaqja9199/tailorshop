import { useEffect, useState } from 'react';

export const useScroll = ()=>{
  const [state, setState] = useState({
    x:0,
    y:0
  });
  const onScroll = ()=>{
    //스크롤의 위치가 바뀔 때마다 state의 x와 y의 값을 변경
    setState({y: window.scrollY, x: window.scrollX})
    // console.log("y ", window.scrollY, "x ", window.scrollX);
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll)
  },[])
  return state;
}

// const {x,y} = useScroll();
// 위와 같이 변수 선언 후 

// <h1 style={{color: y> 100 ? "red" : "blue"}}>HI</h1>
// x혹은 y의 값에 따라 변경되는 조건문을 사용해준다.



