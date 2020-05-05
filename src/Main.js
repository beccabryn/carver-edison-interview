import React from "react";
import Calculator from "./Calculator";
import Receipt from "./Receipt";
import "bootstrap/dist/css/bootstrap.css";

function Main() {
  const [income, setIncome] = React.useState(0);
  const [percent, setPercent] = React.useState(1);
  const [page, setPage] = React.useState(0);
  if (page == 0) {
    return (
      <div className="section1">
        <section className="row m-0 viewport" id="intro">
          <div className="col d-flex align-items-center justify-content-center">
            <p className="header font-size-34">Let's calculate your savings!</p>
            <a
              onClick={() => setPage(1)}
              href="#calculator"
              className="scroll-down"
            ></a>
          </div>
        </section>
      </div>
    );
  }
  if (page == 1) {
    return (
      <div className="section2">
        <section id="calculator" className="ok row m-0 viewport">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="header font-size-34">
                Welcome to your monthly budget:
              </p>
              <Calculator
                setIncome={setIncome}
                setPercent={setPercent}
                income={income}
                percent={percent}
                nextPage={() => setPage(page + 1)}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (page == 2) {
    return (
      <div className="section3">
        <section id="review" className="ok row m-0 viewport w-100">
          <div className="section3 d-flex flex-column align-items-center justify-content-center w-40">
            <p className="header font-size-34">Your Receipt</p>
            <Receipt income={income} percent={percent} />
            <a
              onClick={() => setPage(page - 1)}
              href="#calculator"
              className="modify font-lato font-size-20 text-decoration-none"
            >
              Modify Settings
            </a>
          </div>
        </section>
      </div>
    );
  }
  return <div></div>;
}

export default Main;
