import "../links/git.scss";

export const Git = () => {
  return (
    <>
      <h1 className="git">Git</h1>
      <div className="divgit">
        <div className="infodown">
          <p className="git-info">
            Här finns länken för att hitta dem projekt som jag har lagt upp på
            git
          </p>
          <div className="h-git">
            <p className="g-git">Github:</p>
            <a className="gg" href="https://github.com/Sebbe10">
              https://github.com/Sebbe10
            </a>
          </div>
        </div>
        <footer className="klfoot">
          <div>
            <h5 className="kl">Kontakta:</h5>
            <p className="kont">sebastian.bjelkstam@gmail.com</p>
          </div>
          <div>
            <h5 className="kl">Linkedin:</h5>
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
