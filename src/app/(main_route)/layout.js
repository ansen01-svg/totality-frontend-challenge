import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { CartProvider } from "../store_provider";

export default function MainLayout({ children }) {
  return (
    <>
      <CartProvider>
        <Header />
        <div>{children}</div>
      </CartProvider>
      <Footer />
    </>
  );
}
