import React from "react";

export const CardLarge = () => {
  return (
    <div className="h-60 wid-auto md:w-4/12 p-4">
      <div className="h-full  bg-redApp flex flex-col justify-between py-2 px-4">
        <div className="bg-white">
          <h1>2022-11-20</h1>
        </div>{" "}
        <div className="bg-white flex flex-row justify-between">
          <p>FIFA WORLD CUP</p>
          <span>Group Stage - 1</span>
        </div>
        <div className="bg-white flex flex-row justify-between">
          <div>
            <div>
              <p>bandera</p>
            </div>
            <h3>Argentina</h3>
          </div>
          <h3>Vs</h3>
          <div>
            <h3>Brazil</h3>
            <div>
              <p>bandera</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-1/4 bg-slate-200">
            <p>home: 1.40</p>
          </div>
          <div className="w-1/4 bg-slate-200">
            <p>draw: 2</p>
          </div>
          <div className="w-1/4 bg-slate-200">
            <p>away: 3.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
