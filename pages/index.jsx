import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Fullstack</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Nguyen Hoang Thien</h1>
            <h6 className={styles.bio}>Aspiring Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="./NguyenHoangThien_Fullstack.pdf">
              <button className={styles.outlined}>My Résume</button>
            </Link>
            {/* <Link href="./NguyenHoangThien_Fullstack.pdf" >
              <button className={styles.button}>Download MyCV</button>
            </Link> */}
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
