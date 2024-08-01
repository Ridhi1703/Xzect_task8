
import React from 'react';
import Head from 'next/head';
import Slideshow from '../componenets/Slideshow';// Ensure this path is correct

const PageName = () => {
  return (
       
        
<> <head>
        {/* <!-- Meta --> */}
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="keywords" content=""/>
        <meta name="author" content="DexignZone"/>
        <meta name="robots" content=""/>
        <meta name="description" content="Akantika Crowdfunding & Charity is a Responsive HTML Template that can be used to build Non-Profit, Charity Website. Template is well designed and well coded and flexible"/>
        <meta property="og:title" content="Akantika - Crowdfunding & Charity HTML5 Template"/>
        <meta property="og:description" content="Akantika Crowdfunding & Charity is a Responsive HTML Template that can be used to build Non-Profit, Charity Website. Template is well designed and well coded and flexible"/>
        <meta property="og:image" content="https://Akantika.dexignzone.com/xhtml/social-image.png"/>
        <meta name="format-detection" content="telephone=no"/>
        {/* <!-- Mobile Specific --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* <!-- Title --> */}
        <title>Akantika - Crowdfunding & Charity HTML5 Template</title>
        {/* <!-- Favicon icon --> */}
        <link rel="icon" type="image/png" href="/images/pic2.png"/>
  
        <link rel="stylesheet" href="style.css"/>
          <link href="./output.css" rel="stylesheet"/>
          <script src="https://cdn.tailwindcss.com"></script>
       
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </head>
   
        <div className="page-wraper">
            {/* <!-- Header --> */}
            <header className="site-header mo-left header style-2"/>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">
                            {/* <!-- Website Logo --> */}
                            {/* <!-- <div className="logo-header mostion logo-dark">
                                <a href="index.html">
                                    /images/logo-2.png" alt="">
                                </a>
                            </div> -->
                            <!-- Nav Toggle Button --> */}
                            <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                          
                            {/* <!-- Header Nav --> */} 
                            <nav className="bg-white shadow-lg">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                  <div className="flex justify-between h-16">
                                    <div className="flex">
                                      <div className="flex-shrink-0 flex items-center mx-4">
                                        <a href="index.html">
                                          <img className="h-12 w-100%" src="/images/logo-2.png" alt="Logo"/>
                                        </a>
                                      </div>
                                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8 mx-4">
                                        {/* <!-- Navigation Links --> */}
                                        <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Home
                                        </a>
                                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Pages
                                        </a>
                                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Fundraiser
                                        </a>
                                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Projects
                                        </a>
                                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Blog
                                        </a>
                                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                          Contact Us
                                        </a>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </div>
                              </nav>
                              
            {/* <!-- Header End -->
            <!-- Contact Sidebar --> */}
            <div className="contact-sidebar">
                <div className="contact-box">
                    <div className="logo-contact logo-dark">
                        <a href="index.html">
                            <img src="/images/logo-2.png" alt=""/>
                        </a>
                    </div>
                    <div className="m-b50 contact-text">
                        <div className="dz-title">
                            <h4>About us</h4>
                            <div className="dz-separator style-1 text-primary mb-0"></div>
                        </div>
                        <p>Aliquam erat massa porttitor vel egestas sit tristique ultricies lorem aliquet venenatis libero a nulla placerat egestas.</p>
                        <a href="about-us.html" className="btn btn-primary btn-sm">READ MORE</a>
                    </div>
                    <div className="dz-title">
                        <h4>Contact Info</h4>
                        <div className="dz-separator style-1 text-primary mb-0"></div>
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell">
                                <i className="las la-phone-volume"></i>
                            </span>
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Call Now</h5>
                            <p className="m-b0">
                                +91 123 456 7890,<br/>+91 987 654 3210
                            </p>
                        </div>
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell">
                                <i className="las la-envelope-open"></i>
                            </span>
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Email Now</h5>
                            <p className="m-b0">
                                <a href="#" className="__cf_email__" data-cfemail="7811161e17381f15191114561b1715">[email &#160;protected]</a>
                                , <a href="#" className="__cf_email__" data-cfemail="3f4c5a4d49565c5a4c7f58525e5653115c5052">[email &#160;protected]</a>
                            </p>
                        </div>
                    </div>
                    <div className="icon-bx-wraper left">
                        <div className="icon-md m-r20">
                            <span className="icon-cell">
                                <i className="las la-map-marker"></i>
                            </span>
                        </div>
                        <div className="icon-content">
                            <h5 className="tilte">Location</h5>
                            <p className="m-b0">15/B Miranda House, New York, US</p>
                        </div>
                    </div>
                </div>
            </div>
          {/* </header>  */}
            <div className="menu-close"></div>
            <div className="page-content bg-white">
                {/* <!-- Banner --> */}
                <div className="main-bnr-one">
                    <div className="swiper-container main-slider">
                        <div className="swiper-wrapper">
                           


                            <div className="swiper-slide">
                                <div className="banner-inner" style={{backgroundImage: "url('/images/slider-bg1.jpg')"}}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-content">
                                                    <div className="top-content">
                                                        <h5 className="sub-title text-secondary">GIVE A HAND TO MAKE</h5>
                                                        <h1 className="title">Your Donation Can Change the World </h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                                        <div className="d-flex align-items-center">
                                                            <a className="btn btn-primary btnhover1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#modalDonate">
                                                                <span>Donate</span>
                                                                <i className="flaticon-heart text-secondary ms-3"></i>
                                                            </a>
                                                            <a href="about-us.html" className="btn btn-secondary btnhover2">
                                                                Learn More <i className="flaticon-right-arrows ms-3"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-media row gx-4">
                                                    <div className="col-5">
                                                        <div className="main-img1">
                                                            <img src="/images/pic1.jpg" alt=""/>
                                                        </div>
                                                        <div className="main-img2">
                                                            <img src="/images/pic2.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="main-img3">
                                                            <img src="/images/pic3.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="shape1" width="187" height="559" viewBox="0 0 187 559" fill="none" >
                                        <path d="M158 245C71.6 224.2 -50.6667 146.333 -101 110V497C95.8 534.6 153.667 344.667 158 245Z" fill="var(--primary)"/>
                                        <path d="M-113 2C-12 190 292.675 -12.9435 143 241C54 392 93 529 -100 556" stroke="var(--secondary)" stroke-width="6"/>
                                    </svg>
                                    <svg className="shape3" viewBox="0 0 619 356" fill="none">
                                        <path d="M4 3C68 113 148 236.892 316 249C427 257 557 198 626 354" stroke="var(--secondary)" stroke-width="8"/>
                                        <path d="M440.576 119.632C305 113 297.836 59.5755 261 11H619V266C594 162 551.867 125.077 440.576 119.632Z" fill="var(--primary)"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-inner" style={{backgroundImage: "url('/images/slider-bg2.jpg')"}}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-content">
                                                    <div className="top-content">
                                                        <h5 className="sub-title text-secondary">HELPING HAND FOR CHILDREN</h5>
                                                        <h1 className="title">Give a Helping Hand for Children </h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                                        <div className="d-flex align-items-center">
                                                            <a className="btn btn-primary btnhover1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#modalDonate">
                                                                <span>Donate</span>
                                                                <i className="flaticon-heart text-secondary ms-3"></i>
                                                            </a>
                                                            <a href="about-us.html" className="btn btn-secondary btnhover2">
                                                                Learn More <i className="flaticon-right-arrows ms-3"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-media row gx-4">
                                                    <div className="col-5">
                                                        <div className="main-img1">
                                                            <img src="/images/pic4.jpg" alt=""/>
                                                        </div>
                                                        <div className="main-img2">
                                                            <img src="/images/pic5.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="main-img3">
                                                            <img src="/images/pic6.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="shape1" width="187" height="559" viewBox="0 0 187 559" fill="none">
                                        <path d="M158 245C71.6 224.2 -50.6667 146.333 -101 110V497C95.8 534.6 153.667 344.667 158 245Z" fill="var(--primary)"/>
                                        <path d="M-113 2C-12 190 292.675 -12.9435 143 241C54 392 93 529 -100 556" stroke="var(--secondary)" stroke-width="6"/>
                                    </svg>
                                    <svg className="shape3" viewBox="0 0 619 356" fill="none" >
                                        <path d="M4 3C68 113 148 236.892 316 249C427 257 557 198 626 354" stroke="var(--secondary)" stroke-width="8"/>
                                        <path d="M440.576 119.632C305 113 297.836 59.5755 261 11H619V266C594 162 551.867 125.077 440.576 119.632Z" fill="var(--primary)"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="banner-inner" style={{backgroundImage: "url('/images/slider-bg3.jpg')"}}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-content">
                                                    <div className="top-content">
                                                        <h5 className="sub-title text-secondary">CHILD THE OF EDUCATION</h5>
                                                        <h1 className="title">Give  a Child the of Education</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                                        <div className="d-flex align-items-center">
                                                            <a className="btn btn-primary btnhover1" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#modalDonate">
                                                                <span>Donate</span>
                                                                <i className="flaticon-heart text-secondary ms-3"></i>
                                                            </a>
                                                            <a href="about-us.html" className="btn btn-secondary btnhover2">
                                                                Learn More <i className="flaticon-right-arrows ms-3"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="banner-media row gx-4">
                                                    <div className="col-5">
                                                        <div className="main-img1">
                                                            <img src="/images/pic7.jpg" alt=""/>
                                                        </div>
                                                        <div className="main-img2">
                                                            <img src="/images/pic8.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="main-img3">
                                                            <img src="/images/pic9.jpg" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="shape1" width="187" height="559" viewBox="0 0 187 559" fill="none">
                                        <path d="M158 245C71.6 224.2 -50.6667 146.333 -101 110V497C95.8 534.6 153.667 344.667 158 245Z" fill="var(--primary)"/>
                                        <path d="M-113 2C-12 190 292.675 -12.9435 143 241C54 392 93 529 -100 556" stroke="var(--secondary)" stroke-width="6"/>
                                    </svg>
                                    <svg className="shape3" viewBox="0 0 619 356" fill="none" >
                                        <path d="M4 3C68 113 148 236.892 316 249C427 257 557 198 626 354" stroke="var(--secondary)" stroke-width="8"/>
                                        <path d="M440.576 119.632C305 113 297.836 59.5755 261 11H619V266C594 162 551.867 125.077 440.576 119.632Z" fill="var(--primary)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onclick="plusSlides(1)">&#10095;</a>
                        <div className="bottom-wrapper">
                            <ul className="social-list">
                                <li>
                                    <a href="https://www.facebook.com/">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/">Instagram</a>
                                </li>
                            </ul>
                            <div className="btn-wrapper">
                                <div className="main-btn main-btn-prev">
                                    <i className="fa fa-angle-left"></i>
                                </div>
                                <div className="main-btn main-btn-next">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Donate --> */}
                <section className="content-inner section-wrapper4">
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="200ms">
                                <div className="donate-form form-wrapper bg-cover bg-center" style={{backgroundImage: "url('/images/bg2.jpg')"}}>
                                    <div className="donate-info text-center">
                                        <h2 className="title mb-20">Donate Today</h2>
                                        <p className="text-white">Charity law within the UK varies among England and Wales, Scotland and Northern Ireland, but the fundamental principles are the same</p>
                                    </div>
                                    <div className="form-content px-4 lg:px-0">
                           <form className="dzForm" >
                                    <input type="hidden" name="dzToDo" value="Contact" />
                                    <input type="hidden" name="reCaptchaEnable" value="0" />
                     <div className="dzFormMsg"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                       <div className="lg:col-span-12">
                   <div className="form-group">
                    <div className="input-group">
                <input type="text" name="dzOther[Other_Amount]" className="form-control donate-input" required placeholder="Other Amount (USD)" />
                      </div>
                   </div>
                 </div>
    <div className="lg:col-span-12">
        <div className="tag-donate style-3 flex flex-wrap justify-center">
            <div className="donate-categories">
                <input className="form-check-input donate-fill" type="radio" name="flexRadioDefault" id="flexRadioDefault1d" value="10"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1d">$10</label>
            </div>
            <div className="donate-categories">
                <input className="form-check-input donate-fill" type="radio" name="flexRadioDefault" id="flexRadioDefault2d" value="25" defaultChecked/>
                <label className="form-check-label" htmlFor="flexRadioDefault2d">$25</label>
            </div>
            <div className="donate-categories">
                <input className="form-check-input donate-fill" type="radio" name="flexRadioDefault" id="flexRadioDefault3d" value="50"/>
                <label className="form-check-label" htmlFor="flexRadioDefault3d">$50</label>
            </div>
            <div className="donate-categories">
                <input className="form-check-input donate-fill" type="radio" name="flexRadioDefault" id="flexRadioDefault4d" value="100"/>
                <label className="form-check-label" htmlFor="flexRadioDefault4d">$100</label>
            </div>
        </div>
    </div>
    <div className="lg:col-span-12">
        <button type="submit" className="btn btn-dark">Donate Now</button>
    </div>
</div>
</form>
</div>
                                </div>
                            </div>
                            
                      
                            <div className="col-xl-7 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="400ms">
                                <div className="section-inner">
                                    <div className="section-head m-b30">
                                        <h5 className="sub-title">About Us</h5>
                                        <h2 className="title">
                                            Help is<br/>Our Main Goal
                                        </h2>
                                    </div>
                                    <div className="lg:flex md:flex-row flex-col m-b30">
                                        <div className="lg:w-7/12 md:w-full">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        </div>
                                        <div className="lg:w-5/12 md:w-full">
                                            <div className="counter-text-wrapper md:pl-0 pl-4 md:border-l-0 border-l-3 border-gray-300">
                                                <div className="counter-text m-b30">
                                                    <h4>Donation Raised</h4>
                                                    <div className="counter-num text-primary">
                                                        $<span className="counter">55,000</span>
                                                    </div>
                                                </div>
                                                <div className="counter-text">
                                                    <h4>Donation Goal</h4>
                                                    <div className="counter-num text-primary">
                                                        $<span className="counter">25,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="img-1" src="/images/pic2.png"/>
                </section>
                {/* <!-- Donate End-->
                <!-- service --> */}

                <section className="clearfix">
                  
                    <div className="container mx-auto">
                         <div className="bg-gray" style={{ backgroundImage: "url('/images/bg10.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                            <div className="container mx-auto py-16">
                                <div className="text-center mb-10">
                                    <h5 className="text-lg font-semibold text-gray-800">Services</h5>
                                    <h2 className="text-3xl font-bold text-gray-900">Why Akantika</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {/* <!-- Column 1 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 52" fill="none" >
                                                {/* <!-- Your SVG path here --> */}
                                                <path d="M40.2617 44.1014C39.7379 44.1014 39.2212 43.8615 38.8858 43.4079C38.3249 42.6488 38.4857 41.5787 39.2449 41.018C46.6367 35.5566 51.6673 30.7706 53.7932 27.1772C55.7479 23.873 56.582 20.8238 56.582 16.9815C56.582 7.76826 50.0773 3.6442 43.6309 3.6442C37.6911 3.6442 35.0672 6.89463 34.0319 8.83197C33.6643 9.51986 32.9504 9.9476 32.1685 9.94818C32.168 9.94818 32.1674 9.94818 32.1667 9.94818C31.3855 9.94818 30.6716 9.52162 30.3033 8.83479C29.264 6.89615 26.6318 3.64408 20.6815 3.64408C14.4216 3.64408 9.63368 7.23869 8.18606 13.0251C7.95707 13.9405 7.0293 14.4972 6.11348 14.2682C5.19789 14.0392 4.64125 13.1111 4.87036 12.1956C6.68934 4.92447 12.8955 0.226074 20.6815 0.226074C26.8206 0.226074 30.2941 2.98994 32.1652 5.43576C34.0319 2.98959 37.4984 0.226074 43.6307 0.226074C48.0409 0.226074 52.1 1.7692 55.0601 4.57115C58.2916 7.62975 59.9996 11.921 59.9996 16.9812C59.9996 21.419 58.9925 25.0999 56.7346 28.917C53.7571 33.9499 46.6844 39.7701 41.2757 43.7664C40.9703 43.9926 40.6144 44.1014 40.2617 44.1014Z" fill="#003B4A"/>
                                                        <path className="secondary" d="M11.2156 20.3647C15.6523 20.3647 17.6429 22.8516 18.4262 24.3122C18.5247 24.4956 18.7916 24.4954 18.8897 24.3119C19.6702 22.8511 21.65 20.3647 26.0863 20.3647C31.1402 20.3647 35.5858 23.8147 35.5858 30.1143C35.5858 32.6635 35.0663 34.8474 33.6244 37.2846C30.6861 42.2515 21.0064 48.6901 19.018 49.9589C18.7983 50.0992 18.5199 50.0996 18.2996 49.9597C16.3097 48.6971 6.62816 42.2903 3.66695 37.2845C2.22484 34.8476 1.70898 32.6636 1.70898 30.1144C1.70898 23.8147 6.16188 20.3647 11.2156 20.3647Z" fill="#F7CF47"/>
                                                        <path d="M18.6579 51.7735C18.2063 51.7735 17.7656 51.6453 17.3836 51.4029C16.1793 50.6388 5.51988 43.7739 2.19586 38.1551C0.677227 35.5877 0 33.1081 0 30.1145C0 26.6664 1.1734 23.7346 3.39293 21.6356C5.42496 19.7141 8.20301 18.6559 11.2155 18.6559C14.9923 18.6559 17.3152 20.2428 18.6562 21.7121C19.9946 20.2425 22.3136 18.6559 26.0863 18.6559C29.0985 18.6559 31.8755 19.7142 33.9059 21.6361C36.1228 23.7344 37.2947 26.6664 37.2947 30.1144C37.2947 33.1038 36.6164 35.5834 35.0953 38.1548C31.7955 43.7326 21.1414 50.6313 19.9375 51.3995C19.5537 51.6443 19.1114 51.7735 18.6579 51.7735ZM11.2155 22.0738C7.33418 22.0738 3.41789 24.5601 3.41789 30.1145C3.41789 32.4929 3.93223 34.3772 5.13762 36.4147C7.40379 40.2456 14.4473 45.4298 18.656 48.1584C22.6461 45.5519 29.9057 40.2139 32.1533 36.4147C33.3612 34.3728 33.8764 32.4886 33.8764 30.1145C33.8764 24.5601 29.9637 22.0738 26.0859 22.0738C22.7277 22.0738 21.1384 23.7288 20.3966 25.1174C20.0536 25.7596 19.3871 26.1588 18.6577 26.1588C17.9295 26.1588 17.2637 25.7608 16.9202 25.1203C16.1749 23.7302 14.5806 22.0738 11.2155 22.0738Z" fill="#003B4A"/>
                                                  
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Industry’s best fundraising success</p>
                                    </div>
                                    
                                    {/* <!-- Column 2 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 60" fill="none" >
                                                <path d="M30.0001 60C21.9868 60 14.4532 56.8794 8.78679 51.213C-2.91005 39.516 -2.91005 20.4837 8.78679 8.78672C14.4532 3.12059 21.9868 0 30.0001 0C38.0133 0 45.547 3.12059 51.2133 8.78695C62.9102 20.484 62.9102 39.5163 51.2133 51.2133C45.547 56.8794 38.0135 60 30.0001 60ZM30.0001 3.57598C22.942 3.57598 16.3064 6.32449 11.3156 11.3155C1.0128 21.618 1.0128 38.382 11.3156 48.6845C16.3066 53.6755 22.9422 56.424 30.0003 56.424C37.0584 56.424 43.694 53.6755 48.6848 48.6845C58.9876 38.382 58.9876 21.618 48.6848 11.3155C43.6939 6.32449 37.0582 3.57598 30.0001 3.57598ZM30.0001 47.0007C25.6446 47.0007 21.2889 45.3429 17.973 42.0271C11.3414 35.3952 11.3414 24.6049 17.973 17.973C24.6046 11.3414 35.3951 11.3414 42.027 17.973C42.7252 18.6712 42.7252 19.8034 42.027 20.5018C41.3288 21.1999 40.1967 21.1999 39.4982 20.5018C34.2609 15.2641 25.7388 15.2643 20.5013 20.5018C15.264 25.7392 15.264 34.2612 20.5013 39.4985C25.7387 44.7361 34.2608 44.7359 39.4982 39.4985C40.1964 38.8004 41.3288 38.8004 42.0268 39.4985C42.725 40.1967 42.725 41.3289 42.0268 42.0273C38.7113 45.3429 34.3556 47.0007 30.0001 47.0007Z" fill="#003B4A"/>
                                                <path className="secondary" d="M40.9401 22.0428L37.9576 19.0603C36.921 18.0237 36.921 16.3433 37.9576 15.3068L45.5557 7.70867C46.5922 6.67214 48.2726 6.67214 49.3092 7.70867L52.2917 10.6912C53.3282 11.7277 53.3282 13.4082 52.2917 14.4447L44.6936 22.0428C43.6572 23.0793 41.9766 23.0793 40.9401 22.0428Z" fill="#F7CF47"/>
                                                <path d="M42.8169 24.6083C41.6303 24.6083 40.5148 24.1461 39.6758 23.307L36.6932 20.3246C35.8542 19.4857 35.3921 18.3699 35.3921 17.1836C35.3921 15.997 35.8542 14.8814 36.693 14.0425L44.2911 6.44445C45.1301 5.60551 46.2458 5.14355 47.4322 5.14355C48.6187 5.14355 49.7342 5.60563 50.5731 6.44445L53.5559 9.42723C54.3949 10.2662 54.857 11.3819 54.857 12.5683C54.857 13.7547 54.395 14.8704 53.5559 15.7093L45.9581 23.3071C45.119 24.1461 44.0035 24.6083 42.8169 24.6083ZM47.4323 8.7193C47.2982 8.7193 47.0405 8.75234 46.8197 8.97301L39.2219 16.5711C38.8842 16.9088 38.8842 17.4583 39.2219 17.7961L42.2044 20.7786C42.4252 20.9994 42.6829 21.0325 42.8169 21.0325C42.9509 21.0325 43.2084 20.9995 43.4293 20.7788L51.0275 13.1807C51.2481 12.9601 51.2812 12.7023 51.2812 12.5683C51.2812 12.4343 51.2481 12.1766 51.0275 11.9558L48.0447 8.97301C47.824 8.75223 47.5662 8.7193 47.4323 8.7193Z" fill="#003B4A"/>
                                                <path className="secondary" d="M10.6911 52.2915L7.70854 49.3089C6.67202 48.2724 6.67202 46.5919 7.70854 45.5554L15.3066 37.9573C16.3432 36.9208 18.0236 36.9208 19.0601 37.9573L22.0427 40.9399C23.0792 41.9764 23.0792 43.6569 22.0427 44.6934L14.4446 52.2915C13.4082 53.328 11.7276 53.328 10.6911 52.2915Z" fill="#F7CF47"/>
                                                <path d="M12.5684 54.8568C11.3819 54.8568 10.2664 54.3947 9.42746 53.5559L6.44469 50.5731C5.60574 49.7342 5.14355 48.6185 5.14355 47.4322C5.14355 46.2455 5.60563 45.1299 6.44469 44.2911L14.0425 36.6932C14.8815 35.8543 15.997 35.3921 17.1836 35.3921C18.3702 35.3921 19.4857 35.8543 20.3247 36.6933L23.3073 39.6758C24.1463 40.5147 24.6084 41.6304 24.6084 42.8169C24.6084 44.0034 24.1463 45.1189 23.3075 45.9578L15.7093 53.5557C14.8704 54.3947 13.7548 54.8568 12.5684 54.8568ZM17.1839 38.9676C17.0498 38.9676 16.7923 39.0006 16.5714 39.2213L8.97324 46.8194C8.75258 47.0401 8.71953 47.2979 8.71953 47.4319C8.71953 47.5659 8.75258 47.8235 8.97324 48.0444L11.956 51.0271C12.1767 51.2478 12.4345 51.2808 12.5684 51.2808C12.7024 51.2808 12.9602 51.2478 13.181 51.0271L20.7788 43.429C21.1166 43.0913 21.1166 42.5418 20.7788 42.2041L17.7963 39.2215C17.5754 39.0006 17.3177 38.9676 17.1839 38.9676Z" fill="#003B4A"/>
                                                <path className="secondary" d="M37.9576 40.9399L40.9401 37.9573C41.9766 36.9208 43.6571 36.9208 44.6936 37.9573L52.2917 45.5554C53.3282 46.5919 53.3282 48.2724 52.2917 49.3089L49.3092 52.2915C48.2726 53.328 46.5922 53.328 45.5557 52.2915L37.9576 44.6934C36.921 43.657 36.921 41.9764 37.9576 40.9399Z" fill="#F7CF47"/>
                                                <path d="M47.432 54.8568C46.2455 54.8568 45.13 54.3947 44.2911 53.5559L36.693 45.9578C35.854 45.1189 35.3921 44.0031 35.3921 42.8169C35.3921 41.6302 35.8542 40.5146 36.693 39.6758L39.6758 36.6932C40.5145 35.8543 41.6302 35.3921 42.8167 35.3921C44.0034 35.3921 45.119 35.8543 45.9578 36.6933L53.5557 44.2911C54.3947 45.13 54.8568 46.2458 54.8568 47.4322C54.8568 48.6187 54.3947 49.7342 53.5557 50.5731L50.5731 53.5559C49.7341 54.3947 48.6186 54.8568 47.432 54.8568ZM42.8166 38.9676C42.6827 38.9676 42.4251 39.0006 42.2044 39.2213L39.2215 42.2041C38.8838 42.5418 38.8838 43.0913 39.2215 43.429L46.8196 51.0271C47.0403 51.2478 47.2981 51.2808 47.432 51.2808C47.566 51.2808 47.8238 51.2478 48.0446 51.0271L51.0271 48.0444C51.2479 47.8237 51.2808 47.5659 51.2808 47.4319C51.2808 47.2979 51.2478 47.0402 51.0271 46.8194L43.429 39.2215C43.2083 39.0006 42.9507 38.9676 42.8166 38.9676Z" fill="#003B4A"/>
                                                <path className="secondary" d="M7.70895 10.6912L10.6915 7.70867C11.728 6.67214 13.4085 6.67214 14.445 7.70867L22.0431 15.3068C23.0796 16.3433 23.0796 18.0237 22.0431 19.0603L19.0605 22.0428C18.024 23.0793 16.3436 23.0793 15.307 22.0428L7.70895 14.4447C6.67254 13.4083 6.67254 11.7277 7.70895 10.6912Z" fill="#F7CF47"/>
                                                <path d="M17.1836 24.6083C15.997 24.6083 14.8814 24.1461 14.0425 23.307L6.44469 15.7092C5.60563 14.8702 5.14355 13.7545 5.14355 12.5682C5.14355 11.3816 5.60563 10.2659 6.44469 9.4271L9.42723 6.44433C10.2663 5.60539 11.3819 5.14343 12.5683 5.14343C13.7547 5.14343 14.8704 5.6055 15.7093 6.44433L23.3074 14.0424C24.1463 14.8814 24.6083 15.9971 24.6083 17.1835C24.6083 18.37 24.1462 19.4855 23.3074 20.3245L20.3246 23.307C19.4857 24.1461 18.37 24.6083 17.1836 24.6083ZM12.5682 8.71929C12.4341 8.71929 12.1764 8.75234 11.9557 8.973L8.97312 11.9555C8.75234 12.1762 8.71941 12.434 8.71941 12.5681C8.71941 12.702 8.75246 12.9596 8.97312 13.1805L16.5712 20.7784C16.792 20.9991 17.0497 21.0323 17.1838 21.0323C17.3177 21.0323 17.5753 20.9993 17.7959 20.7786L20.7788 17.7958C21.1166 17.4581 21.1166 16.9086 20.7788 16.5709L13.1806 8.973C12.9598 8.75222 12.7021 8.71929 12.5682 8.71929Z" fill="#003B4A"/>
                                           
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Supported By 55,00,000+ Donors</p>
                                    </div>
                                    
                                    {/* <!-- Column 3 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 60" fill="none" >
                                                <path className="secondary" d="M24.1344 20.3707C27.6361 20.3707 29.207 22.3333 29.8252 23.4862C29.9029 23.6309 30.1136 23.6306 30.1909 23.4858C30.807 22.3329 32.3693 20.3707 35.8705 20.3707C39.859 20.3707 43.3676 23.0933 43.3676 28.0651C43.3676 30.077 42.9577 31.8006 41.8198 33.724C39.5007 37.6439 31.8615 42.7254 30.2923 43.7268C30.1188 43.8375 29.8991 43.8379 29.7253 43.7275C28.1549 42.7309 20.5141 37.6746 18.177 33.724C17.0391 31.8005 16.6318 30.077 16.6318 28.0651C16.6316 23.0933 20.1457 20.3707 24.1344 20.3707Z" fill="#F7CF47"/>
                                                        <path d="M30.008 45.5105C29.585 45.5105 29.1721 45.3904 28.8141 45.1635C27.8561 44.5554 19.3778 39.0942 16.7132 34.5901C15.4808 32.5067 14.9312 30.4945 14.9312 28.0653C14.9312 25.2449 15.8951 22.8425 17.7189 21.1182C19.3883 19.5397 21.6666 18.6705 24.1344 18.6705C27.0119 18.6705 28.8678 19.7944 30.0064 20.9255C31.1431 19.7941 32.9957 18.6705 35.8706 18.6705C38.3382 18.6705 40.6157 19.5399 42.2837 21.1188C44.1051 22.843 45.068 25.2452 45.068 28.0655C45.068 30.4914 44.5176 32.5037 43.2831 34.5902C40.6373 39.0626 32.1643 44.5496 31.2067 45.1605C30.8476 45.3894 30.4332 45.5105 30.008 45.5105ZM24.1346 22.0711C21.2465 22.0711 18.3322 23.9245 18.3322 28.0651C18.3322 29.899 18.7112 31.2876 19.6404 32.8582C21.3594 35.764 26.8472 39.8136 30.0064 41.885C33.1648 39.8038 38.6497 35.7426 40.3562 32.8582C41.2873 31.2841 41.6671 29.8955 41.6671 28.0651C41.6671 23.9243 38.7557 22.0711 35.8704 22.0711C33.3943 22.0711 32.2307 23.2761 31.6904 24.2872C31.3585 24.9085 30.7136 25.2949 30.0077 25.2949C29.303 25.2949 28.6587 24.9096 28.3263 24.2894C27.7839 23.2775 26.6162 22.0711 24.1346 22.0711Z" fill="#003B4A"/>
                                                        <path d="M29.9995 60C29.7357 60 29.472 59.9389 29.2304 59.816C26.4612 58.4116 22.3042 56.1641 18.227 53.4345C14.3738 50.8549 11.2584 48.3077 8.96732 45.8635C6.75564 43.504 5.5376 40.4214 5.5376 37.1837V12.7907C5.5376 11.9409 6.16467 11.2218 7.00642 11.1061C15.1369 9.98861 22.883 6.21412 28.8179 0.477807C29.477 -0.159106 30.5222 -0.159106 31.1813 0.477807C34.3562 3.54636 38.0182 6.04573 42.065 7.90643C42.9182 8.29865 43.2918 9.30845 42.8997 10.1617C42.5075 11.0152 41.4979 11.3889 40.6444 10.9963C36.7414 9.20193 33.1672 6.85947 29.9993 4.02214C24.0901 9.30752 16.7121 12.8897 8.93849 14.2461V37.1838C8.93849 39.5543 9.83005 41.8109 11.4486 43.5378C13.5631 45.7935 16.4803 48.1726 20.1191 50.6085C23.6954 53.0029 27.3474 55.019 29.9997 56.3891C32.652 55.0187 36.3041 53.0028 39.8804 50.6085C43.5193 48.1723 46.4364 45.7935 48.5508 43.5378C50.1697 41.8109 51.061 39.5543 51.061 37.1838V12.7907C51.061 11.8515 51.8222 11.0903 52.7614 11.0903C53.7005 11.0903 54.4618 11.8515 54.4618 12.7907V37.1838C54.4618 40.4216 53.2437 43.5039 51.032 45.8636C48.7409 48.3078 45.6256 50.855 41.7723 53.4346C37.6951 56.1643 33.5383 58.4117 30.769 59.8162C30.527 59.9387 30.2631 60 29.9995 60Z" fill="#003B4A"/>
                                                
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Easy-To-Manage Tools To Boost Results</p>
                                    </div>
{/*                                             
                                    <!-- Column 4 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg ">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 60" fill="none" >
                                                <path className="secondary" d="M24.0053 1.67444C27.5841 1.67444 29.1898 3.68034 29.8216 4.85854C29.9009 5.00655 30.1163 5.00643 30.1953 4.85819C30.8249 3.67999 32.4218 1.67444 36.0003 1.67444C40.0768 1.67444 43.6627 4.45717 43.6627 9.53877C43.6627 11.5951 43.2435 13.3566 42.0807 15.3226C39.7105 19.3289 31.9026 24.5225 30.2987 25.546C30.1214 25.6592 29.8969 25.6593 29.7193 25.5467C28.114 24.5281 20.3048 19.3603 17.9161 15.3224C16.753 13.3564 16.3369 11.5949 16.3369 9.53866C16.337 4.45717 19.9289 1.67444 24.0053 1.67444Z" fill="#F7CF47"/>
                                                <path d="M30.0084 27.3055C29.5883 27.3055 29.1784 27.1864 28.8228 26.9611C27.8442 26.34 19.1905 20.7653 16.4751 16.1753C15.2216 14.0566 14.6626 12.01 14.6626 9.53883C14.6626 6.67406 15.641 4.23469 17.492 2.48426C19.1864 0.882305 21.4995 0 24.0053 0C26.9633 0 28.8563 1.1693 30.0067 2.33098C31.1551 1.1693 33.0453 0 36.0003 0C38.506 0 40.8183 0.882656 42.5114 2.48496C44.36 4.2348 45.3372 6.67406 45.3372 9.53883C45.3372 12.0062 44.7773 14.053 43.5219 16.1753C40.8249 20.7343 32.1767 26.3343 31.1995 26.9576C30.843 27.1853 30.431 27.3055 30.0084 27.3055ZM24.0053 3.34898C21.0219 3.34898 18.0115 5.26301 18.0115 9.53883C18.0115 11.4257 18.4013 12.8544 19.3572 14.47C21.1261 17.4596 26.7784 21.6258 30.0067 23.7396C33.2345 21.6159 38.8831 17.4389 40.6394 14.47C41.5974 12.8507 41.9881 11.4221 41.9881 9.53883C41.9881 5.26301 38.9808 3.34898 36.0002 3.34898C33.4379 3.34898 32.2324 4.59879 31.6721 5.64738C31.3433 6.26238 30.7058 6.64383 30.0079 6.64383C29.3114 6.64383 28.6744 6.2632 28.3455 5.6502C27.783 4.6002 26.5732 3.34898 24.0053 3.34898Z" fill="#003B4A"/>
                                                <path d="M49.006 60H10.9939C8.73508 60 6.89746 58.1624 6.89746 55.9036V31.6884C6.89746 29.4297 8.73508 27.592 10.9939 27.592H22.3955C23.3202 27.592 24.07 28.3419 24.07 29.2665V34.5666H37.6045C38.5291 34.5666 39.2789 35.3165 39.2789 36.2411C39.2789 37.1658 38.5291 37.9156 37.6045 37.9156H22.3955C21.4709 37.9156 20.721 37.1657 20.721 36.2411V30.941H10.9939C10.5817 30.941 10.2466 31.2763 10.2466 31.6883V55.9035C10.2466 56.3156 10.5818 56.6508 10.9939 56.6508H49.006C49.4181 56.6508 49.7533 56.3155 49.7533 55.9035V31.6884C49.7533 31.2763 49.418 30.9411 49.006 30.9411H37.6043C36.6796 30.9411 35.9298 30.1913 35.9298 29.2667C35.9298 28.342 36.6797 27.5922 37.6043 27.5922H49.006C51.2648 27.5922 53.1024 29.4298 53.1024 31.6886V55.9037C53.1024 58.1624 51.2648 60 49.006 60Z" fill="#003B4A"/>
                                                <path d="M20.5282 47.2561H17.8369V50.9212C17.8369 51.354 17.3094 51.5704 16.782 51.5704C16.2545 51.5704 15.7271 51.354 15.7271 50.9212V42.3198C15.7271 41.8736 16.2544 41.6842 16.782 41.6842C17.3093 41.6842 17.8369 41.8736 17.8369 42.3198V45.6332H20.5282V42.3198C20.5282 41.8736 21.0556 41.6842 21.583 41.6842C22.1105 41.6842 22.6379 41.8736 22.6379 42.3198V50.9212C22.6379 51.354 22.1106 51.5704 21.583 51.5704C21.0557 51.5704 20.5282 51.354 20.5282 50.9212V47.2561Z" fill="#003B4A"/>
                                                <path d="M26.2074 45.8088H28.2359C28.6416 45.8088 28.8715 46.2012 28.8715 46.6338C28.8715 46.999 28.6821 47.4319 28.2359 47.4319H26.2074V49.7309H29.8319C30.2376 49.7309 30.4675 50.1638 30.4675 50.664C30.4675 51.0967 30.2781 51.5701 29.8319 51.5701H25.0173C24.5575 51.5701 24.0977 51.3538 24.0977 50.9209V42.3333C24.0977 41.9004 24.5575 41.6841 25.0173 41.6841H29.8319C30.2781 41.6841 30.4675 42.1575 30.4675 42.5902C30.4675 43.0906 30.2376 43.5233 29.8319 43.5233H26.2074V45.8088Z" fill="#003B4A"/>
                                                <path d="M32.3059 51.5704C31.8461 51.5704 31.3862 51.3541 31.3862 50.9212V42.3198C31.3862 41.8736 31.9136 41.6842 32.4412 41.6842C32.9685 41.6842 33.4961 41.8736 33.4961 42.3198V49.7311H36.5795C36.9852 49.7311 37.1882 50.191 37.1882 50.6508C37.1882 51.1107 36.9852 51.5705 36.5795 51.5705H32.3059V51.5704Z" fill="#003B4A"/>
                                                <path d="M38.0391 42.3198C38.0391 41.9816 38.35 41.6842 38.8235 41.6842H41.623C43.4082 41.6842 44.8148 42.5228 44.8148 44.7948V44.8623C44.8148 47.1344 43.3542 47.9999 41.4879 47.9999H40.1491V50.921C40.1491 51.3539 39.6217 51.5703 39.0942 51.5703C38.5668 51.5703 38.0393 51.3539 38.0393 50.921V42.3199H38.0391V42.3198ZM40.149 43.5235V46.377H41.4878C42.2452 46.377 42.7051 45.9441 42.7051 45.0246V44.8758C42.7051 43.9561 42.2453 43.5235 41.4878 43.5235H40.149Z" fill="#003B4A"/>
                                           
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Akantika Get Expert Support 24/7</p>
                                    </div>
                                    
                                    {/* <!-- Column 5 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 58 60" fill="none" >
                                                <path className="secondary" d="M35.0318 26.7145C31.4309 26.7145 29.8153 28.7327 29.1796 29.9183C29.0998 30.0671 28.8831 30.067 28.8034 29.9179C28.1699 28.7323 26.5633 26.7145 22.9624 26.7145C18.8606 26.7145 15.2524 29.5144 15.2524 34.6274C15.2524 36.6964 15.6741 38.4689 16.8443 40.4471C19.229 44.4782 27.0852 49.7041 28.6991 50.7337C28.8776 50.8476 29.1035 50.8477 29.2821 50.7344C30.8972 49.7096 38.7549 44.5096 41.1584 40.4469C42.3286 38.4687 42.7473 36.6962 42.7473 34.6272C42.7476 29.5147 39.1334 26.7145 35.0318 26.7145Z" fill="#F7CF47"/>
                                                        <path d="M28.9918 52.5504C28.5576 52.5504 28.1348 52.4267 27.7682 52.1929C26.7843 51.565 18.0741 45.9249 15.355 41.3285C14.0874 39.1856 13.522 37.1189 13.522 34.6276C13.522 31.732 14.5102 29.2661 16.3799 27.4965C18.0919 25.876 20.4299 24.9835 22.9628 24.9835C25.9237 24.9835 27.828 26.1447 28.9933 27.3096C30.1606 26.145 32.0678 24.9835 35.0321 24.9835C37.5653 24.9835 39.9042 25.8757 41.6173 27.496C43.4893 29.2663 44.4788 31.7322 44.4788 34.6276C44.4788 37.1224 43.9143 39.1889 42.6487 41.3285C39.9101 45.9576 31.195 51.5714 30.2102 52.1962C29.8447 52.428 29.4235 52.5504 28.9918 52.5504ZM22.9628 28.4456C19.987 28.4456 16.9842 30.357 16.9842 34.6276C16.9842 36.5134 17.3756 37.9441 18.3347 39.5657C20.0934 42.5381 25.7456 46.7216 28.9935 48.8611C32.2421 46.732 37.8978 42.56 39.6691 39.5656C40.6261 37.9474 41.0167 36.5168 41.0167 34.6275C41.0167 30.3572 38.0109 28.4455 35.0321 28.4455C32.4713 28.4455 31.2658 29.6912 30.7056 30.7361C30.366 31.3685 29.7096 31.7607 28.9921 31.7607C28.2728 31.7607 27.6158 31.3672 27.2772 30.7337C26.7193 29.6901 25.5178 28.4456 22.9628 28.4456Z" fill="#003B4A"/>
                                                        <path d="M37.1694 59.9999H11.9538C8.61584 59.9999 5.8999 57.2842 5.8999 53.946V26.4005C5.8999 24.3582 6.92447 22.4778 8.64057 21.3706L24.2263 11.3152C27.1262 9.44408 30.8738 9.44408 33.7738 11.3152L49.3594 21.3706C51.0756 22.4778 52.1001 24.3581 52.1001 26.4005V56.4467C52.1001 57.4027 51.3249 58.1778 50.369 58.1778C49.4131 58.1778 48.6379 57.4028 48.6379 56.4467V26.4005C48.6379 25.5395 48.206 24.7467 47.4822 24.2798L31.897 14.2244C30.1371 13.089 27.863 13.0888 26.103 14.2244L10.5176 24.2798C9.79393 24.7467 9.36209 25.5394 9.36209 26.4005V53.9461C9.36209 55.3754 10.5247 56.5379 11.9538 56.5379H37.1694C38.1253 56.5379 38.9005 57.3128 38.9005 58.269C38.9005 59.2251 38.1253 59.9999 37.1694 59.9999Z" fill="#003B4A"/>
                                                        <path d="M56.0609 20.2716C55.7276 20.2716 55.3912 20.1757 55.0941 19.9752L31.9889 4.3841C30.1733 3.15891 27.8269 3.15891 26.0114 4.3841L2.90627 19.9752C2.11409 20.5099 1.03795 20.3012 0.502993 19.5087C-0.0319682 18.7161 0.176977 17.6401 0.969516 17.1054L24.0747 1.51418C27.0668 -0.504727 30.9333 -0.504727 33.9255 1.51418L57.0306 17.1053C57.823 17.64 58.032 18.716 57.4971 19.5086C57.1628 20.0041 56.6168 20.2716 56.0609 20.2716Z" fill="#003B4A"/>
                                                  
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">A Dedicated Smart-Dashboard</p>
                                    </div>
                                    
                                    {/* <!-- Column 6 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 54 60" fill="none" >
                                                <path className="secondary" d="M27.0007 27.0456C34.0117 27.0456 39.6953 21.3621 39.6953 14.3511C39.6953 7.34005 34.0117 1.65649 27.0007 1.65649C19.9897 1.65649 14.3062 7.34005 14.3062 14.3511C14.3062 21.3621 19.9897 27.0456 27.0007 27.0456Z" fill="#F7CF47"/>
                                                <path d="M26.9996 28.702C19.0862 28.702 12.6484 22.2643 12.6484 14.351C12.6484 6.4377 19.0862 0 26.9996 0C34.9127 0 41.3506 6.43793 41.3506 14.3511C41.3506 22.2643 34.9129 28.702 26.9996 28.702ZM26.9996 3.31277C20.913 3.31277 15.9612 8.26453 15.9612 14.3511C15.9612 20.4376 20.913 25.3894 26.9996 25.3894C33.0862 25.3894 38.0378 20.4376 38.0378 14.3511C38.0378 8.26465 33.0862 3.31277 26.9996 3.31277Z" fill="#003B4A"/>
                                                <path d="M26.4777 21.1479C24.1995 21.0719 22.3389 19.8949 22.3389 18.6799C22.3389 18.0344 22.9085 17.0851 23.6298 17.0851C24.4271 17.0851 25.0727 18.2052 26.4777 18.452V15.3762C24.731 14.7117 22.6806 13.8954 22.6806 11.4651C22.6806 9.05384 24.4652 7.89591 26.4777 7.61115V7.07947C26.4777 6.81357 26.7814 6.56677 27.1991 6.56677C27.5599 6.56677 27.9206 6.81357 27.9206 7.07947V7.55408C29.0977 7.59205 31.3191 7.8958 31.3191 9.20584C31.3191 9.71853 30.9773 10.7627 30.142 10.7627C29.5154 10.7627 29.1548 10.1551 27.9209 10.0602V12.8321C29.6484 13.4776 31.661 14.3699 31.661 16.9329C31.661 19.2871 30.1423 20.7111 27.9209 21.0718V21.6223C27.9209 21.8882 27.56 22.135 27.1993 22.135C26.7816 22.135 26.4779 21.8882 26.4779 21.6223V21.1477H26.4777V21.1479ZM26.6675 12.3767V10.1173C25.8131 10.2883 25.4524 10.7249 25.4524 11.1806C25.4525 11.7311 25.9461 12.0728 26.6675 12.3767ZM27.7308 15.889V18.4331C28.3763 18.2812 28.8889 17.9204 28.8889 17.2369C28.8888 16.6104 28.4142 16.2117 27.7308 15.889Z" fill="#003B4A"/>
                                                <path d="M43.6165 60H10.3831C6.84111 60 3.95947 57.1185 3.95947 53.5765V33.7495C3.95947 32.8348 4.70104 32.093 5.61592 32.093C6.5308 32.093 7.27236 32.8347 7.27236 33.7495V53.5765C7.27236 55.2917 8.66783 56.6873 10.3832 56.6873H43.6167C45.3321 56.6873 46.7275 55.2918 46.7275 53.5765V42.6071C46.7275 41.6924 47.4691 40.9506 48.384 40.9506C49.2988 40.9506 50.0404 41.6923 50.0404 42.6071V53.5765C50.0401 57.1185 47.1584 60 43.6165 60Z" fill="#003B4A"/>
                                                <path d="M47.582 35.4058H6.41758C3.10398 35.4058 0.408203 32.7101 0.408203 29.3965C0.408203 26.0829 3.10398 23.3871 6.41758 23.3871H9.27285C10.1877 23.3871 10.9293 24.1288 10.9293 25.0435C10.9293 25.9582 10.1877 26.7 9.27285 26.7H6.41758C4.93059 26.7 3.72098 27.9098 3.72098 29.3966C3.72098 30.8833 4.93059 32.0932 6.41758 32.0932H47.582C49.069 32.0932 50.2786 30.8833 50.2786 29.3966C50.2786 27.9098 49.0689 26.7 47.582 26.7H44.7268C43.8119 26.7 43.0703 25.9583 43.0703 25.0435C43.0703 24.1289 43.8119 23.3871 44.7268 23.3871H47.582C50.8956 23.3871 53.5914 26.0829 53.5914 29.3965C53.5914 32.7101 50.8956 35.4058 47.582 35.4058Z" fill="#003B4A"/>
                                        
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Receive donations via all popular payment</p>
                                    </div>
                                    
                                    {/* <!-- Column 7 --> */}
                                
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4 ">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 44" fill="none" >
                                                <path d="M53.5835 55.812H14.4268C11.9167 55.812 9.50566 54.6235 7.97672 52.6327L1.23949 43.8597C1.01227 43.5638 0.890039 43.2007 0.892266 42.8277L0.930703 36.1608C0.936094 35.2375 1.68621 34.492 2.60918 34.492C2.6107 34.492 2.61199 34.492 2.61352 34.492C4.60535 34.4972 7.46121 34.5061 9.75516 34.5201C10.7673 34.5261 11.6244 34.5328 12.2307 34.5403C13.5202 34.5561 13.8667 34.5602 14.3619 35.0544L24.24 44.9325C25.3812 46.0737 27.2379 46.0737 28.3791 44.9325L28.3939 44.9176C29.535 43.7766 29.535 41.9197 28.3939 40.7786L19.157 31.6895C18.0497 30.5999 16.5843 29.9998 15.0309 29.9998H1.67848C0.751406 29.9999 0 29.2485 0 28.3214C0 27.3945 0.751406 26.6429 1.67848 26.6429H15.0308C17.4709 26.6429 19.7725 27.5854 21.5114 29.2969L30.7577 38.3953C33.2173 40.8549 33.2173 44.8412 30.7675 47.2913L30.7527 47.306C28.3025 49.7561 24.3162 49.7561 21.8662 47.306L12.4603 37.9001C11.4014 37.885 8.87262 37.8675 4.27793 37.8535L4.25238 42.2714L10.639 50.5879C11.5368 51.7569 12.9527 52.455 14.4267 52.455H53.5834C55.1972 52.455 56.5103 51.1422 56.5103 49.5281V49.5072C56.5103 47.8934 55.1974 46.5803 53.5834 46.5803H37.3835C36.4566 46.5803 35.705 45.8289 35.705 44.9018C35.705 43.9747 36.4564 43.2233 37.3835 43.2233H53.5833C57.048 43.2233 59.867 46.0422 59.867 49.507V49.528C59.8672 52.9931 57.0483 55.812 53.5835 55.812Z" fill="#003B4A"/>
                                                <path className="secondary" d="M42.6089 37.2899C51.2863 37.2899 58.3208 30.2555 58.3208 21.578C58.3208 12.9006 51.2863 5.86609 42.6089 5.86609C33.9314 5.86609 26.897 12.9006 26.897 21.578C26.897 30.2555 33.9314 37.2899 42.6089 37.2899Z" fill="#F7CF47"/>
                                                <path d="M42.6097 38.9689C33.0206 38.9689 25.2192 31.1677 25.2192 21.5784C25.2192 11.9893 33.0204 4.18811 42.6097 4.18811C52.1989 4.18811 60 11.9893 60 21.5784C60.0003 31.1677 52.1989 38.9689 42.6097 38.9689ZM42.6097 7.54495C34.8716 7.54495 28.5762 13.8403 28.5762 21.5784C28.5762 29.3165 34.8717 35.6119 42.6097 35.6119C50.3478 35.6119 56.6432 29.3164 56.6432 21.5784C56.6432 13.8404 50.3479 7.54495 42.6097 7.54495Z" fill="#003B4A"/>
                                                <path d="M41.9634 29.991C39.1437 29.897 36.8408 28.4401 36.8408 26.9363C36.8408 26.1373 37.5458 24.9625 38.4387 24.9625C39.4256 24.9625 40.2245 26.3489 41.9634 26.6543V22.8476C39.8016 22.0252 37.2638 21.0148 37.2638 18.0069C37.2638 15.0226 39.4726 13.5893 41.9634 13.2369V12.579C41.9634 12.2501 42.3394 11.9446 42.8564 11.9446C43.3029 11.9446 43.7494 12.2501 43.7494 12.579V13.1665C45.2063 13.2135 47.9556 13.5894 47.9556 15.2108C47.9556 15.8453 47.5327 17.1376 46.4987 17.1376C45.7233 17.1376 45.2768 16.3856 43.7494 16.2682V19.699C45.8877 20.498 48.3785 21.6024 48.3785 24.7746C48.3785 27.6884 46.4987 29.4508 43.7494 29.8972V30.5787C43.7494 30.9076 43.3029 31.2131 42.8564 31.2131C42.3395 31.2131 41.9634 30.9076 41.9634 30.5787V29.991ZM42.1984 19.1349V16.3385C41.141 16.55 40.6945 17.0905 40.6945 17.6544C40.6945 18.3359 41.3055 18.7589 42.1984 19.1349ZM43.5143 23.482V26.6308C44.3133 26.4428 44.9477 25.9963 44.9477 25.1503C44.9477 24.3749 44.3603 23.8814 43.5143 23.482Z" fill="#003B4A"/>
                                          
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">International Payment Support</p>
                                    </div>
                                    
                                    {/* <!-- Column 8 --> */}
                                    <div className="bg-white p-6 text-center shadow-lg rounded-lg">
                                        <div className="mb-4">
                                            <a href="#" className="block mx-auto w-16 h-16">
                                            <svg className="w-16 h-16 mx-auto" viewBox="0 0 60 60" fill="none" >
                                                <path d="M53.5835 55.812H14.4268C11.9167 55.812 9.50566 54.6235 7.97672 52.6327L1.23949 43.8597C1.01227 43.5638 0.890039 43.2007 0.892266 42.8277L0.930703 36.1608C0.936094 35.2375 1.68621 34.492 2.60918 34.492C2.6107 34.492 2.61199 34.492 2.61352 34.492C4.60535 34.4972 7.46121 34.5061 9.75516 34.5201C10.7673 34.5261 11.6244 34.5328 12.2307 34.5403C13.5202 34.5561 13.8667 34.5602 14.3619 35.0544L24.24 44.9325C25.3812 46.0737 27.2379 46.0737 28.3791 44.9325L28.3939 44.9176C29.535 43.7766 29.535 41.9197 28.3939 40.7786L19.157 31.6895C18.0497 30.5999 16.5843 29.9998 15.0309 29.9998H1.67848C0.751406 29.9999 0 29.2485 0 28.3214C0 27.3945 0.751406 26.6429 1.67848 26.6429H15.0308C17.4709 26.6429 19.7725 27.5854 21.5114 29.2969L30.7577 38.3953C33.2173 40.8549 33.2173 44.8412 30.7675 47.2913L30.7527 47.306C28.3025 49.7561 24.3162 49.7561 21.8662 47.306L12.4603 37.9001C11.4014 37.885 8.87262 37.8675 4.27793 37.8535L4.25238 42.2714L10.639 50.5879C11.5368 51.7569 12.9527 52.455 14.4267 52.455H53.5834C55.1972 52.455 56.5103 51.1422 56.5103 49.5281V49.5072C56.5103 47.8934 55.1974 46.5803 53.5834 46.5803H37.3835C36.4566 46.5803 35.705 45.8289 35.705 44.9018C35.705 43.9747 36.4564 43.2233 37.3835 43.2233H53.5833C57.048 43.2233 59.867 46.0422 59.867 49.507V49.528C59.8672 52.9931 57.0483 55.812 53.5835 55.812Z" fill="#003B4A"/>
                                                <path className="secondary" d="M42.6089 37.2899C51.2863 37.2899 58.3208 30.2555 58.3208 21.578C58.3208 12.9006 51.2863 5.86609 42.6089 5.86609C33.9314 5.86609 26.897 12.9006 26.897 21.578C26.897 30.2555 33.9314 37.2899 42.6089 37.2899Z" fill="#F7CF47"/>
                                                <path d="M42.6097 38.9689C33.0206 38.9689 25.2192 31.1677 25.2192 21.5784C25.2192 11.9893 33.0204 4.18811 42.6097 4.18811C52.1989 4.18811 60 11.9893 60 21.5784C60.0003 31.1677 52.1989 38.9689 42.6097 38.9689ZM42.6097 7.54495C34.8716 7.54495 28.5762 13.8403 28.5762 21.5784C28.5762 29.3165 34.8717 35.6119 42.6097 35.6119C50.3478 35.6119 56.6432 29.3164 56.6432 21.5784C56.6432 13.8404 50.3479 7.54495 42.6097 7.54495Z" fill="#003B4A"/>
                                                <path d="M41.9634 29.991C39.1437 29.897 36.8408 28.4401 36.8408 26.9363C36.8408 26.1373 37.5458 24.9625 38.4387 24.9625C39.4256 24.9625 40.2245 26.3489 41.9634 26.6543V22.8476C39.8016 22.0252 37.2638 21.0148 37.2638 18.0069C37.2638 15.0226 39.4726 13.5893 41.9634 13.2369V12.579C41.9634 12.2501 42.3394 11.9446 42.8564 11.9446C43.3029 11.9446 43.7494 12.2501 43.7494 12.579V13.1665C45.2063 13.2135 47.9556 13.5894 47.9556 15.2108C47.9556 15.8453 47.5327 17.1376 46.4987 17.1376C45.7233 17.1376 45.2768 16.3856 43.7494 16.2682V19.699C45.8877 20.498 48.3785 21.6024 48.3785 24.7746C48.3785 27.6884 46.4987 29.4508 43.7494 29.8972V30.5787C43.7494 30.9076 43.3029 31.2131 42.8564 31.2131C42.3395 31.2131 41.9634 30.9076 41.9634 30.5787V29.991ZM42.1984 19.1349V16.3385C41.141 16.55 40.6945 17.0905 40.6945 17.6544C40.6945 18.3359 41.3055 18.7589 42.1984 19.1349ZM43.5143 23.482V26.6308C44.3133 26.4428 44.9477 25.9963 44.9477 25.1503C44.9477 24.3749 44.3603 23.8814 43.5143 23.482Z" fill="#003B4A"/>
                                          
                                            </svg>
                                            </a>
                                        </div>
                                        <div className="border-t border-dashed border-gray-300 my-4"></div>
                                        <p className="text-gray-800">Withdraw Funds Without Hassle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
                {/* <!-- service -->
                <!-- Fundraiser Steps --> */}
                <section className="content-inner-1 section-wrapper3">
                  
                    <div className="section-wrapper3 relative">
                        <div className="container mx-auto max-w-4xl">
                            <div className="text-center mb-10 wow fadeInUp" data-wow-delay="0.2s">
                                <h6 className="text-lg font-semibold text-gray-800">START YOUR FUNDRAISER</h6>
                                <h2 className="text-3xl font-bold text-gray-900">Start A Fundraiser In Three<br/>Simple Steps</h2>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className=" p-6 text-center">
                                        <div className="relative p-4 mb-2 text-center inline-block leading-none">
                                            <div className="relative border-2 border-dashed border-secondary flex p-6 rounded-full w-30 h-30 items-center justify-center mx-auto">
  
                                            <a href="#" className="block mx-auto w-16 h-16">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" >
                                                    <g clip-path="url(#clip0_544_431)">
                                                        <path d="M35.0468 53.0372C34.1331 53.0372 33.3921 52.2964 33.3921 51.3826V40.0967C33.3921 37.9721 34.2129 35.9678 35.703 34.4535L43.3936 26.6382C44.4507 25.581 45.8437 25.004 47.3255 25.004C48.8073 25.004 50.2002 25.581 51.2479 26.6288L51.2567 26.6376C52.3083 27.689 52.8853 29.0821 52.8853 30.5638C52.8853 32.0457 52.3085 33.4386 51.2607 34.4863L43.3782 42.3688C43.3659 43.2915 43.3522 45.3431 43.3406 48.951L46.7584 48.9708L53.7237 43.6218C54.6541 42.9074 55.2094 41.7807 55.2094 40.6074V8.99983C55.2094 7.76596 54.2056 6.76201 52.9717 6.76201H52.954C51.7201 6.76201 50.7162 7.76596 50.7162 8.99983V21.2033C50.7162 22.1172 49.9752 22.8579 49.0615 22.8579C48.1478 22.8579 47.4068 22.1171 47.4068 21.2033V8.99983C47.4068 5.94111 49.8953 3.45264 52.954 3.45264H52.9717C56.0304 3.45264 58.5187 5.94111 58.5187 8.99983V40.6072C58.5187 42.8019 57.4797 44.9097 55.7392 46.2463L48.324 51.9408C48.0324 52.1649 47.6747 52.2877 47.3067 52.2831L41.6716 52.2506C40.7597 52.2453 40.0241 51.5033 40.0265 50.5915C40.0321 48.4876 40.0399 46.2598 40.0503 44.5545C40.0555 43.6983 40.0611 42.9734 40.0676 42.4606C40.0812 41.3538 40.0856 40.9808 40.5724 40.494L48.9205 32.1459C49.3433 31.7233 49.5759 31.1614 49.5759 30.5635C49.5759 29.9656 49.3433 29.4039 48.9205 28.9811L48.9117 28.9723C48.4851 28.5459 47.9232 28.3131 47.3255 28.3131C46.7277 28.3131 46.1659 28.546 45.7431 28.9686L38.0619 36.7744C37.1846 37.666 36.7013 38.8458 36.7013 40.0966V51.3824C36.7015 52.2965 35.9607 53.0372 35.0468 53.0372Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M48.3123 49.3547H35.0747V58.3448H48.3123V49.3547Z" fill="#F7CF47" className="primary"></path>
                                                        <path d="M48.3125 60H35.0746C34.1609 60 33.4199 59.2591 33.4199 58.3453V49.3555C33.4199 48.4415 34.1609 47.7008 35.0746 47.7008H48.3123C49.2261 47.7008 49.967 48.4417 49.967 49.3555V58.3453C49.9671 59.259 49.2263 60 48.3125 60ZM36.7293 56.6906H46.6577V51.0102H36.7293V56.6906Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M24.9531 53.0372C24.0394 53.0372 23.2985 52.2964 23.2985 51.3826V40.0967C23.2985 38.846 22.8153 37.6661 21.9379 36.7747L14.2474 28.9592C13.834 28.546 13.2721 28.3131 12.6744 28.3131C12.0767 28.3131 11.5148 28.546 11.092 28.9686L11.0754 28.985C10.6566 29.4039 10.4238 29.9658 10.4238 30.5636C10.4238 31.1613 10.6564 31.7232 11.0792 32.146L19.4273 40.4941C19.914 40.9809 19.9185 41.3537 19.9321 42.4607C19.9385 42.9735 19.9441 43.6985 19.9494 44.5546C19.9598 46.2599 19.9675 48.4877 19.9731 50.5917C19.9756 51.5036 19.2398 52.2454 18.3281 52.2507L12.693 52.2833C12.6898 52.2833 12.6867 52.2833 12.6834 52.2833C12.319 52.2833 11.9648 52.163 11.6754 51.941L4.26053 46.2463C2.51994 44.9098 1.48096 42.802 1.48096 40.6073V8.99982C1.48096 5.94111 3.96932 3.45264 7.02803 3.45264H7.04572C10.1044 3.45264 12.5929 5.94111 12.5929 8.99982V21.2033C12.5929 22.1172 11.8519 22.8579 10.9382 22.8579C10.0245 22.8579 9.28354 22.1171 9.28354 21.2033V8.99982C9.28354 7.76596 8.27959 6.76201 7.04572 6.76201H7.02803C5.79416 6.76201 4.79033 7.76596 4.79033 8.99982V40.6072C4.79033 41.7802 5.34568 42.9071 6.27604 43.6213L13.2413 48.9705L16.6591 48.9507C16.6477 45.3426 16.6339 43.2911 16.6215 42.3685L8.73943 34.4859C7.69166 33.4381 7.11486 32.0452 7.11486 30.5634C7.11486 29.0815 7.69166 27.6887 8.73943 26.6409L8.75596 26.6247C9.79986 25.5808 11.1929 25.0038 12.6746 25.0038C14.1563 25.0038 15.5493 25.5808 16.5971 26.6286L24.2969 34.4535C25.7872 35.9679 26.6078 37.9721 26.6078 40.0967V51.3826C26.6078 52.2965 25.8671 53.0372 24.9531 53.0372Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M24.9246 49.3547H11.687V58.3448H24.9246V49.3547Z" fill="#F7CF47" className="primary"></path>
                                                        <path d="M24.9251 60H11.6874C10.7737 60 10.0327 59.2591 10.0327 58.3453V49.3555C10.0327 48.4415 10.7737 47.7008 11.6874 47.7008H24.9251C25.8388 47.7008 26.5798 48.4417 26.5798 49.3555V58.3453C26.5798 59.259 25.8391 60 24.9251 60ZM13.3421 56.6906H23.2705V51.0102H13.3421V56.6906Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M29.9996 27.9479C37.2602 27.9479 43.1462 22.062 43.1462 14.8013C43.1462 7.5407 37.2602 1.65479 29.9996 1.65479C22.7389 1.65479 16.853 7.5407 16.853 14.8013C16.853 22.062 22.7389 27.9479 29.9996 27.9479Z" fill="red" className="primary"></path>
                                                        <path d="M29.9998 29.6021C26.0462 29.6021 22.3294 28.0627 19.5337 25.267C13.7628 19.4963 13.7628 10.1061 19.5337 4.33523C22.3294 1.53949 26.0463 0 29.9998 0C33.9532 0 37.6701 1.53949 40.4658 4.33512C46.2367 10.106 46.2367 19.4961 40.4658 25.2671C37.6704 28.0625 33.9533 29.6021 29.9998 29.6021ZM29.9998 3.30938C26.9301 3.30938 24.0445 4.50469 21.874 6.67523C17.3934 11.156 17.3934 18.4465 21.874 22.927C24.0444 25.0975 26.9303 26.2929 29.9998 26.2929C33.0692 26.2929 35.955 25.0976 38.1255 22.927C42.6061 18.4465 42.6061 11.156 38.1255 6.67523C35.9552 4.50481 33.0695 3.30938 29.9998 3.30938Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M26.2095 29.0457C26.1616 29.0457 26.1132 29.0437 26.0644 29.0393C25.154 28.9602 24.48 28.1581 24.559 27.2477L24.9469 22.7821C25.1036 20.9792 25.9455 19.3367 27.3176 18.1568L28.237 17.3665C30.2036 15.6757 32.9174 15.2323 35.3199 16.2092L36.738 16.7859C36.7496 16.7907 36.7613 16.7955 36.7729 16.8006L42.3837 19.2337C43.222 19.5972 43.6071 20.5717 43.2435 21.4101C42.8798 22.2483 41.9055 22.6339 41.0671 22.2699L35.4735 19.8445L34.073 19.2749C32.8252 18.7673 31.4157 18.9978 30.3946 19.8759L29.4753 20.6663C28.7625 21.2791 28.3254 22.1321 28.2442 23.0684L27.8563 27.5338C27.7811 28.3957 27.0585 29.0457 26.2095 29.0457Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M17.1479 19.2306C16.4681 19.2306 15.8309 18.8085 15.5893 18.1314C15.2824 17.2706 15.7311 16.324 16.5918 16.0169L24.216 13.2969C24.3063 13.2648 24.3514 13.2006 24.3734 13.1524C24.3954 13.1042 24.4143 13.0283 24.3797 12.9389L23.3123 10.1855C22.9135 9.15608 23.0166 7.97788 23.5883 7.03393L26.8039 1.72206C27.277 0.940415 28.2944 0.69022 29.0763 1.16342C29.8581 1.63663 30.1081 2.65417 29.6349 3.43581L26.4192 8.74792C26.3753 8.82034 26.3674 8.91057 26.3979 8.98932L27.4654 11.7428C27.818 12.6525 27.7886 13.642 27.3827 14.5292C26.9767 15.4165 26.247 16.0858 25.3281 16.4137L17.7038 19.1338C17.5202 19.1995 17.3325 19.2306 17.1479 19.2306Z" fill="#003B4A" className="secondary"></path>
                                                        <path d="M31.2009 14.926C31.1169 14.926 31.0319 14.9195 30.9463 14.9063C30.0431 14.7669 29.4241 13.9216 29.5636 13.0184L29.872 11.0211C30.1592 9.16037 31.4275 7.57963 33.1818 6.8956L39.2571 4.52642C40.1086 4.1942 41.0679 4.6156 41.3997 5.46697C41.7318 6.31845 41.3107 7.27775 40.4592 7.60986L34.384 9.97892C33.7258 10.2356 33.2502 10.8284 33.1425 11.5264L32.834 13.5237C32.7079 14.3412 32.0033 14.926 31.2009 14.926Z" fill="#003B4A" className="secondary"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_544_431">
                                                            <rect width="60" height="60" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                            
                                            <div className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">01</div>
                                        </div>
                                        </div>
                                        <h5 className="text-lg font-semibold text-gray-900">Share your fundraiser</h5>
                                        <p className="text-gray-600">It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className=" p-6 text-center">
                                        <div className="relative p-4 mb-2 text-center inline-block leading-none">
                                            <div className="relative border-2 border-dashed border-secondary flex p-6 rounded-full w-30 h-30 items-center justify-center mx-auto">
  
                                            <a href="#" className="block mx-auto w-16 h-16">
                                                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" >
                                                    <path d="M59.4512 32.9759C53.2245 32.9759 48.1587 27.9101 48.1587 21.6832C48.1587 15.4565 53.2245 10.3907 59.4512 10.3907C65.6781 10.3907 70.7438 15.4565 70.7438 21.6832C70.7438 22.9603 69.7082 23.9959 68.4312 23.9959C67.1542 23.9959 66.1185 22.9603 66.1185 21.6832C66.1185 18.007 63.1274 15.0162 59.4512 15.0162C55.7749 15.0162 52.7842 18.0072 52.7842 21.6832C52.7842 25.3595 55.7751 28.3506 59.4512 28.3506C60.7282 28.3506 61.7638 29.3862 61.7638 30.6632C61.7638 31.9403 60.7284 32.9759 59.4512 32.9759Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M63.0439 74.7086H58.1832C54.37 74.7086 51.178 71.8508 50.7585 68.0608L48.3236 46.0836C48.2513 45.4298 48.4605 44.7762 48.8992 44.2864C49.3377 43.7964 49.9644 43.5162 50.6222 43.5162H68.2807C69.5577 43.5162 70.5933 44.5519 70.5933 45.8289C70.5933 47.1059 69.5577 48.1415 68.2807 48.1415H53.2053L55.356 67.5515C55.5155 68.9948 56.7311 70.0833 58.1835 70.0833H63.0442C64.3213 70.0833 65.3569 71.1189 65.3569 72.3959C65.3569 73.673 64.3211 74.7086 63.0439 74.7086Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M70.078 55.741H48.8247V35.3141C48.8247 32.6908 50.9514 30.5641 53.5747 30.5641H65.3281C67.9514 30.5641 70.0781 32.6908 70.0781 35.3141V55.741H70.078Z" fill="#F7CF47" className="primary"></path>
                                                    <path d="M70.0781 58.0536H48.8249C47.5478 58.0536 46.5122 57.0179 46.5122 55.7409V35.314C46.5122 31.4197 49.6806 28.2512 53.575 28.2512H65.3281C69.2225 28.2512 72.391 31.4197 72.391 35.314V55.7409C72.3908 57.0182 71.3552 58.0536 70.0781 58.0536ZM51.1374 53.4283H67.7652V35.314C67.7652 33.97 66.6717 32.8767 65.3278 32.8767H53.5747C52.2305 32.8767 51.1374 33.9701 51.1374 35.314V53.4283Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M24.1412 74.7086H19.2805C15.4675 74.7086 12.2755 71.8508 11.8555 68.0609L9.42078 46.0836C9.34843 45.4298 9.55797 44.7762 9.9964 44.2861C10.4352 43.7962 11.0616 43.5162 11.7194 43.5162H29.3778C30.6548 43.5162 31.6905 44.5519 31.6905 45.8289C31.6905 47.1059 30.6548 48.1415 29.3778 48.1415H14.3025L16.4528 67.5519C16.6127 68.995 17.8281 70.0834 19.2806 70.0834H24.1414C25.4184 70.0834 26.4541 71.119 26.4541 72.3961C26.4541 73.6731 25.4183 74.7086 24.1412 74.7086Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M31.1755 55.741H9.92188V35.3141C9.92188 32.6908 12.0486 30.5641 14.6719 30.5641H26.4253C29.0486 30.5641 31.1753 32.6908 31.1753 35.3141V55.741H31.1755Z" fill="#F7CF47" className="primary"></path>
                                                    <path d="M31.1756 58.0536H9.92203C8.645 58.0536 7.60938 57.0179 7.60938 55.7409V35.314C7.60938 31.4197 10.7778 28.2512 14.6722 28.2512H26.4253C30.3197 28.2512 33.4881 31.4197 33.4881 35.314V55.7409C33.4883 57.0182 32.4527 58.0536 31.1756 58.0536ZM12.2348 53.4283H28.8627V35.314C28.8627 33.97 27.7692 32.8767 26.4253 32.8767H14.6722C13.328 32.8767 12.2348 33.9701 12.2348 35.314V53.4283Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M20.549 32.9759C14.3221 32.9759 9.25635 27.9101 9.25635 21.6832C9.25635 15.4565 14.3221 10.3907 20.549 10.3907C26.7757 10.3907 31.8415 15.4565 31.8415 21.6832C31.8415 27.9101 26.7756 32.9759 20.549 32.9759ZM20.549 15.0161C16.8728 15.0161 13.8817 18.007 13.8817 21.6831C13.8817 25.3593 16.8728 28.3504 20.549 28.3504C24.2253 28.3504 27.216 25.3593 27.216 21.6831C27.216 18.0068 24.2251 15.0161 20.549 15.0161Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M44.7559 79.9999H37.5685C33.3321 79.9999 29.7859 76.8247 29.3193 72.6141L26.0131 42.7719C25.9407 42.1182 26.15 41.4646 26.5887 40.9747C27.0271 40.4847 27.6539 40.2046 28.3117 40.2046H51.6879C52.965 40.2046 54.0006 41.2402 54.0006 42.5172C54.0006 43.7943 52.965 44.8299 51.6879 44.8299H30.8948L33.9165 72.1049C34.1231 73.9691 35.6929 75.3746 37.5682 75.3746H44.7556C46.0326 75.3746 47.0682 76.4102 47.0682 77.6873C47.0682 78.9643 46.0332 79.9999 44.7559 79.9999Z" fill="#003B4A"></path>
                                                    <path d="M54.0674 55.7144H25.9321V31.9661C25.9321 28.4933 28.7474 25.6779 32.2204 25.6779H47.7796C51.2524 25.6779 54.0679 28.4932 54.0679 31.9661V55.7143H54.0674V55.7144Z" fill="red" className="primary"></path>
                                                    <path d="M54.0676 58.027H25.9323C24.6553 58.027 23.6196 56.9914 23.6196 55.7144V31.9661C23.6196 27.2236 27.4781 23.3655 32.2203 23.3655H47.7795C52.522 23.3655 56.3801 27.2239 56.3801 31.9661V55.7145C56.3804 56.9917 55.3449 58.027 54.0676 58.027ZM28.2449 53.4016H51.7549V31.9661C51.7549 29.7739 49.9717 27.9908 47.7796 27.9908H32.2204C30.0282 27.9908 28.2451 29.7741 28.2451 31.9661V53.4016H28.2449Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M39.9999 27.8427C32.3238 27.8427 26.0786 21.5975 26.0786 13.9214C26.0786 6.24531 32.3238 0 39.9999 0C47.676 0 53.9211 6.245 53.9211 13.9211C53.9211 21.5972 47.676 27.8427 39.9999 27.8427ZM39.9999 4.62547C34.8739 4.62547 30.7039 8.79547 30.7039 13.9211C30.7039 19.047 34.8739 23.217 39.9999 23.217C45.1258 23.217 49.2958 19.047 49.2958 13.9211C49.2958 8.79547 45.1258 4.62547 39.9999 4.62547Z" fill="#003B4A" className="secondary"></path>
                                              
                                                </svg>
                                            </a>
                                          
                                            <div className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">02</div>
                                        </div>
                                        </div>
                                        <h5 className="text-lg font-semibold text-gray-900">Start your fundraiser</h5>
                                        <p className="text-gray-600">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className=" p-6 text-center">
                                        <div className="relative p-4 mb-2 text-center inline-block leading-none">
                                            <div className="relative border-2 border-dashed border-secondary flex p-6 rounded-full w-30 h-30 items-center justify-center mx-auto">
  
                                            <a href="#" className="block mx-auto w-16 h-16">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" >
                                                    <path d="M53.5837 55.8119H14.4269C11.9167 55.8119 9.50569 54.6234 7.97674 52.6326L1.2395 43.8596C1.01227 43.5637 0.890041 43.2006 0.892268 42.8276L0.930706 36.1607C0.936096 35.2374 1.68622 34.4919 2.60919 34.4919C2.61071 34.4919 2.612 34.4919 2.61352 34.4919C4.60536 34.4971 7.46123 34.506 9.75518 34.5199C10.7673 34.526 11.6244 34.5327 12.2308 34.5402C13.5202 34.556 13.8667 34.5601 14.362 35.0543L24.2401 44.9324C25.3812 46.0736 27.238 46.0736 28.3791 44.9324L28.394 44.9175C29.5351 43.7765 29.5351 41.9197 28.394 40.7785L19.157 31.6894C18.0497 30.5998 16.5843 29.9997 15.031 29.9997H1.67848C0.751408 29.9998 0 29.2484 0 28.3213C0 27.3943 0.751408 26.6428 1.67848 26.6428H15.0309C17.4709 26.6428 19.7725 27.5852 21.5115 29.2968L30.7578 38.3952C33.2174 40.8548 33.2174 44.8411 30.7675 47.2912L30.7528 47.306C28.3026 49.756 24.3162 49.756 21.8663 47.306L12.4603 37.9C11.4014 37.8849 8.87264 37.8674 4.27794 37.8534L4.25239 42.2713L10.639 50.5878C11.5368 51.7569 12.9528 52.4549 14.4268 52.4549H53.5835C55.1973 52.4549 56.5104 51.1421 56.5104 49.5281V49.5071C56.5104 47.8933 55.1976 46.5802 53.5835 46.5802H37.3836C36.4567 46.5802 35.7051 45.8288 35.7051 44.9017C35.7051 43.9747 36.4565 43.2232 37.3836 43.2232H53.5834C57.0482 43.2232 59.8671 46.0421 59.8671 49.507V49.5279C59.8674 52.9931 57.0484 55.8119 53.5837 55.8119Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M42.6089 37.29C51.2864 37.29 58.3208 30.2555 58.3208 21.578C58.3208 12.9006 51.2864 5.86609 42.6089 5.86609C33.9314 5.86609 26.897 12.9006 26.897 21.578C26.897 30.2555 33.9314 37.29 42.6089 37.29Z" fill="#F7CF47" className="primary"></path>
                                                    <path d="M42.6098 38.969C33.0207 38.969 25.2192 31.1678 25.2192 21.5784C25.2192 11.9893 33.0204 4.18811 42.6098 4.18811C52.1989 4.18811 60.0001 11.9893 60.0001 21.5784C60.0003 31.1678 52.1989 38.969 42.6098 38.969ZM42.6098 7.54495C34.8716 7.54495 28.5762 13.8403 28.5762 21.5784C28.5762 29.3166 34.8718 35.612 42.6098 35.612C50.3478 35.612 56.6432 29.3164 56.6432 21.5784C56.6432 13.8404 50.3479 7.54495 42.6098 7.54495Z" fill="#003B4A" className="secondary"></path>
                                                    <path d="M41.9635 29.991C39.1437 29.8971 36.8408 28.4402 36.8408 26.9363C36.8408 26.1373 37.5458 24.9625 38.4387 24.9625C39.4256 24.9625 40.2245 26.349 41.9635 26.6543V22.8476C39.8016 22.0252 37.2638 21.0148 37.2638 18.0069C37.2638 15.0226 39.4726 13.5893 41.9635 13.2369V12.579C41.9635 12.2501 42.3394 11.9446 42.8564 11.9446C43.3029 11.9446 43.7494 12.2501 43.7494 12.579V13.1665C45.2063 13.2135 47.9556 13.5894 47.9556 15.2108C47.9556 15.8453 47.5327 17.1376 46.4987 17.1376C45.7233 17.1376 45.2768 16.3856 43.7494 16.2682V19.699C45.8877 20.498 48.3785 21.6024 48.3785 24.7747C48.3785 27.6884 46.4987 29.4508 43.7494 29.8973V30.5787C43.7494 30.9077 43.3029 31.2132 42.8564 31.2132C42.3395 31.2132 41.9635 30.9077 41.9635 30.5787V29.991ZM42.1984 19.1349V16.3385C41.141 16.5501 40.6945 17.0905 40.6945 17.6544C40.6945 18.3359 41.3056 18.7589 42.1984 19.1349ZM43.5143 23.4821V26.6308C44.3133 26.4428 44.9478 25.9963 44.9478 25.1504C44.9478 24.3749 44.3603 23.8814 43.5143 23.4821Z" fill="#003B4A" className="secondary"></path>
                                           
                                                </svg>
                                            </a>
                                            
                                            <div className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center">03</div>
                                        </div>
                                        </div>
                                        <h5 className="text-lg font-semibold text-gray-900">Withdraw Funds</h5>
                                        <p className="text-gray-600">The funds raised can be withdrawn without any hassle directly to your bank account.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4 wow fadeInUp" data-wow-delay="0.8s">
                                <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Start your fundraiser</a>
                            </div>
                        </div>
                        <img src="/images/pic1.png" className="img-1"/>
                        <svg className="img-2" width="345" height="466" viewBox="0 0 345 466" fill="none" >
                            <path d="M262.501 40.6868L271.004 4.93595C271.493 2.87988 273.898 1.96049 275.634 3.16598L311.982 28.408C314.116 29.8902 313.485 33.2002 310.955 33.793L266.104 44.3019C263.933 44.8106 261.985 42.8565 262.501 40.6868Z" fill="var(--secondary)"/>
                            <path d="M260 20.0002C202.667 8.66685 91.4001 7.40018 105 93.0002C122 200 217 215 288 255C359 295 350 340 322 384C294 428 184 500 -28 442" stroke="var(--secondary)" stroke-width="3" stroke-dasharray="10 10"/>
                       
                        </svg>
                        </div>
                </section>
                {/* <!-- Fundraiser Steps -->
                <!-- Online Courses --> */}
                <section className="clearfix section-wrapper7">
                   
                <div className="container mx-auto bg-gray-100 py-10" style={{   backgroundImage: "url('/images/bg10.png')",   backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',   backgroundPosition: 'center' }}>
                        <div className="text-center mb-10">
                            <h5 className="text-lg font-semibold text-gray-700">LATEST CAUSES</h5>
                            <h2 className="text-4xl font-bold text-gray-900">Trending Fundraisers</h2>
                        </div>
                        <div className="swiper latest-causes">
                            <div className="flex flex-wrap justify-center gap-10 px-8">
                    
                       
                                <div className="swiper-slide bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <div className="overflow-hidden">
                                        <a href="#">
                                            <img className="w-full h-64 object-cover object-center" src="/images/pic1.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <ul className="flex space-x-3 mb-4">
                                            <li>
                                                <a href="javascript:void(0);" className="text-blue-600">EDUCATION</a>
                                            </li>
                                        </ul>
                                        <h4 className="text-xl font-semibold mb-2">
                                            <a href="#" className="text-gray-900">He Created the Web. Now He’s Out to Remake</a>
                                        </h4>
                                        <ul className="flex items-center justify-between text-gray-600 text-sm mb-4">
                                            <li className="flex items-center">
                                                {/* <!-- <img className="w-6 h-6 rounded-full mr-2" src="/images/avatar1.jpg" alt=""> --> */}
                                                <span>Adam Jordon</span>
                                            </li>
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-calendar mr-1"></i>
                                                <span>45 Days left</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mb-4">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..</p>
                                        <div className="mb-4">
                                            <div className="bg-gray-200 rounded-full overflow-hidden h-4">
                                                <div className="bg-blue-600 text-white text-center text-sm py-1 rounded-full" style={{width:'50%'}}>50%</div>
                                            </div>
                                        </div>
                                        <ul className="flex justify-between text-gray-700">
                                            <li>
                                                <p>Raised: <span className="text-blue-600">$ 5,345</span></p>
                                            </li>
                                            <li>
                                                <p>Goal: <span className="text-blue-600">$70,000</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <div className="overflow-hidden">
                                        <a href="#">
                                            <img className="w-full h-64 object-cover object-center" src="/images/pic2.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <ul className="flex space-x-3 mb-4">
                                            <li>
                                                <a href="javascript:void(0);" className="text-blue-600">HEALTH</a>
                                            </li>
                                        </ul>
                                        <h4 className="text-xl font-semibold mb-2">
                                            <a href="#" className="text-gray-900">Online legal advice for asylum seekers in Greece</a>
                                        </h4>
                                        <ul className="flex items-center justify-between text-gray-600 text-sm mb-4">
                                            <li className="flex items-center">
                                                {/* <!-- <img className="w-6 h-6 rounded-full mr-2" src="/images/avatar2.jpg" alt=""> --> */}
                                                <span>KK Sharma</span>
                                            </li>
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-calendar mr-1"></i>
                                                <span>45 Days left</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mb-4">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..</p>
                                        <div className="mb-4">
                                            <div className="bg-gray-200 rounded-full overflow-hidden h-4">
                                                <div className="bg-blue-600 text-white text-center text-sm py-1 rounded-full" style={{width:'80%'}}>80%</div>
                                            </div>
                                        </div>
                                        <ul className="flex justify-between text-gray-700">
                                            <li>
                                                <p>Raised: <span className="text-blue-600">$ 5,345</span></p>
                                            </li>
                                            <li>
                                                <p>Goal: <span className="text-blue-600">$70,000</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                

                               
                                <div className="swiper-slide2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <div className="overflow-hidden">
                                        <a href="#">
                                            <img className="w-full h-64 object-cover object-center" src="/images/pic4.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="p-6">
                                        <ul className="dz-category">
                                            <li>
                                                <a href="javascript:void(0);" className="text-blue-600">EDUCATION</a>
                                            </li>
                                        </ul>
                                        <h4 className="dz-title text-xl font-semibold mb-2">
                                            <a href="#" className="text-gray-900">He Created the Web. Now He’s Out to Remake</a>
                                        </h4>
                                        <ul className="dz-meta flex items-center justify-between text-gray-600 text-sm mb-4">
                                            <li className="author-wrappper author-wrappper-sm mt-0 flex items-center">
                                                <div className="author-media">
                                                    <img src="/images/avatar1.jpg" alt="" className="w-6 h-6 rounded-full mr-2"/>
                                                    <span>Adam Jordon</span>
                                                </div>
                                            </li>
                                            <li className="dz-date flex items-center">
                                                <i className="fa-solid fa-calendar mr-1"></i>
                                                <span>45 Days left</span>
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mb-4">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex..</p>
                                        <div className="progress-bx style-2 mb-4">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                                                    <span className="progress-value">80%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="progress-tag flex justify-between text-gray-700">
                                            <li className="raised">
                                                <p>Raised: <span className="text-blue-600">$ 5,345</span></p>
                                            </li>
                                            <li className="goal">
                                                <p>Goal: <span className="text-blue-600">$70,000</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 




                    
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <a className="btn btn-primary" href="#">View All Causes</a>
                        </div>
                    </div>
                    
                </section>
                
                {/* <!-- Online Courses End -->
                <!-- Testimonials --> */}
                <section className="content-inner testimonial-wrapper2 bg-center bg-cover" style= {{backgroundImage: "url('/images/bg10.jpg')"}}>
                    <div className="container">
                        <div className="section-head text-center">
                            <h5 className="sub-title">What people are saying</h5>
                            <h2 className="title">Success Stories</h2>
                        </div>
                    </div>
                    <div className="min-container relative">
                        <input type="radio" name="slider" id="slide1" checked className="hidden"/>
                        <input type="radio" name="slider" id="slide2" className="hidden"/>
                        <input type="radio" name="slider" id="slide3" className="hidden"/>
                
                        <div className="testimonial-slider">
                            <div className="testimonial-slide">
                                <div className="testimonial-2">
                                    <div className="testimonial-media">
                                        <img src="/images/pic4.jpg" alt="" className="rounded-full w-24 h-24"/>
                                    </div>
                                    <div className="testimonial-content bg-white p-8 rounded-lg shadow-md">
                                        <h5 className="testimonial-title text-xl font-semibold mb-4">Heroes like you helped my son win his battle.</h5>
                                        <p className="testimonial-text text-dark">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#read" className="text-blue-500">Read More</a>
                                        </p>
                                        <div className="testimonial-info mt-6">
                                            <div className="flex items-center">
                                                <div className="quotes text-3xl text-gray-400">
                                                    <i className="fa-solid fa-quote-left"></i>
                                                </div>
                                                <div className="ml-4">
                                                    <h5 className="testimonial-name text-lg font-semibold">Lindsay S.</h5>
                                                    <span className="testimonial-position text-sm text-gray-600">Community Engagement</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-2">
                                    <div className="testimonial-media">
                                        <img src="/images/pic5.jpg" alt="" className="rounded-full w-24 h-24"/>
                                    </div>
                                    <div className="testimonial-content bg-white p-8 rounded-lg shadow-md">
                                        <h5 className="testimonial-title text-xl font-semibold mb-4">Heroes like you helped my son win his battle.</h5>
                                        <p className="testimonial-text text-dark">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#read" className="text-blue-500">Read More</a>
                                        </p>
                                        <div className="testimonial-info mt-6">
                                            <div className="flex items-center">
                                                <div className="quotes text-3xl text-gray-400">
                                                    <i className="fa-solid fa-quote-left"></i>
                                                </div>
                                                <div className="ml-4">
                                                    <h5 className="testimonial-name text-lg font-semibold">Lindsay S.</h5>
                                                    <span className="testimonial-position text-sm text-gray-600">Community Engagement</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-2">
                                    <div className="testimonial-media">
                                        <img src="/images/pic6.jpg" alt="" className="rounded-full w-24 h-24"/>
                                    </div>
                                    <div className="testimonial-content bg-white p-8 rounded-lg shadow-md">
                                        <h5 className="testimonial-title text-xl font-semibold mb-4">Heroes like you helped my son win his battle.</h5>
                                        <p className="testimonial-text text-dark">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
                                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#read" className="text-blue-500">Read More</a>
                                        </p>
                                        <div className="testimonial-info mt-6">
                                            <div className="flex items-center">
                                                <div className="quotes text-3xl text-gray-400">
                                                    <i className="fa-solid fa-quote-left"></i>
                                                </div>
                                                <div className="ml-4">
                                                    <h5 className="testimonial-name text-lg font-semibold">Lindsay S.</h5>
                                                    <span className="testimonial-position text-sm text-gray-600">Community Engagement</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <label for="slide1" className="slider-button left">&lt;</label>
                        <label for="slide2" className="slider-button right">&gt;</label>
                    </div>
                
                    <div className="container text-center mt-10">
                        <a href="#" className="btn btn-secondary mr-15 mb-15">Start A Fundraiser For Free</a>
                        <a href="#" className="btn btn-dark mb-15">Talk To Us</a>
                    </div>
                </section>
              

                <div className="content-inner-3 section-wrapper7 relative">
                    <div className="container relative">
                        <div className="map-wrapper relative">
                            <img src="/images/map.png" className="main-img" alt="Map Image"/>
                            <ul className="absolute top-0 left-0">
                                <li className="icon-dropdown" >
                                    <div className="right p-4" style={{top: '30%', left: '65%'}} >
                                        <p className="text-white">It is 30% poor in the country</p>
                                        <a href="#" className="btn-link text-white bg-primary py-2 px-4 rounded-lg mt-2 inline-block">Donate Now</a>
                                    </div>
                                </li>
                                <li className="icon-dropdown" >
                                    <div className="right p-4" style={{top: '40%', left: '10%'}}>
                                        <p className="text-white">It is 50% poor in the country</p>
                                        <a href="#" className="btn-link text-white bg-primary py-2 px-4 rounded-lg mt-2 inline-block">Donate Now</a>
                                    </div>
                                </li>
                                <li className="icon-dropdown absolute inset-0 flex justify-center items-center">
                                    <div className="p-4 text-center">
                                        <p className="text-white">It is 25% poor in the country</p>
                                        <a href="#" className="btn-link text-white bg-primary py-2 px-4 rounded-lg mt-2 inline-block">Donate Now</a>
                                    </div>
                                </li>
                                {/* <!-- <li className="icon-dropdown">
                                    <div className=" p-4 center" style="top: 50%; left: 5%;">
                                        <p className="text-white">It is 25% poor in the country</p>
                                        <a href="#" className="btn-link text-white bg-primary py-2 px-4 rounded-lg mt-2 inline-block">Donate Now</a>
                                    </div>
                                </li> --> */}
                            </ul>
                        </div>
                        <div className="counter-wrapper-2">
                            <div className="counter-inner">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                    <div className="col-span-1 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="counter-style-2 text-center">
                                            <span className="counter counter-num text-primary">1854</span>
                                            <p className="counter-text">Completed Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="counter-style-2 text-center">
                                            <span className="counter-num text-primary">
                                                <span className="counter">35</span> +
                                            </span>
                                            <p className="counter-text">Countries Served</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="counter-style-2 text-center">
                                            <span className="counter-num text-primary">
                                                <span className="counter">29</span> M
                                            </span>
                                            <p className="counter-text">People With Clean Water</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg className="shape1 absolute top-0 right-0" width="95" height="393" viewBox="0 0 95 393" fill="none" >
                        <path d="M0 153.397C60.3799 138.853 145.825 84.4055 181 59V329.604C43.468 355.895 3.02832 223.087 0 153.397Z" fill="#3b6ff5"/>
                        <path d="M212 2C141.176 133.668 -72.4699 -8.46584 32.4863 169.386C94.8953 275.141 67.5475 371.09 202.884 390" stroke="#3b6ff5" stroke-width="6"/>
                    </svg>
                    <svg className="shape3 absolute bottom-0 left-0" width="117" height="393" viewBox="0 0 117 393" fill="none" >
                        <path d="M96 172.397C35.6201 157.853 -49.825 103.406 -85 78V348.604C52.532 374.895 92.9717 242.087 96 172.397Z" fill="#3b6ff5"/>
                        <path d="M-94 2C-23.1762 133.668 190.47 -8.46584 85.5137 169.386C23.1047 275.141 50.4525 371.09 -84.8841 390" stroke="#3b6ff5" stroke-width="6"/>
                    </svg>
                    <svg className="shape5 absolute bottom-0 right-0 transform translate-x-20 translate-y-20" width="95" height="95" viewBox="0 0 95 95"  fill="none">
                        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
                            <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"/>
                        </mask>
                        <g mask="url(#A)">
                            <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="#3b6ff5" stroke-width="2" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <svg className="shape6 absolute bottom-0 right-0 transform translate-x-12 translate-y-12 rotating"  width="114" height="114" viewBox="0 0 114 114" fill="none">
                        <g opacity="0.2">
                            <rect x="63.3936" y="11.6357" width="15.3997" height="89.934" transform="rotate(18.3505 63.3936 11.6357)" fill="#3b6ff5"/>
                            <rect x="93.6138" y="30.0967" width="15.3997" height="89.934" transform="rotate(63.3505 93.6138 30.0967)" fill="#3b6ff5"/>
                            <rect width="15.3997" height="89.934" transform="matrix(0.314829 -0.949148 -0.949148 -0.314829 96.9966 78.5947)" fill="#3b6ff5"/>
                            <rect width="15.3997" height="89.934" transform="matrix(0.893767 -0.448532 -0.448532 -0.893767 70.1479 100.841)" fill="#3b6ff5"/>
                        </g>
                    </svg>
                    <svg className="shape7 absolute top-0 right-0 transform translate-x-12 translate-y-12 rotating" viewBox="0 0 95 95"  width="95" height="95" fill="none">
                        <mask id="A" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="95" mask-type="alpha">
                            <circle cx="47.5" cy="47.5" r="47" fill="#d9d9d9" stroke="#3b6ff5"/>
                        </mask>
                        <g mask="url(#A)">
                            <path d="M35.044-64.787L-48.721 55.222M85.098-11.882L1.332 108.127M43.387-55.969L-40.379 64.039M93.44-3.064L9.674 116.944M51.729-47.152L-32.037 72.857M101.782 5.753L18.017 125.762M60.071-38.334L-23.695 81.674m133.82-67.103L26.359 134.579M68.414-29.517L-15.352 90.492m133.819-67.104L34.701 143.397M76.755-20.699L-7.01 99.309M39.215-60.378L-44.55 59.631M89.269-7.473L5.503 112.535M47.558-51.56L-36.208 68.448M97.611 1.344L13.846 121.353M55.9-42.743L-27.866 77.266m133.819-67.104L22.187 130.17M64.242-33.925L-19.523 86.083m133.819-67.104L30.53 138.987M72.585-25.108L-11.181 94.9m133.819-67.104L38.872 147.805M80.927-16.291L-2.839 103.718" stroke="#3b6ff5" stroke-width="2" stroke-linecap="round"/>
                        </g>
                    </svg>
                </div>
                
               
                {/* <!-- Map End-->
                <!-- Our Blog  --> */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <!-- Left column (col-xl-7 col-lg-12) --> */}
                            <div className="col-span-1 md:col-span-2">
                                <div className="section-head wow fadeInUp" data-wow-delay="0.2s">
                                    <h5 className="sub-title text-xl text-gray-700">FROM OUR BLOG</h5>
                                    <h2 className="title text-3xl md:text-4xl font-bold text-gray-800">Recent News & Updates</h2>
                                </div>
                                {/* <!-- First blog post --> */}
                                <div className="dz-card style-6 blog-half wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="dz-media">
                                        <a href="#">
                                            <img src="/images/pic1.jpg" alt="Blog Image" className="w-full h-auto object-cover"/>
                                        </a>
                                        <ul className="dz-badge-list">
                                            <li>
                                                <a href="javascript:void(0);" className="dz-badge bg-gray-300 text-gray-700 py-1 px-3 rounded-lg">14 Fan 2022</a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-secondary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 inline-block rounded-lg">Read More</a>
                                    </div>
                                    <div className="dz-info bg-white p-6">
                                        <h4 className="dz-title text-xl font-bold text-gray-800">
                                            <a href="#" className="hover:text-blue-600">Start a fundraiser for yourself in World</a>
                                        </h4>
                                        <div className="dz-meta text-gray-600">
                                            <ul>
                                                <li className="dz-user flex items-center">
                                                    <i className="fa-solid fa-user text-gray-700 mr-2"></i>
                                                    By <span className="font-medium">KK Sharma</span>
                                                </li>
                                                <li className="dz-date flex items-center">
                                                    <i className="fa-solid fa-message text-gray-700 mr-2"></i>
                                                    24 Comments
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700 mt-4">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata.</p>
                                    </div>
                                </div>
                                {/* <!-- Second blog post --> */}
                                <div className="dz-card style-6 blog-half wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="dz-media">
                                        <a href="#">
                                            <img src="/images/pic2.jpg" alt="Blog Image" className="w-full h-auto object-cover"/>
                                        </a>
                                        <ul className="dz-badge-list">
                                            <li>
                                                <a href="javascript:void(0);" className="dz-badge bg-gray-300 text-gray-700 py-1 px-3 rounded-lg">14 Fan 2022</a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-secondary bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 inline-block rounded-lg">Read More</a>
                                    </div>
                                    <div className="dz-info bg-white p-6">
                                        <h4 className="dz-title text-xl font-bold text-gray-800">
                                            <a href="#" className="hover:text-blue-600">Start a fundraiser for yourself in World</a>
                                        </h4>
                                        <div className="dz-meta text-gray-600">
                                            <ul>
                                                <li className="dz-user flex items-center">
                                                    <i className="fa-solid fa-user text-gray-700 mr-2"></i>
                                                    By <span className="font-medium">KK Sharma</span>
                                                </li>
                                                <li className="dz-date flex items-center">
                                                    <i className="fa-solid fa-message text-gray-700 mr-2"></i>
                                                    24 Comments
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-700 mt-4">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Right column (col-xl-5 col-lg-12 m-b30) --> */}
                            <div className="col-span-12 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="dz-card style-7 bg-cover" style={{backgroundImage: "url('/images/pic1.jpg')"}}>
                                    <div className="dz-category">
                                        <ul className="dz-badge-list">
                                            <li>
                                                <a href="javascript:void(0);" className="dz-badge bg-gray-300 text-gray-700 py-1 px-3 rounded-lg">14 Fan 2022</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dz-info bg-white bg-opacity-50 p-6">
                                        <h2 className="dz-title text-3xl font-bold text-white mb-2">
                                            <a href="#" className="hover:text-blue-400">Directly support individuals Charity</a>
                                        </h2>
                                        <div className="dz-meta text-gray-300">
                                            <ul>
                                                <li className="dz-user flex items-center">
                                                    <i className="fa-solid fa-user text-gray-400 mr-2"></i>
                                                    By <span className="font-medium">KK Sharma</span>
                                                </li>
                                                <li className="dz-date flex items-center">
                                                    <i className="fa-solid fa-message text-gray-400 mr-2"></i>
                                                    24 Comments
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
             
               
                <div className="footer-feature-wrapper py-12">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-1/3 p-4 animate-fadeInUp"   style={{ animationDelay: '0.2s' }}>
                                <div className="bg-primary text-center p-8 rounded-lg flex flex-col justify-center">
                                    <div className="inner-content">
                                        <h2 className="title text-white text-3xl font-bold mb-1">Newsletter</h2>
                                        <p className="text-white ">Sign up for our monthly newsletter to get the latest news, volunteer opportunities.</p>
                                        <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div className="dzSubscribeMsg text-white"></div>
                                            <input name="dzEmail" required="required" type="email" className="form-control bg-transparent mb-4 border border-white text-white p-1 rounded-lg" placeholder="Enter your email address"/>
                                            <button name="submit" value="Submit" type="submit" className="btn btn-secondary bg-secondary text-white rounded-lg py-2 px-4">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                <div className="bg-secondary text-center p-8 rounded-lg flex flex-col justify-center">
                                    <div className="inner-content">
                                        <div className="icon-lg mb-5">
                                            <a href="#" className="icon-cell">
                                                <svg width="81" height="66" viewBox="0 0 81 66" fill="none" >

                                                        <path d="M32.8415 39.1484C31.7105 39.1484 30.7937 38.2316 30.7937 37.1006V12.1683C30.7937 11.2084 30.0129 10.4277 29.053 10.4277C28.0932 10.4277 27.3124 11.2084 27.3124 12.1683V37.1009C27.3124 38.2319 26.3955 39.1487 25.2646 39.1487C24.1337 39.1487 23.2168 38.2319 23.2168 37.1009V12.1683C23.2168 8.95016 25.8349 6.33203 29.053 6.33203C32.2712 6.33203 34.8893 8.95016 34.8893 12.1683V37.1009C34.8893 38.2317 33.9724 39.1484 32.8415 39.1484Z" fill="#141818"/>
                                                        <path d="M17.6877 39.1483C16.5567 39.1483 15.6399 38.2314 15.6399 37.1005V10.2738C15.6399 9.31391 14.8591 8.53313 13.8992 8.53313C12.9394 8.53313 12.1586 9.31391 12.1586 10.2738V15.5152C12.1586 16.6461 11.2417 17.563 10.1108 17.563C8.97986 17.563 8.06299 16.6461 8.06299 15.5152V10.2738C8.06299 7.05563 10.6811 4.4375 13.8992 4.4375C17.1174 4.4375 19.7355 7.05563 19.7355 10.2738V37.1008C19.7355 38.2316 18.8186 39.1483 17.6877 39.1483Z" fill="#141818"/>
                                                        <path d="M25.2646 39.1484C24.1336 39.1484 23.2168 38.2315 23.2168 37.1006V6.48493C23.2168 5.52509 22.436 4.74431 21.4761 4.74431C20.5163 4.74431 19.7355 5.52509 19.7355 6.48493V37.1007C19.7355 38.2317 18.8186 39.1485 17.6877 39.1485C16.5568 39.1485 15.6399 38.2317 15.6399 37.1007V6.48493C15.6399 3.26681 18.258 0.648682 21.4761 0.648682C24.6943 0.648682 27.3124 3.26681 27.3124 6.48493V37.1007C27.3124 38.2317 26.3955 39.1484 25.2646 39.1484Z" fill="#141818"/>
                                                        <path d="M11.4736 59.8366C10.7258 59.8366 10.0051 59.4253 9.64452 58.7124C8.8953 57.2307 7.79718 55.9208 6.46874 54.9246C2.72265 52.1146 0.486084 47.6411 0.486084 42.9583V26.5286C0.486084 23.3105 3.10421 20.6924 6.32233 20.6924C9.54046 20.6924 12.1586 23.3105 12.1586 26.5286V35.3958C12.1586 36.5268 11.2417 37.4436 10.1108 37.4436C8.97983 37.4436 8.06296 36.5268 8.06296 35.3958V26.5286C8.06296 25.5688 7.28218 24.788 6.32233 24.788C5.36249 24.788 4.58171 25.5688 4.58171 26.5286V42.9583C4.58171 46.3591 6.20577 49.6077 8.9264 51.6483C10.7555 53.0203 12.2678 54.8241 13.2995 56.8644C13.8098 57.8736 13.4055 59.1055 12.3961 59.6158C12.0998 59.7657 11.7844 59.8366 11.4736 59.8366Z" fill="#141818"/>
                                                        <path d="M40.4184 39.1484C39.2874 39.1484 38.3706 38.2315 38.3706 37.1006V17.8514C38.3706 16.8915 37.5898 16.1108 36.63 16.1108C35.6701 16.1108 34.8893 16.8915 34.8893 17.8514V37.1008C34.8893 38.2317 33.9725 39.1486 32.8415 39.1486C31.7106 39.1486 30.7937 38.2317 30.7937 37.1008V17.8514C30.7937 14.6333 33.4118 12.0151 36.63 12.0151C39.8481 12.0151 42.4662 14.6333 42.4662 17.8514V37.1008C42.466 38.2317 41.5493 39.1484 40.4184 39.1484Z" fill="#141818"/>
                                                        <path d="M55.7077 39.1484C54.5768 39.1484 53.6599 38.2316 53.6599 37.1006V12.1683C53.6599 11.2084 52.8791 10.4277 51.9193 10.4277C50.9594 10.4277 50.1786 11.2084 50.1786 12.1683V37.1009C50.1786 38.2319 49.2618 39.1487 48.1308 39.1487C46.9999 39.1487 46.083 38.2319 46.083 37.1009V12.1683C46.083 8.95016 48.7011 6.33203 51.9193 6.33203C55.1374 6.33203 57.7555 8.95016 57.7555 12.1683V37.1009C57.7555 38.2317 56.8388 39.1484 55.7077 39.1484Z" fill="#141818"/>
                                                        <path d="M63.2846 39.1483C62.1537 39.1483 61.2368 38.2314 61.2368 37.1005V10.2738C61.2368 7.05563 63.8549 4.4375 67.0731 4.4375C70.2912 4.4375 72.9093 7.05563 72.9093 10.2738V15.5152C72.9093 16.6461 71.9924 17.563 70.8615 17.563C69.7306 17.563 68.8137 16.6461 68.8137 15.5152V10.2738C68.8137 9.31391 68.0329 8.53313 67.0731 8.53313C66.1132 8.53313 65.3324 9.31391 65.3324 10.2738V37.1008C65.3324 38.2316 64.4157 39.1483 63.2846 39.1483Z" fill="#141818"/>
                                                        <path d="M63.2846 39.1484C62.1537 39.1484 61.2368 38.2315 61.2368 37.1006V6.48493C61.2368 5.52509 60.456 4.74431 59.4962 4.74431C58.5363 4.74431 57.7555 5.52509 57.7555 6.48493V37.1007C57.7555 38.2317 56.8387 39.1485 55.7077 39.1485C54.5768 39.1485 53.6599 38.2317 53.6599 37.1007V6.48493C53.6599 3.26681 56.278 0.648682 59.4962 0.648682C62.7143 0.648682 65.3324 3.26681 65.3324 6.48493V37.1007C65.3324 38.2317 64.4157 39.1484 63.2846 39.1484Z" fill="#141818"/>
                                                        <path d="M69.4985 59.8368C69.1875 59.8368 68.8722 59.766 68.5761 59.616C67.5667 59.1057 67.1624 57.8736 67.6727 56.8646C68.7044 54.8241 70.2166 53.0205 72.0458 51.6482C74.7663 49.6077 76.3905 46.3591 76.3905 42.9583V26.5286C76.3905 25.5688 75.6097 24.788 74.6499 24.788C73.69 24.788 72.9092 25.5688 72.9092 26.5286V35.3958C72.9092 36.5268 71.9925 37.4436 70.8614 37.4436C69.7305 37.4436 68.8136 36.5268 68.8136 35.3958V26.5286C68.8136 23.3105 71.4317 20.6924 74.6499 20.6924C77.868 20.6924 80.4861 23.3105 80.4861 26.5286V42.9583C80.4861 47.6413 78.2496 52.1147 74.5035 54.9246C73.175 55.921 72.0771 57.2308 71.3277 58.7125C70.9669 59.4257 70.2463 59.8368 69.4985 59.8368Z" fill="#141818"/>
                                                        <path d="M48.1308 39.1484C46.9999 39.1484 46.083 38.2315 46.083 37.1006V17.8514C46.083 16.8915 45.3022 16.1108 44.3424 16.1108C43.3825 16.1108 42.6017 16.8915 42.6017 17.8514V37.1008C42.6017 38.2317 41.6849 39.1486 40.5539 39.1486C39.423 39.1486 38.5061 38.2317 38.5061 37.1008V17.8514C38.5061 14.6333 41.1242 12.0151 44.3424 12.0151C47.5605 12.0151 50.1786 14.6333 50.1786 17.8514V37.1008C50.1786 38.2317 49.2619 39.1484 48.1308 39.1484Z" fill="#141818"/>
                                                        <path d="M50.5145 23.2265C44.5276 23.2265 41.8414 26.5823 40.7846 28.5532C40.652 28.8008 40.2915 28.8004 40.1592 28.5527C39.106 26.5815 36.4346 23.2263 30.4481 23.2263C23.6285 23.2263 17.6296 27.8816 17.6296 36.3826C17.6296 39.8224 18.3306 42.7694 20.2764 46.0582C24.2414 52.7604 37.3032 61.4488 39.9862 63.161C40.2829 63.3502 40.6585 63.3509 40.9556 63.1623C43.6409 61.4584 56.705 52.8129 60.701 46.0582C62.6467 42.7694 63.3429 39.8224 63.3429 36.3826C63.3426 27.8818 57.334 23.2265 50.5145 23.2265Z" fill="#F7CF47"/>
                                                        <path d="M40.4717 65.3515C39.9087 65.3515 39.36 65.1912 38.8845 64.8876C37.2651 63.8543 22.9356 54.5757 18.5136 47.1012C16.4859 43.6736 15.5815 40.3681 15.5815 36.3828C15.5815 31.8025 17.1348 27.9112 20.0736 25.1295C22.7651 22.5818 26.4497 21.1787 30.448 21.1787C35.6008 21.1787 38.6947 23.3289 40.485 25.4206C42.227 23.4253 45.3383 21.1787 50.5145 21.1787C54.5133 21.1787 58.1989 22.5817 60.893 25.1289C63.8355 27.9111 65.3906 31.8026 65.3906 36.3828C65.3906 40.3736 64.4878 43.679 62.4634 47.1012C58.009 54.6312 43.6726 63.8637 42.0526 64.8917C41.5787 65.1923 41.0319 65.3515 40.4717 65.3515ZM30.4481 25.2743C25.087 25.2743 19.6773 28.7092 19.6773 36.3828C19.6773 39.6361 20.3836 42.2179 22.0386 45.0157C25.6278 51.0828 37.5862 59.1456 40.4753 61.0381C46.158 57.3676 55.8311 50.2679 58.9383 45.0157C60.59 42.2237 61.2948 39.6418 61.2948 36.3828C61.2948 28.7092 55.8805 25.2743 50.5142 25.2743C45.8461 25.2743 43.6278 27.5837 42.589 29.5211C42.1706 30.3017 41.3594 30.7865 40.472 30.7865C39.5828 30.7865 38.7709 30.3001 38.3528 29.5175C37.3186 27.582 35.1075 25.2743 30.4481 25.2743Z" fill="#141818"/>
                                                
                                                </svg>
                                            </a>
                                        </div>
                                        <h3 className="title text-2xl font-bold">Want To Help?</h3>
                                        <p className="mb-8 text-dark">Your financial support is very important for our global projects.</p>
                                        <a className="btn btn-primary bg-primary text-white rounded-lg py-2 px-4" href="#">Online Fundraiser</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4 animate-fadeInUp"   style={{ animationDelay: '0.6s' }}>
                                <div className="bg-dark text-center p-8 rounded-lg flex flex-col justify-center">
                                    <div className="inner-content">
                                        <h2 className="title text-white text-4xl font-bold mb-4">
                                            <span className="counter">33,986</span>
                                            <span>+</span>
                                        </h2>
                                        <p className="mb-8 text-white">Our campaign is powered by contributions from supporters like you</p>
                                        <a className="btn btn-primary bg-primary text-white rounded-lg py-2 px-4" href="#">Supporter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
{/*                         
                <!-- Call Action --> */}
            </div>
            {/* <!-- Footer --> */}
            <footer className="site-footer style-2" id="footer">
            <div className="footer-top footer-feature background-luminosity" style={{backgroundImage: "url('/images/slider-bg1.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <a href="index.html">
                                            <img src="/images/logo-white-2.png" alt=""/>
                                        </a>
                                    </div>
                                    <p>Akantika is a Crowdfunding & Charity Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    <div className="dz-social-icon style-3">
                                        <ul>
                                            <li>
                                                <a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a>
                                            </li>
                                            <li>
                                                <a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a>
                                            </li>
                                            <li>
                                                <a target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a>
                                            </li>
                                            <li>
                                                <a target="_blank" className="fab fa-youtube" href="https://youtube.com/"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Resources</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <ul>
                                        <li>
                                            <a href="#">How It Works</a>
                                        </li>
                                        <li>
                                            <a href="#">Ask A Question</a>
                                        </li>
                                        <li>
                                            <a href="#">Project Story</a>
                                        </li>
                                        <li>
                                            <a href="#">Mission</a>
                                        </li>
                                        <li>
                                            <a href="#">Certificates</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms And Condition</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Blog Posts</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="#">Simple Condition for all Around.</a>
                                                </h6>
                                                <span className="post-date">JUNE 18, 2022</span>
                                            </div>
                                        </div>
                                        <div className="post-separator"></div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title">
                                                    <a href="#">Simple Condition for all Around.</a>
                                                </h6>
                                                <span className="post-date">AUGUST 22, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_locations">
                                    <h4 className="widget-title">Locations</h4>
                                    <div className="separator-2 bg-secondary m-b30"></div>
                                    <div className="clearfix">
                                        <h6 className="title">Washington</h6>
                                        <p>1559 Alabama Ave SE, DC 20032, Washington, USA</p>
                                        <svg  width="232" height="103" fill="var(--secondary)" >
                                            <path d="M97.199 29.768l.134.77-1.436.232-.215 1.621h1.763l2.321-.172 1.2-1.119-1.283-.394-.706-.627-1.055-1.317-.477-1.899-1.984.315-.549.668v.742l.945.529 1.342.651zm-1.663.629l.091-1.021-1.136-.385-1.627.287-1.2 1.506v.985h1.406l2.467-1.372zm-33.78 6.007l.63-.311.196-.655.842-.049.34-.553-.789-.134-.668.013-.368.723h-1.714v.704h.413a4.13 4.13 0 0 0 .053.34l1.064-.077zm-3.352-.968l-.54.557-.075.676 1.268-.083.1-.681-.753-.468zm131.168 33.963l-3.673.085-.149-1.57.596.204 1.442-.13-.149-1.442-3.999.034-1.083-1.13.056-.602-5.143-3.631-1.279.785 7.364 7.053 1.042.272v.383h-1.391l.349.878 9.019.309-3.002-1.497zm6.426-7.866l-.627-.202-.292-1.214h-.908l-.577 1.219-.689.485-5.22 2.233v2.197l1.736 1.81h4.393l.565-1.127.992-.708v-.517l.627-.309v-3.867zm3.246 3.867l-2.64.8.053.46h-.659v2.867h1.331l-.183-1.827 1.036.302v1.279l1.098-.057-.036-3.825zm22.236 17.357l-.726-2.314-2.688-1.808-.209-3.454-1.174-1.584v6.517h-5.558v-3.207l-.317-.019-.882-.41-.081-1.71 1.28.21v-1.787l-1.225-.579h-3.395l-2.45 2.735h-.983v-.862l-2.958.164-4.633 4.144-2.467.041-2.742 1.47-.172 6.439-1.672 1.253v1.132l7.999-2.155 6.462-.2 2.393 4.141 7.351.198 7.083-5.231 1.764-3.125zm-15.228 11.351l2.601.21 2.091-.897.056-1.253-2.306-.194-2.442 2.135zm25.003-5.655l-1.082.166-.028-1.917-1.989.1-.265 2.999-1.745.934-3.241.347-5.19 2.903-.87.568v.97l2.691-.317 6.602-3.174 1.852-.964 1.989-.691 2.021-.891-.745-1.032zm-10.564-16.23v-.898h-1.374l-.224-2.718-.842-.302-1.568.804v.978l1.315-.096v2.233h2.693zm-9.849-5.171l-1.678.042.14-1.376-1.606-.742-2.258 1.785 1.52 1.47 3.295.376.87.359v-2.033l-.283.119zm.158 4.474l.125-.008v-1.45h-.187l.062 1.457zm-48.069-10.98l.634 1.334 2.265-.664.228-1.844-1.806-.276-1.321 1.449zm-26.659 15.521l-3.09-.317v1.889l1.106 1.01-.846 1.021-1.256 1.134v2.08l1.719 1.3 1.546-1.957 3.032-3.492 1.452-5.488h-1.848l-1.815 2.82zm63.633-5.79h-1.029v.427l.791.192.238-.619zm-4.518.619h-1.216v.517h1.216v-.517zm1.713.517h.742v-.451l.553-.066v-.444h-1.197l-.492.444-.708.517v.459l1.102-.081v-.377zm3.073.423h1.198v-.493l.829.07-.11-.827-1.36.166-.125.534-1.527.126h-.07v.825h1.165v-.402zm12.186-46.746l2.223-.359-1.702-.93.062-.713 4.739.598.896-.598-6.375-2.11-1.034-.042v5.267l1.191-.06V25.09zm-51.307 35.009l1.44.266 1.338-1.512h-3.75l.972 1.246zm17.34.079l7.115 5.358.372-.947-5.781-6.456.606-1.887 3.048 2.714 1.694.136 2.239-1.168-.363-1.757-3.708-2.331-.145-2.118 1.055-1.112 1.851.464-.134.995 1.061 1.295.947-.534-.521-1.529 5.235-1.476 2.299-1.504-.362-2.72-4.549-3.761-.084-3.061h2.019l6.294 3.763 1.778-.37-1.195-1.21-3.363-1.61.208-2.397 3.991.008.321-2.965-1.523-1.565.906-.768 1.934 1.533.633-.649-2.522-2.231-6.169-.583-.825-1.297 1.785-2.002 1.416.834 4.273.289 5.378-2.82v-4.026l-6.988-.283-7.313 3.737v11.007h-5.553V19.043l-2.365-.283-2.576-.064-2.355 1.867-.983-.06-3.126-1.821h-9.21l-4.265-2.004-8.553.423-6.479 2.293.04 2.638-2.01.474-.446-2.648-.751-.915-2.231-.438-.524 1.585.654 1.3-7.981-.415-3.799 1.38-.579-1.308-.965.196-.696 1.451-1.991 1.225-4.864-.102-.23-.847 5.101-.17 1.036-.704-6.137-2.238-5.52.132v2.795l1.381-.761h.955v.946l-2.336 1.131v.949h-.616v.289l1.669.613.13 1.27-2.387 2.774-4.13-.03-.262-.664 2.58-1.036.024-3.214h-2.566v-3.573l-.587.238-1.576 2.204-2.791.849-1.167 1.004.27 1.157 1.44.155.87 1.699L107.29 28l.431 2.261h-.769l-2.01-.232-2.236.296-2.167 2.401-3.119.393-.44 2.084 1.321.242-.376 1.346-3.101-.479-2.825.479-.589 1.238.476 2.597 1.68.611 2.772-.008 1.891-.142.578-1.18 2.935-2.986 1.938.308 1.897-1.351.356 1.057 4.681 2.487-.58.602-2.108-.098.797.908 1.311.227 1.523-.498-.03-1.448.689-.264-.56-.461-3.128-1.364-.807-1.827h2.589l.827.64 2.245 1.523.082 1.836 2.332 1.938.863-2.657 1.606-.696.298 2.178 1.57 1.357 4.734-.057 1.404.817v1.95l-1.722 1.23h-4.803l-2.912-1.71-3.065.24v1.47h-.985l-1.044-.589-5.312-1.065v-2.701l-6.751.411-2.091.879h-2.661l-1.321-.104-3.248 1.421v2.659l-6.643 3.773.561 1.599h1.338l-.34 1.527-.944.283-.055 3.999 5.724 5.128h2.495l.177-.317h4.473l1.306-.936h2.539l1.404 1.102 3.791.306-.498 3.967 4.211 5.845-2.222 3.327.157 1.566 1.763 1.368v3.775l2.283 2.421v3.14h6.791l5.101-4.107 1.597-2.24.653-.113h-5.207V57.476h5.554v1.183l9.789 5.001 5.36-6.022-1.176-.438-6.409 1.061-1.662-.645-6.732-9.971.468-.432 6.686 6.366.168 1.968 1.523 1.219 3.177-.159 6.545-3.735 2.068-1.051-.034-1.299-2.2-.213-7.697-2.976.046-2.442h1.704l.251 1.685 3.559 1.612 4.082.153 8.818 1.136 2.078 1.03v1.585l-.268 2.163 2.095 2.699V34.738h5.554v1.183l11.659 5.96-11.659 5.962v9.65l.592-3.524 1.52-2.548 2.427-.717 4.286.327 5.403 3.763v5.384h.006zm-52.946-20.86v-.008l-3.892-.132-1.153.132v-2.08l.872-.772.934-.232 2.076-.183.442-.553.847.328.114 1.899 2.266.732.195.868h-2.701zm14.926 1.483h-.007l-.689.506-1.57-.093-.3-.37-2.469-.151.174-.615 1.319-.881v-.747l-2.51-1.425-.113-1.827.511-.893 2.025-.147 1.716.564.081.944-2.459-.108-.117.87 3.063 1.6v1.18l1.34.757v.836h.005zm64.94-12.247l4.943 3.172 1.57-.638-.587-2.121-.319-.234-5.309-2.008-.298.368v1.461zM127.409 79.47l1.349-1.253 2.837-3.071-.591-4.652-1.206-1.672-3.435 1.757v10.944l1.046-.181V79.47zM68.655 30.138l-.681-.328v2.125l.587-.157.094-1.64zm-.681-8.91v2.168h1.487l.891-1.327-1.791-.353v-.791l-.587.302zm.366 13.787s.011.015.011.028l.761-.049.057-1.129-1.197-.428v.261h-3.061l.089.513 3.341.804z" fill-opacity=".4"/>
                                            <path d="M59.038 18.424l-2.212.902.166 2.195-2.293-.276-.349-1.21 2.172-1.572-3.973-.155-1.153.264-.508 1.063 1.506.198-.302 1.18-2.544.117-.394.776-3.712.081s-.085-1.646-.23-1.646c-.157 0 2.889-.038 2.889-.038l2.201-1.689-1.202-.474-1.597 1.225-2.652-.117-1.587-1.729h-3.395l-3.552 2.082h3.25l.302.747-.853.625 3.597.083.549 1.017-4.048-.128-.198-.779-2.542-.436-1.351-.581-5.99.045-1.846 1.408-1.257-.085-1.393-.632-.504-.117v4.28h-5.798v-5.135h-5.416L8.431 22.26l-2.944.355-1.349.825 2.091.243v.659H1.753L0 25.322l2.238 1.493 6.139.041.853-.715h5.13l1.851 1.295-.113 2.006 1.561 1.132-1.302.732.293 2.642-4.631 4.424v4.154l2.486.946v3.724l2.412 3.206 1.927.23.247-1.096-2.276-2.774-.447-2.701h1.349l.576 2.778 3.324 3.799-.891 1.225 2.129 2.536L28.1 55.42v-.666l2.091.227-.192 1.183 1.64.225 2.55.559 3.601 3.212 4.586.27.449 2.948-3.148 1.719-.157 2.618-.436 1.612 4.537 4.467.351 1.519 1.836.355c.202 0 3.707 2.084 3.707 2.084v8.061l1.246.287-.87 3.718 2.101 2.191-.374 3.69 2.759 3.829 3.561 2.436 3.561.047.357-.892-2.616-1.733.155-.866.479-1.066.102-1.066-1.791-.043-.917-.877 1.495-1.125.204-.834-1.653-.362.094-.789 2.346-.272 3.571-1.342 1.202-1.729 3.742-3.776-.853-2.935 1.145-1.566 3.441.081 2.312-1.431.753-5.686.43-.43H73.1v-6.377l-4.192-.03-4.193-1.249-.2-2.352-1.402-1.927-3.771-.036-2.203-2.708-1.793-.676v7.944h-5.798V57.31l-3.006-.479-3.046 2.757-4.779-.634-.351-4.239-3.505-.472 1.406-2.07-.404-1.198-4.581 2.414-2.889-.274-1.044-1.78.64-1.838 1.597-2.301 3.661-1.461h7.094l-.023 1.699 2.555.921-.211-2.901 1.834-1.446 3.705-1.912.24-1.338 1.108-.902v-.998h1.225l1.376-1.119 3.935-1.702-.349-.219 2.652-1.97.983.196.447.444 1.01-.887.23-.089-1.091-.117-1.121-.294v-.861l.585-.379h1.323l.604.206.513.817.302-.036v-5.369h-.264l.264-1.85v-.272l-4.22-.793-1.778 1.047v3.216l-3.182.783-1.289 2.095-1.376.17v-2.674l-2.991-.33-1.495-.761-.606-1.725 5.358-2.465 2.618-.626.255 1.378 1.47-.058.119-.695 1.523-.17.017-.234-.64-.223-.157-.73 1.87-.128 1.131-.927.083-.064v.008l.34-.281 2.952-.291v-2.738l-3.139.289zm-23.529 7.285l-2.957.149-.557-.525 2.091-.472 1.423-.185c.098-.002 0 1.032 0 1.032zm.072-2.85l-.634.64h-2.944v-.934-.087h1.31l.119-.359h2.15v.74zm4.458 8.58l-1.534.389-.961-1.57 1.566-.581 1.415.259-.487 1.504zm1.716 6.492l-1.057-.444.247-1.17 1.368-1.174h1.982l-2.54 2.788zm4.45.67h-1.91l.304-1.017.9-.075.2-.347 1.37-.147v.915h.008l-.872.672zm1.319-2.521l-.898.457-1.129.155v-1.548h2.025l.002.936zm1.704-1.085l.93.442-.745.477-.708-.477.523-.442zm-1.21 1.176h.149l2.293.521v.923h-1.927l-.513-.591-.002-.853zm-1.493-2.536l1.24.887-1.24.236v-1.123zm-1.159-.406v.553h.513v.976h-3.603l-1.332-.287.33-.689L43 33.227h2.367zm16.809-9.032v-1.11l-1.842.772 1.842.338zm4.195 8.172l.155.553 1.449.517v-1.504l-1.604.434z" fill-opacity=".4"/>
                                            <path d="M64.913 33.699l-.059-.33.963-.538v-.759l-1.025-.206-.261.704-1.831.23-.193-.041v.049l-.334.038v.853h2.739zm48.414-9.298l.616-.298v-1.315l-2.984 1.642-.004.623h2.372v-.651zm93.185 1.215l-.902-.878v.002 1.985l.902-1.11zm5.63 44.453l-.051-.704-.966-.4v1.104h1.017zM163.83 58.853h.334v-1.361l-.204 1.21-.13.151zm-37.467 22.67l-.349.062h.349v-.062z" fill-opacity=".4"/>
                                            <path d="M211.168 26.203l-1.804.098v-9.733l9.348-4.779-9.348-4.782v-.434h-1.7v20.252h.654l2.601 1.908h.249v-2.531zM20.292 23.144h1.94V0h-1.94v.493L9.608 5.956l10.684 5.462v11.726zM66.168 8.647h-1.942v12.832l-1.04-.698-1.012.1v2.206l2.051-.855v9.559h1.942V20.067l10.682-5.464-10.682-5.46v-.496zM51.601 40.811v23.144h1.94V52.231l10.684-5.464-10.684-5.462v-.495h-1.94zm23.551 10.735l-9.35 4.779 9.35 4.78v10.259h1.699V51.112h-1.699v.434zm35.288-28.402h1.697V2.891h-1.697v.434l-9.349 4.779 9.349 4.781v10.259zm104.437 35.249v-.436h-1.701V78.21h1.701V67.952l9.349-4.782-9.349-4.777zm-54.216-21.702v20.252h1.697V46.686l9.351-4.779-9.351-4.782v-.434h-1.697zm28.841-13.681l9.352-4.779-9.352-4.781v-.434h-1.694v20.252h1.694V23.01zM122.86 59.425v20.252h1.697V69.419l9.348-4.779-9.348-4.782v-.432h-1.697z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg className="shape1" width="194" height="418" viewBox="0 0 194 418" fill="none" >
                        <path d="M172 183.598C107.617 168.098 16.5071 110.075 -21 83V371.381C125.65 399.399 168.771 257.867 172 183.598Z" fill="var(--primary)"/>
                        <path d="M-30 2C45.2503 142.152 272.249 -9.14019 160.733 180.171C94.4237 292.74 123.481 394.872 -20.3143 415" stroke="var(--secondary)" stroke-width="6"/>
                    </svg>
                    <svg className="shape4" viewBox="0 0 482 279" fill="none" >
                        <path d="M4 3C53.9035 88.8689 116.283 185.582 247.28 195.034C333.831 201.279 435.198 155.222 489 277" stroke="var(--secondary)" stroke-width="8"/>
                        <path d="M343.949 87.7759C238.291 82.6 232.707 40.9079 204 3H483V202C463.517 120.839 430.681 92.0248 343.949 87.7759Z" fill="var(--primary)"/>
                    </svg>
                </div>
            </footer>
                
                {/* <!-- Footer Bottom Part -->
                <div className="footer-bottom text-center"> */}
                    <div className="container">
                        <span className="copyright-text">
                            Akantika Crowdfunding & Charity Website - © 2024 by <a href="#" target="_blank">DexignZone</a>
                        </span>
                    </div>
                </div>
         
            {/* <!-- Footer End -->
            <!-- read more --> */}
            <div className="modal fade modal-wrapper" id="read" tabindex="-1" role="dialog" aria-labelledby="read" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Choose a donation amount --> */}
            <div className="modal fade modal-wrapper" id="modalDonate" tabindex="-1" role="dialog" aria-labelledby="modalDonate" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Choose a donation amount</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="flaticon-close"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="index.html">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tag-donate style-1">
                                            <div className="donate-categories">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className="form-check-label" for="flexRadioDefault1">$500
                                            </label>
                                                </div>
                                            </div>
                                            <div className="donate-categories">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                    <label className="form-check-label" for="flexRadioDefault2">$1000
                                            </label>
                                                </div>
                                            </div>
                                            <div className="donate-categories">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                                    <label className="form-check-label" for="flexRadioDefault3">$2000
                                            </label>
                                                </div>
                                            </div>
                                            <div className="donate-categories">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                                    <label className="form-check-label" for="flexRadioDefault4">$5000
                                            </label>
                                                </div>
                                            </div>
                                            <p>
                                                Most Donors donate approx <span>$1000</span>
                                                to this Fundraiser
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Other Amount</label>
                                            <div className="input-group">
                                                <input type="number" className="form-control" placeholder="Other Amount"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <div className="input-group">
                                                <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman"/>
  ,                                         </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Email address</label>
                                            <div className="input-group">
                                                <input name="dzEmail" required type="text" className="form-control" placeholder="info@mail.com"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <div className="input-group">
                                                <input type="number" className="form-control" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Address</label>
                                            <div className="input-group">
                                                <input required type="text" className="form-control" placeholder="Address"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="form-label">Pancard</label>
                                            <div className="input-group">
                                                <input type="number" className="form-control" placeholder="Pancard"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-0 text-center">
                                            <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">Proceed To Pay</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Authentication Modal --> */}
            <div className="modal fade modal-wrapper auth-modal" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="modalLogin" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    {/* <!-- Login Your Account --> */}
                    <div className="modal-content">
                        <h2 className="title">Login Your Account</h2>
                        <form action="index.html">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                                <div className="reset-password">
                                    <a className="btn-link collapsed" data-bs-toggle="collapse" href="#reset-password" role="button" aria-expanded="false" aria-controls="reset-password">Reset password?</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-sm btn-outline-primary btn-block">Login</button>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0);" className="btn btn-sm facebook btn-block">
                                    <i className="fa-brands fa-facebook-f m-r10"></i>
                                    Log in with Facebook
                                </a>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0);" className="btn btn-sm google-plus btn-block">
                                    <i className="fa-brands fa-google m-r10"></i>
                                    Log in with Google
                                </a>
                            </div>
                            <div className="sign-text">
                                <span>
                                    Don't have a Crowdfunding account? <a className="btn-link collapsed" data-bs-toggle="collapse" href="#sign-up" role="button" aria-expanded="false" aria-controls="sign-up">Sign up</a>
                                </span>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Reset Password --> */}
                    <div className="modal-content collapse reset-password" id="reset-password">
                        <h2 className="title">Reset password?</h2>
                        <form>
                            <div className="form-group password-icon-bx">
                                <i className="fa fa-lock"></i>
                                <p>Enter your email address associated with your account, and we'll email you a link to reset your password...</p>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter email address"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-sm btn-outline-primary btn-block">Send reset link</button>
                            </div>
                            <a data-bs-toggle="collapse" href="#reset-password" className="sign-text" role="button" aria-expanded="false" aria-controls="reset-password">Back</a>
                        </form>
                    </div>
                    {/* <!-- Sign Up Your Account --> */}
                    <div className="modal-content collapse sign-up" id="sign-up">
                        <h2 className="title">Sign Up Your Account</h2>
                        <form action="index.html">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-sm btn-outline-primary btn-block">Sign Up</button>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0);" className="btn btn-sm facebook btn-block">
                                    <i className="fa-brands fa-facebook-f m-r10"></i>
                                    Log in with Facebook
                                </a>
                            </div>
                            <div className="form-group">
                                <a href="javascript:void(0);" className="btn btn-sm google-plus btn-block">
                                    <i className="fa-brands fa-google m-r10"></i>
                                    Log in with Google
                                </a>
                            </div>
                            <div className="sign-text">
                                <span>
                                    Don't have a Crowdfunding account? <a className="btn-link collapsed" data-bs-toggle="collapse" href="#sign-up" role="button" aria-expanded="false" aria-controls="sign-up">Login</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button className="scroltop icon-up" type="button">
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    </div>  

    </div>
     <Slideshow />
</>
       



    );
  };
  export default PageName;