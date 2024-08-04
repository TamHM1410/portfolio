import styles from "../styles/ContactCode.module.css";

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{" "}
        <a href="https://webbythien.com" target="_blank" rel="noopener">
          webbythien.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a
          href="mailto:thiengk563@gmail.com"
          target="_blank"
          rel="noopener"
        >
          thiengk563@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a href="https://github.com/webbythien" target="_blank" rel="noopener">
          Webbythien
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/thien-nguyen-web/"
          target="_blank"
          rel="noopener"
        >
          thien-nguyen-web
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{" "}
        <a
          href="https://x.com/webbythien"
          target="_blank"
          rel="noopener"
        >
          Luke Nguyen
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
