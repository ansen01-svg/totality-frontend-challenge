import { useRouter } from "next/navigation";

export default function UnauthenticatedContent({ handleClose }) {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
    handleClose();
  };

  return (
    <div className="w-[250px] px-5 py-7 flex flex-col items-center justify-center gap-4">
      <button
        className="w-full h-8 bg-[#e71c28] rounded text-white text-[14px]"
        onClick={() => handleClick("/signin")}
      >
        Sign in
      </button>
      <button
        className="w-full text-[14px] text-blue"
        onClick={() => handleClick("/signup")}
      >
        Create an account
      </button>
    </div>
  );
}
