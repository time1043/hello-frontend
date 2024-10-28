import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return;
  <div className="flex py-5 items-center justify-between">
    <Link href="/">
      <Image src="/logo.png" alt="Logo" />
    </Link>
  </div>;
}
