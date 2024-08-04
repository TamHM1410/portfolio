const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p className="about">
        Hello My Name is Nguyen Hoang Thien a Fullstack Developer
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
