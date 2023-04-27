import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import {SocketProvider} from "@/contexts/SocketContext";

export default function Layout({ children }) {

  return (
    <>
    <SocketProvider>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </SocketProvider>
    </>
  );
}