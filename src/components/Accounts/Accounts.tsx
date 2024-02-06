import * as React from "react";
import Header from "../header/Header";
import styles from "./Accounts.module.css";


const Accounts = () => {
  return (
    <div className={styles.accounts}>
      <Header/>
      <form action="" className={styles.accountsForm}>
        <div className={styles.accountsTop}>
            <h1>My Account</h1>
        </div>
        <div className={styles.accountsDisplay}>
          <div className={styles.accountsInput}>
            <input type="text" placeholder="Username" required />
          </div>
          <div className={styles.accountsInput}>
            <input type="text" placeholder="Name" required />
          </div>
          <div className={styles.accountsInput}>
            <input type="text" placeholder="Email" required />
          </div>
          <div className={styles.accountsInput}>
            <input type="password" placeholder="Password" required />
          </div>
          <button>Update</button>
          <button className={styles.delete}>Delete my account</button>
        </div> 
      </form>
    </div>
  );
};

export default Accounts;
