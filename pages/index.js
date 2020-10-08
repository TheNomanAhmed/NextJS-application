import Link from "next/link"

const Index = () => {
    return <div>
      <div>
        <h1>Index Page</h1>
        <Link href="/about">
          <a> About Page</a>
        </Link>
        <p>A Javascript programmer</p>
      </div>
    </div>;
  };

export default Index;
