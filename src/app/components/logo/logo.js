import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href={"/"} className="text-[22px] font-medium">
        EasyRentals
      </Link>
    </div>
  );
}
