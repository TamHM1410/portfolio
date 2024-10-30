import styles from "../styles/ContactCode.module.css";

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
    
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a
          href="mailto:hunhminhtam@=@gmail.com"
          target="_blank"
          rel="noopener"
        >
          hunhminhtam@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a href="https://github.com/TamHM1410" target="_blank" rel="noopener">
          TamHM1410
        </a>
        ;
      </p>
     
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;facebook:{" "}
        <a
          href="https://www.facebook.com/toilatam1410/"
          target="_blank"
          rel="noopener"
        >
          Huynh Minh Tam
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{" "}
        <a
          href="https://www.instagram.com/hunhmihtmmm/"
          target="_blank"
          rel="noopener"
        >
          Huynh Minh Tam
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{" "}
        <a
          href="https://www.instagram.com/hamzajaffar"
          target="_blank"
          rel="noopener"
        >
          Hamza Jaffar
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;codepen:{" "}
        <a href="https://codepen.io/hamzazaidi" target="_blank" rel="noopener">
          Hamza Zaidi
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{" "}
        <a
          href="https://codesandbox.io/u/hamzazaidi"
          target="_blank"
          rel="noopener"
        >
          Hamza Zaidi
        </a>
        ;
      </p> */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
