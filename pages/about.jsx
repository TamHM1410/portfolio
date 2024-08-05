const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p className="about">
        Hello My Name is Nguyen Hoang Thien a Fullstack Developer
        Passionate software engineer with a year of hands-on experience as a Backend
Developer. I've thrived on developing blockchain projects and financial systems,
honing my skills in both back-end and front-end technologies. My expertise spans
multiple programming languages and extends to mobile development. Always
excited to tackle new challenges in the ever-evolving world of tech.
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
