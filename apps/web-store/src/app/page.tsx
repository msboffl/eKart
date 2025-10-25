import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello eKart</h1>
      <div className="flex gap-6 flex-col">
        <Link href="/signin">Go to Sign In Page</Link>
        <Link href="/signup">Go to Sign Up Page</Link>
      </div>
    </>
  );
}
