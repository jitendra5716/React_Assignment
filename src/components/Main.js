import style from "../styles/main.module.css";


const Main = ()=>{
    return(
        <>
        <div className={style.outerDiv}>
            <div className={style.imgDiv}>
                <div className={style.innerDiv}>
                    <h1>Login</h1>
                    <p>
                        Get access to your Orders,<br /> Wishlist and Recommendations
                    </p>
                    <div className={style.loginImgDiv}>
                        <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.webp?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=" alt="loginImg"/>
                    </div>
                </div>
            </div>
            <div className={style.formDiv}>
                <div className={style.formInnerDiv}>
                    <form>
                        <input type="text" placeholder="Enter Email/Mobile number" required/>
                        <p>By continuing, you agree to Flipkart's <a href="#">Terms of Use</a>  and <a href="#">Privacy Policy</a>.</p>
                        <button>Request OTP</button>
                    </form>
                    <a className={style.createAcc} href="#">New to Flipkart? Create an account </a>
                </div>
            </div>
        </div>
        </>
    )
};

export default Main;