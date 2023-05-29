import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact/100">Contact</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  );
}
export default Layout;
