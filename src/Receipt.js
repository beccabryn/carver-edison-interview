import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Receipt({ percent, income }) {
  const [savings, setSavings] = React.useState(0);
  const [expenses, setExpenses] = React.useState(0);

  React.useEffect(() => {
    // Do something
    setSavings(Math.floor((income / 12) * (1 - percent / 100)));
    setExpenses(Math.floor((income / 12) * (percent / 100)));
  }, [income, percent]);
  console.log(income, percent);
  return (
    <table className="table table-hover my-5">
      <tbody className="font-lato">
        <tr>
          <th className="text-left" scope="row">Your Election</th>
          <td className="text-right">{percent}%</td>
        </tr>
        <tr>
          <th className="text-left" scope="row">Your Income</th>
          <td className="text-right">${income}</td>
        </tr>
        <tr>
          <th className="text-left" scope="row">Your Expense</th>
          <td className="text-right">${expenses}</td>
        </tr>
        <tr>
          <th className="text-left" scope="row">Your Savings</th>
          <td className="text-right">${savings}</td>
        </tr>
      </tbody>
    </table>
  );
}
