import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="footer align-items-center text-center ">
                <div>
                    <h3><i class="fas fa-mobile-alt icons"></i></h3>
                    <h3 className="text-white">Call  Me</h3>
                    <p className="text-white">(+880)1703464246</p>
                </div>
                <div>
                <h3><i class="far fa-map icons"></i></h3>
                <h3 className="text-white">Address</h3>
                <p className="text-white">House-131/132, Cha-Block,Road-no: 2 Mirpur-2, <br />
                 Opposite of Dhaka Commerce College<br />
                 Dhaka -1216, Bangladesh.</p>
                </div>
                <div>
                <h3><i class="fas fa-envelope icons"></i></h3>
                <h3 className="text-white">Email</h3>
                <p className="text-white">mahirasef30@gmail.com</p>
                </div>
            </div>
            <div className="footer-text text-center">
                <small>©Copyright 2021. All Rights Reserved by Mahir Ashef.</small>
            </div>
        </div>
    );
};

export default Footer;