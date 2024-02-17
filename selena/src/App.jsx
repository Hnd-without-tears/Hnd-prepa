import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.leftcontainer}>
        <h1 className={styles.signupheading}>Selena</h1>
        <p className={styles.signupinst}>Create Your Account</p>
        <form action="" className={styles.signupfield}>
          {/* <p htmlFor="firstname">Full Name</p> */}
          <input type="text" name="password"  placeholder="Full Names..." />
          {/* <label htmlFor="Username">Username</label> */}
          <input type="text" name="password"  placeholder="Username..." />
          {/* <label htmlFor="firstname">Email</label> */}
          <input type="text" placeholder="Email Address..." />
          {/* <label htmlFor="Password">Password</label> */}
          <input type="text" name="password" placeholder="Password..." />
          {/* <label htmlFor="firstname">Confirm Password</label> */}
          <input type="text" name="password" placeholder="Confirm Password..." />
          <div className={styles.accept}>
            <input type="checkbox" className={styles.remember} />
            <a href="/"className={styles.policy}>agree to terms and condition</a>
          </div>
          <button className={styles.btn}>SignUp</button>
          <p>or</p>
        </form>
      </div>
      <div className={styles.rightcontainer}>
        <div className={styles.textbox}>
          <h1 className={styles.primaryheading}>
            Welcome To <span>Selena</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad,
            consequuntur qui minus quam aut quis itaque asperiores ratione
            perspiciatis omnis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
