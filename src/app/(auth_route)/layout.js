import Header from "../components/auth_header/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
