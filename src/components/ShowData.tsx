import { fetchData1 } from "../data/fetchData1";
import { useData } from "../hooks/useData";
import React from "react";

export const ShowData: React.FC<{
  dataKey: number;
}> = ({ dataKey }) => {
  const data = useData(`ShowData:${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
