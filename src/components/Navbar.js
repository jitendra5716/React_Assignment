import style from '../styles/navbar.module.css';

const Navbar = ()=>{
    return(<>
    <div className={style.outerDiv}>
        <div className={style.innerDiv}>
            <div id={style.logoDiv}>
                <img src='https://couponcode-images.s3-ap-southeast-1.amazonaws.com/public/shop/240.jpg' alt='logoDiv'></img>
            </div>
            <div className={style.searchDiv}>
                <form>
                    <input type='text' placeholder='Search for products, brands and more' required/>
                    <button className={style.loginBtn}>Login</button>
                </form>
            </div>
            <div className={style.linkDiv}>
                <span>Become a Seller</span>
                <span>More</span>
                <span>Cart</span>
            </div>
        </div>
    </div>
    </>)
};

export default Navbar;