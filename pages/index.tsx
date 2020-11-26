export default function IndexPage() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header__content">
            <h1 className="header__introduce">SIGMAVERSE</h1>
            <p className="header__paragraph">Your portal to the Ergo dApp universe</p>
          </div>
          <div>
            <img className="sigma-ergonaut" src="/images/Ergonaut_4k.png" alt="ergonaut" />
          </div>
        </div>
      </div>
      <div className="content">
        <input className="input" type="text" />
      </div>
    </div>
  );
}
