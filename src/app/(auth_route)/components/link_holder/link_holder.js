import Link from "next/link";

export default function LinkHolder(props) {
  const { linkText, linkTo, linkTitle } = props;

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <p className="text-[13px] text-primary">
        {linkText}&nbsp;
        <Link href={linkTo} className="text-blue underline">
          {linkTitle}
        </Link>
      </p>
    </div>
  );
}
