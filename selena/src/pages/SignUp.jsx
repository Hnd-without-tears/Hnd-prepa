import React from "react";
import styles from './SignUp.module.css'

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.leftcontainer}>
        <h1 className={styles.signupheading}>Selena</h1>
        <p className={styles.signupinst}>Create Your Account</p>
        <form action="" className={styles.signupfield}>
          <input type="text" placeholder="Full Names..." />

          <input type="text" placeholder="Username..." />

          <input type="text" placeholder="Email Address..." />

          <input type="text" placeholder="Password..." />

          <input type="text" placeholder="Confirm Password..." />
          <div className={styles.accept}>
            <input type="checkbox" className={styles.remember} />
            <a href="/" className={styles.policy}>
              agree to terms and condition
            </a>
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
