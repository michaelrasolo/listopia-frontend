import styles from "../styles/Home.module.css";

function Home(props) {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <h2 className={styles.headerText}>{props.headerText}</h2>
      </div>
      <section className={styles.introContainer}>
        <div className={styles.textIntro}>
          <p className={styles.paragraph}>{props.p1}</p>
          <p className={styles.paragraph}>{props.p2}</p>
          <p className={styles.paragraph}> {props.p3}</p>
          <p className={styles.paragraph}> {props.p4}</p>
        </div>
      </section>
    </header>
  );
}

export default Home;
