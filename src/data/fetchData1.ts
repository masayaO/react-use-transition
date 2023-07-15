import { sleep } from "../utils/sleep";

export const fetchData1 = async () => {
  await sleep(Math.floor(Math.random() * 1000));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
};
