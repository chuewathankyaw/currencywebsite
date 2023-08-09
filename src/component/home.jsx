import { useEffect, useState } from "react";
import { CurrencyInput } from "./CurrencyInput";
import axios from "axios";
import { Chart } from "./chart";
import { AboutusHome } from "./AboutusYear";
export const Home = () => {
  const [amount1, setAmount1] = useState(0.0);
  const [amount2, setAmount2] = useState(0.0);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("MMK");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=74e68560cbfd0bc363772acc1fa94478"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }
  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  function format(number) {
    return number.toFixed(4);
  }

  return (
    <>
      <div className="banner">
        <h1 className="text-white font-bold text-[52px] pt-10"> Anbuchi</h1>
        <div className=" ss:flex justify-center items-center gap-20">
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </div>
      <Chart />
    </>
  );
};
