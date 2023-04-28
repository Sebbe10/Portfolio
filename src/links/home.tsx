import "../links/home.scss";

export const Home = () => {
  return (
    <>
      <div className="homewidthheight">
        <h1 className="home">Home</h1>
        <div className="homepage">
          <div>
            <p className="divhome">Hej och välkommen till mitt portfolio</p>
          </div>

          <footer className="klfooter">
            <div>
              <h5>Kontakta:</h5>
              <p className="kont">sebastian.bjelkstam@gmail.com</p>
            </div>
            <div>
              <h5>Linkedin:</h5>
              <a href="http://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b">
                <p className="lin">
                  www.linkedin.com/in/sebastian-bjelkstam-aaa43125b
                </p>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
