import Logo from "../logo/logo";

export default function Header() {
  return (
    <div className="max-w-full h-14 px-6 flex items-center justify-start bg-white sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16 lg:px-12">
      <Logo />
    </div>
  );
}
