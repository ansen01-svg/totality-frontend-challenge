import { cookies } from "next/headers";
import HeaderContent from "./header_content";
import Logo from "./logo/logo";
import verifySession from "@/app/_lib/global/data_access_layer";

export default async function Header() {
  const token = cookies().get("token")?.value || "";
  const sessionData = await verifySession();

  return (
    <div className="max-w-full h-14 px-6 flex items-center justify-between bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16 lg:px-20">
      <Logo />
      <HeaderContent token={token} sessionData={sessionData} />
    </div>
  );
}
