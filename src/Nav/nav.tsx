import { Link } from "react-router-dom";

import "../Nav/nav.scss";
import { useEffect } from "react";

export const Nav = () => {
  useEffect(() => {
    let menu = document.querySelector(".menu") as HTMLElement;
    let open = document.querySelector("#open") as HTMLElement;
    let close = document.querySelector("#close") as HTMLElement;

    if (open) {
      open.onclick = () => {
        menu?.classList.add("active");
      };
    }

    if (close) {
      close.onclick = () => {
        menu?.classList.remove("active");
      };
    }
  });

  return (
    <>
      <div className="openlin">
        <a href="http://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b">
          <i className="bi bi-linkedin"></i>
        </a>
        <i className="fa-solid fa-bars" id="open"></i>
      </div>
      <nav className="menu">
        <i className="fa-solid fa-x" id="close"></i>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/git">Git</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/cv">Cv</Link>
          </li>
        </ul>
      </nav>

      <nav className="bigmenu">
        <ul className="bigmenu-ul">
          <li className="bigmenu-li">
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/git">Git</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/cv">Cv</Link>
          </li>
          <a href="http://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </ul>
      </nav>
    </>
  );
};
