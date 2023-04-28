import { Link } from "react-router-dom";
import "../links/contact.scss";

export const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="contact">Kontakt</h1>
        <div className="contactpage">
          <div className="down">
            <h5 className="m-l"> Mail:</h5>
            <p className="kontakta">sebastian.bjelkstam@medieinstitutet.se</p>

            <div>
              <h5 className="m-l">Linkedin:</h5>
              <a
                className="kontakta"
                href="http://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b"
              >
                <p className="kontakta">
                  www.linkedin.com/in/sebastian-bjelkstam-aaa43125b
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
