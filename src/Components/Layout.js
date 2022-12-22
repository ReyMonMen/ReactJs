import NavbarComponent from "./NavBar";

const Layout = ({ children }) => {
  return (
    <main className="d-flex flex-column bg-light">
      <NavbarComponent />
      {children}
    </main>
  );
};

export default Layout;