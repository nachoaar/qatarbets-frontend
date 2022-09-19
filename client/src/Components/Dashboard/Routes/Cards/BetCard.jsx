import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getGamblerId } from '../../../../redux/actions/dashboardActions/dashGamblerActions';
import { matchId } from '../../../../redux/actions/matchActions';

export const BetCard = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamblerId(props.userId))
    dispatch(matchId(props.matchId))
  },[dispatch, props]);

  const {gamblerId} = useSelector((store) => store?.dashgambler);
  const {match} = useSelector((store) => store.match);


  console.log(gamblerId)
  return (
    <div className="w-full h-auto flex flex-col gap-5">
          <div className="w-full h-24 bg-white">
            <table className="shadow font-titulodash text-sm text-textotable w-full h-full border-collapse border border-gristexto text-center table-fixed">
              <tbody>
                <tr>
                <th className="border border-gristexto bg-gris text-gristexto">USER</th>
                  <th className="border border-gristexto bg-gris text-gristexto">MATCH</th>
                  <th className="border border-gristexto bg-gris text-gristexto">PROFIT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">RESULT</th>
                  <th className="border border-gristexto bg-gris text-gristexto">BET</th>
                </tr>
                <tr>
                  <td className="border border-gristexto">{gamblerId[0]?.name}</td>
                  <td className="border border-gristexto">{`${match[0]?.home_team.name} vs ${match[0]?.away_team.name}`}</td>
                  <td className={`border border-gristexto ${props.final_profit > 0 ? "text-green-400" : "text-rojosec"}`}>{props.final_profit > 0 ? "Win" : "Lose"}</td>
                  <td className="border border-gristexto">{props.result}</td>
                  <td className="border border-gristexto">{props.money_bet}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
