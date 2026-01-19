import Link from 'next/link';
import React from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";



function Header() {
    return (
        <>
            <section className='py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <p>१७ जेष्ठ २०८२ शनिबार<br />
                                Saturday, May 31, 2025</p>
                        </div>
                        <div className="col-lg-8 text-center">
                            <img className='w' src="https://jcss-cdn.ekantipur.com/kantipurdaily/images/logo.png" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <p>२८.४४°C काठमाडौं
                                काठमाडौंमा वायुको गुणस्तर: १३५</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <h2><IoReorderThreeSharp />
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <ul className='d-flex gap-4 a'>
                                <Link href='/prabal/'><li>समाचार</li></Link>
                               <Link href='/prabal/'> <li>अर्थ /वाणिज्य</li></Link>
                                <Link href='/prabal/'><li>विचार</li></Link>
                                <Link href='/prabal/'><li>विचार</li></Link>
                                <Link href='/prabal/'><li>खेलकुद</li></Link>
                                <Link href='/prabal/'><li>उपत्यका</li></Link>
                                <li>मनोरञ्जन</li>
                                <li>फोटोफिचर</li>
                                <li>फिचर</li>
                                <li>विश्व</li>
                                <li>ब्लग</li>
                                <li>कोसेली</li>
                                <li>प्रवास</li>
                                <li>शिक्षा</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <h2 ><IoPersonCircleOutline />
                            </h2>Login
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <section>
                <div className="container">
                    <ul className='d-flex gap-4 a'>
                       <Link href='/prabal/'><li> बजेट २०८२/८३</li></Link>
                       <Link href='/prabal/'><li>भिजिट भिसा प्रकरण</li></Link>
                        <Link href='/prabal/'><li>गभर्नर नियुक्ति</li></Link>
                        <li>कान्तिपुर इकोनोमिक समिट–२०२५</li>
                        <li>महालेखापरीक्षकको वार्षिक प्रतिवेदन</li>
                        <li>निर्भिक नारी</li>
                        <li>नीति तथा कार्यक्रम</li>
                        <li>कान्तिपुर अर्काइभv</li>
                   </ul>
                   <hr />
                </div>
            </section>
        </>
    )
}

export default Header
