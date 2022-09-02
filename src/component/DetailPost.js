import axios from 'axios';
import React, { useEffect } from 'react'

const DetailPost = () => {
    useEffect(()=>{
        axios.get(`http://localhost:8000/dress/${id}`)
        .then(result => {
            console.log(result);
            const resulta = result.data;
            setDress(resulta[0]); 
            setMainImg('http://localhost:3000/'+resulta[0].imgsrc);
            setQtt(resulta[0].size1); 
        })   
        .catch(e=> {
            console.log(e);
            console.log("dddd")
        })
    },[])
  return (
    <div id='detailPost'>
        <div className='detailHeader'>
            <p></p>
            <h4></h4>
            <button>온라인 예약</button>
      </div>
    </div>
  )
}

export default DetailPost