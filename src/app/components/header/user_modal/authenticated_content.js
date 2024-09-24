import { useRouter } from "next/navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function AuthenticatedContent(props) {
  const { user, sessionData, handleClose } = props;

  return (
    <div className="w-[300px] py-7 flex flex-col items-center justify-center gap-4">
      <UserDetailsHolder user={user} />
      <div className="w-full h-[1px] bg-slate-200"></div>
      {sessionData.role && sessionData.role === "Admin" && (
        <FleetManagement sessionData={sessionData} handleClose={handleClose} />
      )}
      <SignOutBtnHolder handleClose={handleClose} />
    </div>
  );
}

function UserDetailsHolder({ user }) {
  return (
    <div className="w-full px-5 flex flex-row items-start justify-center gap-4">
      <div>
        <AccountCircleOutlinedIcon fontSize="large" />
      </div>
      <div className="flex-1  flex flex-col items-start justify-center gap-2">
        {user && <p className="text-[14px] font-semibold">{user.username}</p>}
        {user && <p className="text-[12px]">{user.email}</p>}
      </div>
    </div>
  );
}

export function FleetManagement({ handleClose }) {
  const router = useRouter();

  const handleClick = () => {
    handleClose();
    router.push("/fleet");
  };

  return (
    <div className="w-full px-5 text-[14px]">
      <button className="w-full text-left" onClick={handleClick}>
        Admin panel
      </button>
    </div>
  );
}

export function SignOutBtnHolder({ handleClose }) {
  // sign out
  const signOut = async () => {
    handleClose();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signout`,
        { cache: "no-store" }
      );

      if (response.status === 200) {
        // handleClose();
        sessionStorage.clear();
        window.location.reload();
      } else {
        const data = await response.json();
        console.log(data);
        // handleClose();
        return;
      }
    } catch (error) {
      console.log(error);
      // handleClose();
    }
  };

  return (
    <div className="w-full px-5 text-[14px]">
      <button className="w-full text-left" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}
