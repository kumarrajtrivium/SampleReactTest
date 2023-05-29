import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import NoPage from "./Page/NoPage";
import Layout from "./Page/Layout";
import About from "./Page/About";
import Blog from "./Page/Blog";

const AfterLogin = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact/:id" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default AfterLogin;
