import style from "../styles/footer.module.css";

const Footer = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <div className={style.firstDiv}>
                <div className={style.first} id={style.lastList}>
                    <div className={style.list}>
                            <p>ABOUT</p>
                            <ul>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                 <li>
                                    <a href="#">About Us</a>
                                </li>
                                 <li>
                                    <a href="#">Careers</a>
                                </li>
                                 <li>
                                    <a href="#">Flipkart Stories</a>
                                </li>
                                 <li>
                                    <a href="#">Press</a>
                                </li>
                                 <li>
                                    <a href="#">Flipkart Wholesale</a>
                                </li>
                                <li>
                                    <a href="#">Cleartrip</a>
                                </li>
                                <li>
                                    <a href="#">Corporate Information</a>
                                </li>
                            </ul>
                    </div>
                    <div className={style.list}>
                         <p>HELP</p>
                            <ul>
                                <li>
                                    <a href="#">Payments</a>
                                </li>
                                 <li>
                                    <a href="#">Shipping</a>
                                </li>
                                 <li>
                                    <a href="#">Cancellation & Returns</a>
                                </li>
                                 <li>
                                    <a href="#">FAQ</a>
                                </li>
                                 <li>
                                    <a href="#">Report Infringement</a>
                                </li>
                                 
                            </ul>
                    </div>
                    <div className={style.list}>
                         <p>CONSUMER POLICY</p>
                            <ul>
                                <li>
                                    <a href="#">Cancellation & Returns</a>
                                </li>
                                 <li>
                                    <a href="#">Terms Of Uses</a>
                                </li>
                                 <li>
                                    <a href="#">Security</a>
                                </li>
                                 <li>
                                    <a href="#">Privacy</a>
                                </li>
                                 <li>
                                    <a href="#">Sitemap</a>
                                </li>
                                 <li>
                                    <a href="#">Grievance Redressal</a>
                                </li>
                                <li>
                                    <a href="#">EPR Compliance</a>
                                </li>
                                
                            </ul>
                    </div>
                    <div className={style.list} >
                        <p>SOCIAL</p>
                            <ul>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                 <li>
                                    <a href="#">Twitter</a>
                                </li>
                                 <li>
                                    <a href="#">YouTube</a>
                                </li>
                                 
                                 
                            </ul>
                    </div>
                </div>
                <div className={style.second}>
                    <div className={style.secondDiv}>
                        <p className={style.firstPara}>
                            Mail Us:
                        </p>
                        <p className={style.secondPara}>
                            Flipkart Internet Private Limited,<br/>
                            Buildings Alyssa, Begonia &<br/>
                            Clove Embassy Tech Village,<br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India
                        </p>
                    </div>
                    <div className={style.secondDiv}>
                        <p className={style.firstPara}>
                            Registered Office Address:
                        </p>
                        <p className={style.secondPara}>
                            Flipkart Internet Private Limited,<br/>
                            Buildings Alyssa, Begonia &<br/>
                            Clove Embassy Tech Village,<br/>
                            Outer Ring Road, Devarabeesanahalli Village,<br/>
                            Bengaluru, 560103,<br/>
                            Karnataka, India<br/>
                            CIN : U51109KA2012PTC066107<br/>
                            Telephone: 044-45614700
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={style.secondContainer}>
                <div>
                    <div className={style.logoDiv}>

                    </div>
                    <span>
                        Become a Seller
                    </span>
                </div>
                <div>
                    <div className={style.logoDiv}>

                    </div>
                    <span>
                        Advertise
                    </span>
                </div>
                <div>
                    <div className={style.logoDiv}>

                    </div>
                    <span>
                        Gift Cards
                    </span>
                </div>
                <div>
                    <div className={style.logoDiv}>

                    </div>
                    <span>
                        Help Center
                    </span>
                </div>
                <div>
                    <span>
                        &copy;
                    </span>
                    <span>
                         2007-2023 Flipkart.com
                    </span>
                </div>
            </div>
        </div>
        </>
    )
};

export default Footer;
