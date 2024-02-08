import * as React from "react";
import Header from "../header/Header";
import styles from "./Accounts.module.css";


const Accounts = () => {
  return (
    <div className={styles.accounts}>
      <form action="" className={styles.accountsForm}>
        <div className={styles.accountsTop}>
            <h1>My Account</h1>
        </div>
        <div className={styles.accountsDisplay}>
          <div className={styles.accountsInput}>
            <p>Username</p>
            <input type="text" required />
          </div>
          <div className={styles.accountsInput}>
            <p>Name</p>
            <input type="text" required />
          </div>
          <div className={styles.accountsInput}>
            <p>Email</p>
            <input type="text" required />
          </div>
          <div className={styles.accountsInput}>
            <p>Password</p>
            <input type="password" required />
          </div>
          <button>Update</button>
          <button className={styles.delete}>Delete my account</button>
        </div> 
      </form>
    </div>
  );
};

export default Accounts;
