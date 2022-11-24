import NavbarComponent from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main className="d-flex flex-column bg-info">
      <NavbarComponent />
      {children}
    </main>
  );
};