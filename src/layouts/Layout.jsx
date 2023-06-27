import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
