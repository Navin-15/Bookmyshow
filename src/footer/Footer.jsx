import React from 'react'
import { BsHeadset } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import bookmyshowlogo from '/images/bookmyshow.png';

import './footer.css'

function Footer() {
  return (
    <>
    
        <div className="footerdiv px-5 py-5">

            <div className=" border border-white p-5 d-flex footerdiv justify-content-around">

                <div className=" text-center">
                    <div className="">
                        <BsHeadset className='footerimage' />
                    </div>
                    <div className="footertext">24/7 CUSTOMER CARE</div>
                </div>

                <div className=" text-center">
                    <div className="">
                        <IoTicketSharp className='footerimage' />
                    </div>
                    <div className="footertext">RESEND BOOKING CONFIRMATION</div>
                </div>

                <div className=" text-center">
                    <div className="">
                        <IoIosMail className='footerimage' />
                    </div>
                    <div className="footertext">SUBSCRIBE TO THE NEWSLETTER</div>
                </div>

            </div>


            <div className="border border-white p-4 mt-3 d-flex justify-content-center mt-1">
                <div className="">
                    <img className='lo-go' src={bookmyshowlogo} alt="" />
                </div>
            </div>

           <div className="border border-white p-4 mt-3 ">
                <div className=" container text-center">
                Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
                The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
           </div>   
           </div>
        </div>
           
    
    </>
  )
}

export default Footer