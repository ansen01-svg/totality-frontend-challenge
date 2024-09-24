import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo10.png";

export default function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={110} height={42} />
      </Link>
    </div>
  );
}
