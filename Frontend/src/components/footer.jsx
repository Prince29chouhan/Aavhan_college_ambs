import React from "react";
import '../index.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="banner">
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded  dark:text-dark">
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/about"} className="link link-hover">About us</Link>
          <a className="link link-hover">Contact</a>
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 dark:bg-slate-800 dark:text-white">
            <a href="https://www.instagram.com/aavhan_iitb?igsh=MXJmZ2Z6NTV4bHhwNw==">
              <img src="../../public/insta.png" alt="vhvkh" className="h-6 w-6"/>
            </a>
            <a href="https://youtube.com/@aavhaniitbombay1940">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/aavhan.iitb/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Prince</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
