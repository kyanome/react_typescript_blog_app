import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <header className="bg-[#333] text-white px-6 py-6 font-bold flex justify-between items-center">
          <Link to="/" className="ml-4">
            Blog
          </Link>
          <Link to="/contact" className="ml-4">
            お問い合わせ
          </Link>
        </header>
      </div>
      <div className="max-w-3xl mx-auto my-10 px-4">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
