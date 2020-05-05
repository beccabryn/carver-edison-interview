import React from "react";
import "./App.css";
import Auth from "./Auth";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <header className="bg-light">
        {!isLoggedIn ? (
          <button className="button">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img className="logo py-4" src="https://www.carveredison.com/static/img/CE_Header_Logo.png"/>
              <Auth handleLogIn={setIsLoggedIn} />
            </div>
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        ) : (
          <Main />
        )}
      </header>
    </div>
  );
}

export default App;
