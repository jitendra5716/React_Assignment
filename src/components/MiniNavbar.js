import style from "../styles/mininavbar.module.css";


const MiniNavbar = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <ul>
                <li className={style.navItem}>
                    <span>Electronics</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>TVs & Appliances</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>Men</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>Women</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>Baby & Kids</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>Home & Furniture</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                 <li className={style.navItem}>
                    <span>Sports, Books & More</span><span className={style.imgSpan}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="dropdown"></img>
                    </span>
                </li>
                <li className={style.navItem}>
                    Flights
                </li>
                <li className={style.navItem}>
                    Offer Zone
                </li>
            </ul>
        </div>
        </>
    )
};

export default MiniNavbar;