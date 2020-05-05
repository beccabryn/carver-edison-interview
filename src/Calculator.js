import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import './App.css';


const useSliderStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    color: "#f28a1b"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const useFormStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "50vw",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50vw",
  },
}));

let marks = [];
for (let i = 1; i <= 30; i++) {
  if (i === 1 || i % 5 === 0) {
    marks.push({ value: i, label: `${i}%` });
  } else {
    marks.push({ value: i });
  }
}

function valuetext(value) {
  return `${value}%`;
}

export default function Calculator({income, setIncome, percent, setPercent, nextPage}) {
  const sliderClasses = useSliderStyles();
  const formClasses = useFormStyles();
  const [savings, setSavings] = React.useState(0);

  React.useEffect(() => {
    // Do something
    setSavings(Math.floor((income / 12) * (1 - percent / 100)));
  }, [income, percent]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="my-5">
        <div className={sliderClasses.root}>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={marks}
            max={30}
            min={1}
            value={percent}
            onChange={(e, val) => setPercent(val)}
            valueLabelDisplay="on"
          />
        </div>
      </div>
      <div className={formClasses.root}>
        <div>
          <FormControl
            fullWidth
            className={formClasses.margin}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              Annual Income
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={income}
              type="number"
              onChange={(e) => setIncome(parseInt(e.target.value))}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={110}
            />
          </FormControl>
          <FormControl
            fullWidth
            className={formClasses.margin}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              Your Expense
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={Math.floor((income / 12) * (percent / 100))}
              type="number"
              onChange={(e) => setIncome(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={110}
              disabled={true}
            />
          </FormControl>
          <FormControl
            fullWidth
            className={formClasses.margin}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              Your Savings
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={Math.floor((income / 12) * (1 - percent / 100))}
              type="number"
              onChange={(e) => setIncome(e.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={110}
              disabled={true}
            />
          </FormControl>
        </div>
      </div>
      {income > 0 ? (
        <a href="#review" className="scroll-down" address="true" onClick={() => nextPage()}></a>
      ) : (
        null
      )}
    </div>
  );
}
