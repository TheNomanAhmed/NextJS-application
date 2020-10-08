import Link from "next/link";

export default ({ children, title }) => {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <header className="flex justify-around items-center bg-blue-200 text-blue-800 h-16">
        <Link href="/">
          <a className=" font-bold hover:text-gray-500">Home</a>
        </Link>
        <Link href="/about">
          <a className=" font-bold hover:text-gray-500">About</a>
        </Link>
        <Link href="/hireme">
          <a className=" font-bold hover:text-gray-500">Hire me</a>
        </Link>
      </header>
      <main className="flex-1">
        <h1>{title}</h1>
        {children}
      </main>
      <footer className="flex justify-center bg-blue-200">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};
