/*global kakao*/ 
import React, { useEffect } from 'react'



const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(34.97153, 127.52779),
      level: 6
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(34.97153, 127.52779); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"40%", height:"50vh"}}></div>
       
        </div>
    )
}

export default Location;