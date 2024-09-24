import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function AuthErrorMsg(props) {
  const { error, handleClick } = props;

  return (
    <div className="w-full px-4 py-4 bg-[#ffebe9] border-[1px] border-[rgba(255,129,130,0.4)] text-primary text-[14px] flex flex-row items-center justify-between rounded-lg">
      <p>{error}</p>
      <button onClick={handleClick}>
        <CloseOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
}
