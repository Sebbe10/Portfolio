import "../links/cv.scss";
export const Cv = () => {
  return (
    <>
      <h1 className="cv">CV</h1>
      <div className="cvpage">
        <div className="thecv">
          <div className="kontaktuppgifter">
            <h4 className="k4"> Kontaktuppgifter</h4>
            <h5>
              <p className="m-mail"> Mail:</p>
              <p>sebastian.bjelkstam@medieinstitutet.se</p>
            </h5>
            <h5>
              <p className="l-linkedin">Linkedin</p>
              <a
                className="l"
                href="http://www.linkedin.com/in/sebastian-bjelkstam-aaa43125b"
              >
                www.linkedin.com/in/sebastian-bjelkstam-aaa43125b
              </a>
            </h5>

            <h5>
              <p className="g-github">Github:</p>
              <a className="g" href="https://github.com/Sebbe10">
                https://github.com/Sebbe10
              </a>
            </h5>
          </div>
          <div className="kompetenser">
            <h4 className="k5">Kompetenser</h4>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>SASS</h5>
            <h5>JavaScript</h5>
            <h5>Typescript</h5>
            <h5>React</h5>
            <h5>MySQL</h5>
            <h5>Api</h5>
          </div>
          <div className="thetext">
            <h2>Namn: Sebastian Bjelkstam</h2>
            <h3>
              Studerar Webbutveckling e-handel på Medieinstitutet, Stockholm{" "}
            </h3>
            <p>
              Hej jag heter Sebastian och studerar Webbutveckling e-handel på
              Medieinstitutet. Utbildningen är två år och målet efter denna
              utbildning är att jag vill bli frontendutvecklare. Som student på
              Medieinstitutet så söker jag nu LIA/praktikplats inför min
              kommande LIA som börjar hösten den 16 oktober. När det gäller mina
              egenskaper så skulle jag säga är att jag alltid är i tid, ger inte
              upp så enkelt och vill alltid lära mig något nytt. Vill också
              alltid bli bättre och bättre för varje dag med det jag håller på
              med.
            </p>
            <hr />
            <h3>
              Utbildning: 2022–2024, Webbutveckling e-handel, Medieinstitutet,
              Stockholm
            </h3>
            <p>September 2022-09-19 till 2024-05-24 2021–2022,</p>
            <hr />

            <h3>2021–2022, Halmstad högskola, Halmstad</h3>
            <p>
              På Halmstad högskola så läste jag tekniskt basår men märkte ganska
              snabbt att det inte var min grej där läste jag kurserna matte 3c,
              matte 4c, fysik 1, fysik 2 och kemi 1. Utbildningen var ändå
              lärorik.
            </p>
            <h3>2018–2021, Nacka gymnasium, Stockholm</h3>
            <p>
              På Nacka gymnasium läste jag bygg och anläggning i tre år. Där
              praktiserade jag 3 dagar i veckan från andra året ända fram till
              utbildningen var slut.
            </p>
          </div>
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
    </>
  );
};
