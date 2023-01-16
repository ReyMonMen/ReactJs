import NavbarComponent from "./NavBar";

const Layout = ({ children }) => {
  return (
    <main className="d-flex flex-column bg-light">
      <NavbarComponent />
      <section>{children}</section>
    </main>
  );
};

export default Layout;