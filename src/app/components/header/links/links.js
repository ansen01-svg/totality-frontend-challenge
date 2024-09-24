import Link from "next/link";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useMediaQuery } from "@mui/material";

export default function Links(props) {
  const { handleClick, user } = props;

  const mobileScreen = useMediaQuery("(max-width:1024px)");

  const tripsLinkContent = mobileScreen ? (
    <LuggageOutlinedIcon fontSize="small" />
  ) : (
    <p className="text-primary text-sm">Trips</p>
  );

  const userLinkContent = mobileScreen ? (
    <AccountCircleOutlinedIcon fontSize="small" />
  ) : (
    <p className="text-primary text-sm">{user ? user.username : "Sign in"}</p>
  );

  return (
    <div className="flex flex-row items-center justify-center gap-5 text-primary">
      <Link href={"/trips"}>{tripsLinkContent}</Link>
      <button onClick={handleClick}>{userLinkContent}</button>
    </div>
  );
}
