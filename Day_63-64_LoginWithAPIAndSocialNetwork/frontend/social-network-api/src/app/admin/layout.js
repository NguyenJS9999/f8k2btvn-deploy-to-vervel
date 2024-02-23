export const metadata = {
  title: "Trang quản trị",
};
const AdminLayout = ({ children }) => {
  return (
    <>
      {/* <header>
        <h1>HEADER ADMIN</h1>
      </header> */}
      {children}
      {/* <footer>
        <h1>FOOTER ADMIN</h1>
      </footer> */}
    </>
  );
};

export default AdminLayout;
