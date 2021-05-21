const Authentification = () => {
    return ( 
        <div className="authentification">
        <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
        </div>
        <div className="email">
            <p>Email</p>
            <input type="email"/>
        </div>
        <div className="password">
            <p>Password</p>
            <input type="password"/>
        </div>
        <a href="">forget password?</a>
        </div>
     );
}
 
export default Authentification;