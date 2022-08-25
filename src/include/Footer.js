import React from 'react'
import {BsInstagram, BsYoutube} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <>
        <div id='leftFooter'>
            <p>COMPANY : 바론테일러</p>
            <p>MASTER : 김바론</p>
            <p>ADDRESS : 전라남도 순천시 왕지5길 54 1층</p>
            <p>M. 010-1234-5678</p>
            <p>BUSINESS LICENSE : 123-45-67890</p>
            <p>2020 ⓒ Copyright BARONTAILOR. Design by BEOM.</p>
        </div>
        <div id='rightFooter'>
            <p><a href='#'><BsInstagram /></a></p>
            <p><a href='#'><FaFacebookF /></a></p>
            <p><a href='#'><BsYoutube /></a></p>
        </div>
    </>
  )
}

export default Footer