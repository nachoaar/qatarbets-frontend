import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { matchesHeadToHead } from "../../redux/actions/matchActions";
import { Footer } from "../Footer/Footer";
import { Slider } from "../HomeComponent/Slider/Slider";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContent } from "../Utils/TitleContent";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { Bench } from "./Bench/Bench";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";
import {
  getGroupMatch,
  getMatchId,
} from "../../redux/actions/fixtureActions";
import {
  startingPlayersAway,
  startingPlayersClean,
  startingPlayersHome,
} from "../../redux/actions/playersActions";


export const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const match = useSelector((state) => state.fixture.fixtureMatchId);
  const idHome = match[0]?.home_team_id;
  const idAway = match[0]?.away_team_id;

  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  const groupId = match[0]?.groupId;
  const matchesGroup = useSelector((state) => state.fixture.fixtureFilter);

  const headToHead = useSelector((state) => state.match.matchesHeadToHead);

  const nameGroups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);

  useEffect(() => {
    dispatch(getMatchId(id));
    dispatch(getGroupMatch(groupId));
    return () => {
      dispatch(startingPlayersClean());
    };
  }, [id, groupId]);

  useEffect(() => {
    dispatch(startingPlayersHome(idHome));
    dispatch(startingPlayersAway(idAway));
    dispatch(matchesHeadToHead(idHome, idAway));
  }, [idHome, idAway]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col sm:flex-row justify-center sm:p-4 w-11/12 sm:w-5/6 gap-3 h-auto mt-20">
        <div className="w-full sm:w-4/5">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-7/12">
              <CardDetail
                home_team={match[0]?.home_team.name}
                away_team={match[0]?.away_team.name}
                group={nameGroups[groupId - 1]}
                date={match[0]?.date}
                profit_coef_home={match[0]?.profit_coef_home}
                profit_coef_draw={match[0]?.profit_coef_draw}
                profit_coef_away={match[0]?.profit_coef_away}
                openModal={openModalBet}
                setProfit={setProfit}
                setBet={setBet}
                headToHead={headToHead}
                status={match[0]?.status}
              />
            </div>
            <div className="w-full sm:w-5/12 h-max">
              <CardCity
                date={match[0]?.date}
                city={match[0]?.city}
                stadium_name={match[0]?.stadium_name}
                status={match[0]?.status}
                result_match={match[0]?.result_match}
              />
            </div>
          </div>

          <div className="w-full hidden sm:flex flex-col h-auto mt-4">
            <TitleContent title="Formacion de los equipos" />
            <Bench
              homeName={match[0]?.home_team.name}
              awayName={match[0]?.away_team.name}
              coachHome={match[0]?.home_team.coach}
              coachAway={match[0]?.away_team.coach}
            />
            <div className="w-full h-auto pb-4">
              {Object.entries(playersHome).length === 0 ? (
                <h2>no se cargo nada todavi</h2>
              ) : (
                <Court
                  playersGoalkeeperHome={playersHome[0]?.goalkeeper}
                  playersDefenderHome={playersHome[0]?.defenders}
                  playersMidfielderHome={playersHome[0]?.midfielder}
                  playersAttackersHome={playersHome[0]?.attackers}
                  playersGoalkeeperAway={playersAway[0]?.goalkeeper}
                  playersDefenderAway={playersAway[0]?.defenders}
                  playersMidfielderAway={playersAway[0]?.midfielder}
                  playersAttackersAway={playersAway[0]?.attackers}
                />
              )}
            </div>
          </div>
          <div className="w-full h-32 overflow-hidden flex items-center my-4 sm:my-0">
            <Slider />
          </div>
        </div>
        <div className="w-full sm:w-1/5">
          <SidebarMatch
            group={nameGroups[groupId - 1]}
            fixture={matchesGroup}
          />
        </div>
      </div>
      <Footer />

      <Modal isOpen={isOpenBet} closeModal={closeModalBet}>
        <TitleContentMedium title="simula tu apuesta" />
        <ProfitsPotentials
          profit={profit}
          home_team={match[0]?.home_team.name}
          away_team={match[0]?.away_team.name}
          date={match[0]?.date}
          bet={bet}
        />
        <TitleContentMedium title="realiza tu pago" />
        <PaymentForm profit={profit} matchId={id} bet={bet} />
      </Modal>
    </div>
  );
};
