import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div className="relative bg-gradient-to-r from-[#F0DBDB] from-10% via-[#F5EBE0] via-30% to-[#F8F4EA] to-90% h-[100vh]">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
