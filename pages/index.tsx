import type { NextPage } from "next";
import { Flex } from "../components/Flex";

const Home: NextPage = () => {
  return (
    <div>
      <Flex gap={"4"} justify={"center"} items={"end"}>
        <div className=" bg-green-300">Apple</div>
        <div className="w-32 h-32 bg-yellow-300">Banana</div>
        <div className="w-44 h-44 bg-red-300">Orange</div>
      </Flex>

      <div className="flex gap-2 justify-center items-end bg-slate-200">
        <div className=" bg-green-300">Apple</div>
        <div className="w-32 h-32 bg-yellow-300">Banana</div>
        <div className="w-44 h-44 bg-red-300">Orange</div>
      </div>
    </div>
  );
};

export default Home;
