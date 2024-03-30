"use client";

import { useState } from "react";

function page() {
  const [info, setInfo] = useState<any>(null);
  const bringHandle = async () => {
    const res = await fetch("http://localhost:3000/api/todos");
    const data = await res.json();
    setInfo(data);
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <button
        className="w-[150px] py-[15px] rounded-2xl bg-green-600 tracking-[2px] text-center text-white text-[24px] mb-[20px]"
        onClick={bringHandle}
      >
        Bring ⬅
      </button>
      <ul>
        {info &&
          info.map((inf: object) => {
            return (
              <li
                className="w-full max-w-[300px] text-red-900 py-[13px] rounded-2xl px-[20px] "
                key={inf.id}
              >
                {inf.id}. {inf.text}, completed:{" "}
                {inf.completed ? "true" : "false"}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default page;
