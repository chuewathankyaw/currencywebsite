import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CryptoSummary } from "./CryptoSummary";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const [cryptos, setCryptos] = useState(null);
  const [selected, setSelected] = useState();
  const [data, setData] = useState();
  const [option, setOption] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Coin market",
      },
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCryptos(res.data);
         const defaultCrypto = res.data.find((crypto) => crypto.id === "bitcoin");
        setSelected(defaultCrypto);
        fetchChartData(defaultCrypto);
     
      });
  }, []);

  const fetchChartData = (crypto) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=eur&days=30&interval=daily&precision=2`
      )
      .then((res) => {
        setData({
          labels: res.data.prices.map((price) => {
            return moment.unix(price[0] / 1000).format("MM-DD-YYYY");
          }),
          datasets: [
            {
              label: "Dataset 1",
              data: res.data.prices.map((price) => {
                return price[1];
              }),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      });
  };

  return (
    <div className="my-10">
      <div>
        <select
          onChange={(e) => {
            const c = cryptos?.find((x) => x.id === e.target.value);
            setSelected(c);
            fetchChartData(c);
          }}
          defaultValue="bitcoin"
        >
          <option value="default">Choose an option</option>
          {cryptos
            ? cryptos.map((crypto) => {
                return (
                  <option key={crypto.id} value={crypto.id}>
                    {crypto.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      {selected ? <CryptoSummary crypto={selected} /> : null}

      {data ? (
        <div className="w-[300px] h-[400px] ss:w-[600px] chart-container">
          <Line options={option} data={data} />
        </div>
      ) : null}
    </div>
  );
};
