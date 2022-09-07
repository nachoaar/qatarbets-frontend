import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startingPlayersClean } from "../../../redux/actions/playersActions";

export const Court = ({
  playersGoalkeeperHome,
  playersDefenderHome,
  playersMidfielderHome,
  playersAttackersHome,
  playersGoalkeeperAway,
  playersDefenderAway,
  playersMidfielderAway,
  playersAttackersAway,
}) => {

  const dispatch = useDispatch()

/*   useEffect(() => {
    return () => {
      dispatch(startingPlayersClean());
    };
  }, []); */

  useEffect( () => () => dispatch(startingPlayersClean()), [] );


  return (
    <div className="w-full h-full flex flex-row bg-green-600 gap-4">
      {/* EQUIPO LOCAL */}
      <div className="w-1/2 h-auto flex flex-row justify-between ">
        <div className="h-full w-auto flex flex-col items-center justify-around px-2 ">
          <div className="rounded-full overflow-hidden hover:w-40 hover:h-40 hover:bg-slate-300 transition duration-700 ease-in-out hover:rounded-none">
            <img
              src={ playersGoalkeeperHome && playersGoalkeeperHome[0].photo}
              alt=""
              className="h-12 w-12"
            />
          </div>
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersDefenderHome && playersDefenderHome.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersMidfielderHome && playersMidfielderHome.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          {playersAttackersHome && playersAttackersHome.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
      </div>
      {/* EQUIPO VISITANTE */}
      <div className="w-1/2 h-auto flex flex-row justify-between">
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          { playersAttackersAway && playersAttackersAway.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          { playersMidfielderAway && playersMidfielderAway.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          { playersDefenderAway && playersDefenderAway.map((p) => {
            return (
              <div className="rounded-full overflow-hidden">
                <img src={p.photo} alt="" className="h-12 w-12" />
              </div>
            );
          })}
        </div>
        <div className="h-full w-auto flex flex-col items-center justify-around px-2">
          <div className="rounded-full overflow-hidden">
            <img
              src={ playersGoalkeeperAway && playersGoalkeeperAway[0].photo}
              alt=""
              className="h-12 w-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
