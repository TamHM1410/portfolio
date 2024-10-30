const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <p className="about">
      Hello My Name is Huynh Minh Tam a web developer.
      A passionate software engineer with a  half year of hands-on experience as a FRONT-END developer. 
      My expertise spans Javascript /TypeScript programming languages and extends to another programming languages 
      . Always excited to tackle new challenges in the ever-evolving world of tech.
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
