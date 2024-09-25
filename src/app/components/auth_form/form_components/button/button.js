export default function Button(props) {
  const { title, disableBtn } = props;

  return (
    <div className="w-full flex items-center justify-center">
      <button
        type="submit"
        disabled={disableBtn}
        className="w-full h-[50px] bg-[#e71c28] text-white font-medium rounded-lg hover:bg-primaryLight disabled:bg-primaryLight"
      >
        {title}
      </button>
    </div>
  );
}
