import axios from "axios";
import { useEffect, useState } from "react";
import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'

export const CurrencyList = () => {
  const [data, setData] = useState({ rates: {} });
  const [symbols, setSymbols] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=74e68560cbfd0bc363772acc1fa94478"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
     axios
       .get(
         "http://data.fixer.io/api/symbols?access_key=74e68560cbfd0bc363772acc1fa94478"
       )
       .then((res) => setSymbols(res.data.symbols))
       .catch((err) => console.log(err));
  },[]);
  return (
    <div className="currencybanner pb-20 pt-10">
      <h1 className="text-[40px] font-bold ">Currency List</h1>
      <p className="text-red-500 mb-5 font-bold">
        1 EUR is the base Currency for these exchange rate !
      </p>
      <Table variant="simple" mx="auto" borderWidth="1px" borderColor="black">
        <Thead className="">
          <Tr className="bg-blue-200">
            <Th borderWidth="1px" borderColor="black" className="w-[20rem]">
              Full Name
            </Th>
            <Th borderWidth="1px" borderColor="black" className="w-[20rem]">
              Short Symbols
            </Th>
            <Th borderWidth="1px" borderColor="black" className="w-[20rem]">
              Price
            </Th>
          </Tr>
        </Thead>
        <Tbody borderWidth="1px" borderColor="black">
          {Object.keys(data.rates).map((currencyCode, index) => (
            <Tr key={index} borderWidth="1px" borderColor="black">
              <Td borderWidth="1px" borderColor="black">
                {symbols[currencyCode] ? symbols[currencyCode] : currencyCode}
              </Td>
              <Td borderWidth="1px" borderColor="black">
                {currencyCode}
              </Td>
              <Td>{data.rates[currencyCode]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
   
    </div>
  );
};
