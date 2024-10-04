import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <p>Hello oswin!</p>

      <Link href="/blog">blog</Link>
      <br />
      <Link href="/book">book</Link>
      <br />
      <Link href="/docs">docs</Link>
    </div>
  );
}

export default Home;
