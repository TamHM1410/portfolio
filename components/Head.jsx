import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="TamHM1410 is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="TamHM1410 web developer, TamHM1410 developer, mern stack, TamHM1410 portfolio"
      />
      <meta property="og:title" content="TamHM1410's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "TamHM1410",
};
