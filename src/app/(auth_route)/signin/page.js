import Content from "./page_content";

export const metadata = {
  title: "Sign In to Your Account | Carko.in",
  description:
    "Access your Carko.in account to manage bookings, view rental history, and enjoy personalized services. Sign in now for a seamless rental experience.",
};

export default function SignUp() {
  return (
    <div className="max-w-full mt-[50px] flex flex-col items-center justify-center">
      <Content />
    </div>
  );
}
