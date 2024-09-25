export default function Card(props) {
  const { icon, title, description } = props;

  return (
    <div className="w-[100%] h-[300px] px-3 py-10 flex flex-col items-center justify-start gap-5 md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]">
      <div>{icon}</div>
      <div>
        <h1 className="text-center text-[20px] font-medium">{title}</h1>
      </div>
      <div>
        <h2 className="text-center">{description}</h2>
      </div>
    </div>
  );
}
