export default function Header({ title }) {
  return (
    <div className="w-full h-12 flex flex-row items-center justify-start">
      <h1 className="font-bold">{title}</h1>
    </div>
  );
}
