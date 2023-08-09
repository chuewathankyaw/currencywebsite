import PropTypes from "prop-types";

export const CurrencyInput = (props) => {
  return (
    <div className="mt-10 ">
      
      <input
        type="text"
        value={props.amount}
        onChange={(event) => props.onAmountChange(event.target.value)}
        placeholder="amount"
        className="bg-white p-3	border-black border-y-2 mr-2"
      />

      <select
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
        className="bg-white py-3"
      >
        {props.currencies.map((currency,index) => (
          <option key={index} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
