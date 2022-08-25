import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <main className='LayoutMain'>
      <Outlet />
    </main>
  </>
)

export default Layout;
