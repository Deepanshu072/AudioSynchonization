/* Copyright (C) 2020 Ditanbiz Inc. - All Rights Reserved
 * You must not use, distribute and modify this code. 
 * This code or program is the property of Ditanbiz Inc.
 * copying, or using without any authorization will be 
 * considered as an offence under relevant laws.
 * If you find this code or program online send an email
 * to copyright@ditanbizinc.com
 */

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import CryptoJs, { AES, SHA256 } from 'crypto-js'
import Values, { sort } from '../utils/values'


const NavBarHome = props => {

    const router = useRouter();
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {

        (function (document, window, index) {
            'use strict';

            var elSelector = '.headerHome',
                element = document.querySelector(elSelector);

            if (!element) return true;

            var elHeight = 0,
                elTop = 0,
                dHeight = 0,
                wHeight = 0,
                wScrollCurrent = 0,
                wScrollBefore = 0,
                wScrollDiff = 0;

            window.addEventListener('scroll', function () {
                elHeight = element.offsetHeight;
                dHeight = document.body.offsetHeight;
                wHeight = window.innerHeight;
                wScrollCurrent = window.pageYOffset;
                wScrollDiff = wScrollBefore - wScrollCurrent;
                elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

                if (wScrollCurrent <= 0) // scrolled to the very top; element sticks to the top
                    element.style.top = '0px';

                else if (wScrollDiff > 0) // scrolled up; element slides in
                    element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

                else if (wScrollDiff < 0) // scrolled down
                {
                    element.style.top = '-70px';
                }

                wScrollBefore = wScrollCurrent;
            });
            /*navbar transparent to color*/
            const changeBackground = () => {
                if (window.scrollY >= 100) {
                    setNavbar(true);
                }
                else {
                    setNavbar(false);
                }
            }
            window.addEventListener('scroll', changeBackground);

        }(document, window, 0));

    }, []);

    return (<>
        <div className="headerHome" id="headerHome">
            <div className="row">
                <div className="col-12">
                <nav className={navbar ? 'navbar active navbar-expand-lg topbar static-top shadow-sm  osahan-nav-top px-0' : 'navbar navbar-expand-lg topbar static-top shadow-sm  osahan-nav-top px-0'}>
                        <div className="container">
                            <Link href="/" passHref><a className="mx-5" ><img src="/images/logo.png" alt="" style={{ maxHeight: '50px' }} /></a></Link>

                            <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-white small" placeholder="Find Services..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" type="button">
                                            <i className="fa fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <ul className="navbar-nav align-items-center ml-auto">
                                <li className="nav-item dropdown no-arrow no-caret mr-3 dropdown-notifications d-sm-none">
                                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-search fa-fw"></i>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small" placeholder="Find Services..." aria-label="Search" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow no-caret mr-3 dropdown-notifications">
                                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                                        <h6 className="dropdown-header dropdown-notifications-header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell mr-2">
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                            </svg>
                   Alerts Center
                </h6>
                                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                                            <div className="dropdown-notifications-item-icon bg-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                                </svg>
                                            </div>
                                            <div className="dropdown-notifications-item-content">
                                                <div className="dropdown-notifications-item-content-details">December 29, 2020</div>
                                                <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                                            <div className="dropdown-notifications-item-icon bg-info">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart">
                                                    <line x1="12" y1="20" x2="12" y2="10"></line>
                                                    <line x1="18" y1="20" x2="18" y2="4"></line>
                                                    <line x1="6" y1="20" x2="6" y2="16"></line>
                                                </svg>
                                            </div>
                                            <div className="dropdown-notifications-item-content">
                                                <div className="dropdown-notifications-item-content-details">December 22, 2020</div>
                                                <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                                            <div className="dropdown-notifications-item-icon bg-danger">
                                                <svg className="svg-inline--fa fa-exclamation-triangle fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                                    <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                                                </svg>
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="dropdown-notifications-item-content">
                                                <div className="dropdown-notifications-item-content-details">December 8, 2020</div>
                                                <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                                            <div className="dropdown-notifications-item-icon bg-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="8.5" cy="7" r="4"></circle>
                                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                                </svg>
                                            </div>
                                            <div className="dropdown-notifications-item-content">
                                                <div className="dropdown-notifications-item-content-details">December 2, 2020</div>
                                                <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item dropdown-notifications-footer" href="alerts.html">View All Alerts</a>
                                    </div>
                                </li>
                                {!logged ? <></> : <li className="nav-item dropdown no-arrow no-caret mr-3 dropdown-notifications">
                                    <Link href={'/messages'}>
                                        <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </a></Link>
                                </li>}

                                <li className="nav-item dropdown no-arrow no-caret dropdown-user">
                                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {image != null ? <img className="dropdown-user-img" src={"data:image/jpeg;base64," + image} /> : <img className="img-fluid" src="/images/logo.png" />}

                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">

                                        {logged ? <>

                                            <h6 className="dropdown-header d-flex align-items-center">
                                                {image != null ? <img className="dropdown-user-img" src={"data:image/jpeg;base64," + image} style={{ maxWidth: '50px', maxHeight: '45px' }} /> : <img className="dropdown-user-img" src="/images/logo.png" />}
                                                <div className="dropdown-user-details">
                                                    <div className="dropdown-user-details-name">{name}</div>
                                                    <div className="dropdown-user-details-email">{user}</div>
                                                </div>
                                            </h6>
                                            <div className="dropdown-divider"></div>
                                            <Link href={'/profile/[userName]/[userId]'} as={`/profile/${user}/${userId}`}  >
                                                <a className="dropdown-item" >
                                                    <div className="dropdown-item-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                        </svg>
                                                    </div>
                   Account
                </a></Link>
                                            <a className="dropdown-item" onClick={handleLogout}>
                                                <div className="dropdown-item-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                        <polyline points="16 17 21 12 16 7"></polyline>
                                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                                    </svg>
                                                </div>
                   Logout
                </a>

                                        </> : <>

                                            <Link href='/login'>
                                                <a className="dropdown-item" >
                                                    <div className="dropdown-item-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                        </svg>
                                                    </div>
                   Log In
                </a></Link>
                                            <Link href="/register">
                                                <a className="dropdown-item" >
                                                    <div className="dropdown-item-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                            <polyline points="16 17 21 12 16 7"></polyline>
                                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                                        </svg>
                                                    </div>
                   Sign Up
                </a>
                                            </Link>


                                        </>}




                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <nav className={navbar ? 'navbar active navbar-expand-lg osahan-nav-mid px-0 border-top shadow-sm' : 'navbar navbar-expand-lg osahan-nav-mid px-0 border-top shadow-sm'}>
                        <div className="container">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                <i className="fa fa-bars" aria-hidden="true"/>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link href="/"><a className="nav-link" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Home
                </a></Link>
                                        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                            <a className="dropdown-item" href="index.html">Home 1</a>
                            <a className="dropdown-item" href="index2.html">Home 2</a>
                            <a className="dropdown-item" href="index3.html">Home 3</a>
                        </div> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link" >About</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link" >Contact</a></Link>
                                    </li>
                                    {logged ? <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Freelancer Pad
                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                                            <Link href="/projects"><a className="dropdown-item" href="" >Projects </a></Link>
                                            {/* <Link href="/freelancer-profile"><a className="dropdown-item" href="">Freelancer / Agency Profile</a></Link> */}
                                            <Link href="/profile"><a className="dropdown-item" href="">My Profile</a></Link>
                                            {/* <Link href="/jobFr"><a className="dropdown-item" href="">Jobs Freelancer</a></Link> */}
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Intern Pad
                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                                            <Link href="/projects"><a className="dropdown-item" href="" >Projects </a></Link>
                                            {/* <Link href="/freelancer-profile"><a className="dropdown-item" href="">Freelancer / Agency Profile</a></Link> */}
                                            <Link href="/profile"><a className="dropdown-item" href="">My Profile</a></Link>
                                            {/* <Link href="/jobFr"><a className="dropdown-item" href="">Jobs Freelancer</a></Link> */}
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Seller Pad
                            </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                                            <Link href="/addJob" ><a className="dropdown-item" href="">Add a Project</a></Link>
                                            <Link href="/myprojects"><a className="dropdown-item" href="" >Projects </a></Link>

                                            <Link href="/ongoing"><a className="dropdown-item" href="" >Ongoing </a></Link>
                                            <Link href="/freelancers" ><a className="dropdown-item" href="">Freelancers / Agencies</a></Link>
                                            <Link href="/interns" ><a className="dropdown-item" href="">Interns</a></Link>
                                            <Link href="/profile"><a className="dropdown-item" href="">My Profile</a></Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPayment" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Payments
                </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownPayment">
                                            <Link href="/payment"><a className="dropdown-item" >Payment Page</a></Link>


                                            {/* <Link href={'/payments/seller/[userId]'} as={`/payments/seller/${userId}`}> */}
                                            <Link href={'/payments/seller/[userId]'} as={`/payments/seller/Seller Id here`}>
                                                <a className="dropdown-item" >Payment Seller</a></Link>



                                            {/* <Link href={'/payments/seller/refunds/[userId]'} as={`/payments/seller/refunds/${userId}`}> */}
                                            <Link href={'/payments/seller/refunds/[userId]'} as={`/payments/seller/refunds/Seller Id here`}>
                                                <a className="dropdown-item" >Refunds Seller</a></Link>


                                            {/* <Link href={'/payments/freelancer/[userId]'} as={`/payments/freelancer/${userId}`}> */}
                                            <Link href={'/payments/freelancer/[userId]'} as={`/payments/freelancer/Freelancer Id here`}>
                                                <a className="dropdown-item" >Payment Freelancer</a></Link>

                                            {/* <Link href={'/payments/freelancer/transfers/[userId]'} as={`/payments/freelancer/transfers/${userId}`}> */}
                                            <Link href={'/payments/freelancer/transfers/[userId]'} as={`/payments/freelancer/transfers/Freelancer Id here`}>
                                                <a className="dropdown-item" >Transfer Freelancer</a></Link>
                                            {/* <Link href="/transaction-history"><a className="dropdown-item" href="register.html">Transaction History</a></Link>
                            <Link href="/transaction-remaining"><a className="dropdown-item" href="">Transaction Remaining</a></Link> */}
                                        </div>
                                    </li>
                                    </>: <></>}
                                </ul>
                            </div>
                            {logged ? <>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/fr">
                                        <a className="nav-link" href="become-a-seller.html">
                                            <i className="fa fa-fw fa-trophy"></i>
                                            <span>Become A freelancer</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/br">
                                        <a className="nav-link" href="become-a-seller.html">
                                            <i className="fa fa-fw fa-trophy"></i>
                                            <span>Become A Seller</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/rintern">
                                        <a className="nav-link" href="become-a-seller.html">
                                            <i className="fa fa-fw fa-trophy"></i>
                                            <span>Become an Intern</span></a>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                    <a className="nav-link">
                        <img className="country-flag img-fluid" src="/images/flag/india.png" />
                        <span>English</span>
                    </a>
                        </li>*/}
                             </ul></> : <></>}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
    );

};



export default NavBarHome;