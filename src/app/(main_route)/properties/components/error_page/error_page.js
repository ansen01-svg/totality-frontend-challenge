import Link from "next/link";

export default function Error() {
  return (
    <div className="w-full h-[68vh] px-6 text-[15px] lg:px-12 flex flex-col items-center justify-center gap-1">
      <p>An error occured.</p>
      <p>Restart your search process again.</p>
      <Link href="/" className="underline text-primary">
        Go Back To Home
      </Link>
    </div>
  );
}
