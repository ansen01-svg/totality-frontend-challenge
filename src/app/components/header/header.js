import { cookies } from "next/headers";
import HeaderContent from "./header_content";
import Logo from "../logo/logo";

export default async function Header() {
  const token = cookies().get("token")?.value || "";

  return (
    <div className="max-w-[100vw] h-14 px-6 flex items-center justify-between bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16 lg:px-12">
      <Logo />
      <HeaderContent token={token} />
    </div>
  );
}
