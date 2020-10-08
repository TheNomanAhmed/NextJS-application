import Link from "next/link"

const About = () => {
  return <div>
    <div>
      <h1>About</h1>
      <Link href="/">
        <a > Home</a>
      </Link>
      <p>A Javascript programmer</p>
      <img src="../static/js-logo.png" alt="javascript logo"/>
    </div>
  </div>;
};

export default About;
