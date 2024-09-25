import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function User(props) {
  const { handleClick, user } = props;

  const userLinkContent = user ? (
    <div className="px-[9px] py-[3px] bg-[#999] rounded-full">
      <p className="text-white text-[12px]">{user.avatar}</p>
    </div>
  ) : (
    <AccountCircleOutlinedIcon fontSize="small" sx={{ color: "#999" }} />
  );

  return (
    <div>
      <button onClick={handleClick}>{userLinkContent}</button>
    </div>
  );
}
