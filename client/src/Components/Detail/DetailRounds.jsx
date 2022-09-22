import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { matchesHeadToHead } from "../../redux/actions/matchActions";
import {
  startingPlayersAway,
  startingPlayersClean,
  startingPlayersHome,
} from "../../redux/actions/playersActions";
import { Footer } from "../Footer/Footer";
import { Slider } from "../HomeComponent/Slider/Slider";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { PaymentFormRound } from "../PaymentForm/PaymentFormRound";
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarRounds } from "../Utils/SidebarRounds";
import { TitleContent } from "../Utils/TitleContent";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { Bench } from "./Bench/Bench";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";

export const DetailRounds = () => {
  let { id, stage } = useParams();

  const dispatch = useDispatch();

  const matchesOctavos = useSelector(
    (state) => state.fixture.fixtureRoundOf16
  );
  const matchesCuartos = useSelector((state) => state.fixture.fixtureRoundOf8);
  const matchesSemis = useSelector((state) => state.fixture.fixtureRoundOf4);
  const matchThirdPlace = useSelector(
    (state) => state.fixture.fixtureThirdPlaceMatch
  );
  const matchFinal = useSelector((state) => state.fixture.fixtureFinalMatch);

  let match = [];
  let matches = [];

  if (stage === "Octavos") {
    match = matchesOctavos?.find((m) => m.id === Number(id));
    matches = matchesOctavos;
  }
  if (stage === "Cuartos") {
    match = matchesCuartos?.find((m) => m.id === Number(id));
    matches = matchesCuartos;
  }
  if (stage === "Semis") {
    match = matchesSemis?.find((m) => m.id === Number(id));
    matches = matchesSemis;
  }
  if (stage === "Tercer") {
    match = matchThirdPlace;
    matches = matchThirdPlace;
  }
  if (stage === "Final") {
    match = matchFinal;
    matches = matchFinal;
  }

  console.log("partido filtrado");
  console.log(match);

  //obtengo el id de los equipos del match
  const idHome = match?.home_team_id;
  const idAway = match?.away_team_id;

  //obtengo los players por equipo
  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  const headToHead = useSelector((state) => state.match.matchesHeadToHead);

  //para el modal
  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);

  useEffect(() => {
    dispatch(startingPlayersHome(idHome));
    dispatch(startingPlayersAway(idAway));
    dispatch(matchesHeadToHead(idHome, idAway));
    return () => {
      dispatch(startingPlayersClean());
    };
  }, [idHome, idAway]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col sm:flex-row justify-center sm:p-4 w-11/12 sm:w-5/6 gap-3 h-auto mt-20">
        <div className="w-full sm:w-4/5">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-7/12">
              <CardDetail
                home_team={match?.home_name}
                away_team={match?.away_name}
                date={match?.date}
                profit_coef_home={match?.profit_coef_home}
                profit_coef_draw={match?.profit_coef_draw}
                profit_coef_away={match?.profit_coef_away}
                openModal={openModalBet}
                setProfit={setProfit}
                setBet={setBet}
                headToHead={headToHead}
                stage={match?.stage}
                status={match?.status}
              />
            </div>
            <div className="w-full sm:w-5/12 h-max">
              <CardCity
                date={match?.date}
                city={match?.city}
                stadium_name={match?.stadium_name}
                status={match?.status}
                result_match={match?.result_match}
              />
            </div>
          </div>

          <div className="w-full hidden sm:flex flex-col h-auto mt-4">
            <TitleContent title="Formacion de los equipos" />
            <Bench
              homeName={match?.home_name}
              awayName={match?.away_name}
              coachHome={playersHome[0]?.coach[0]}
              coachAway={playersAway[0]?.coach[0]}
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
          <div className="w-full h-32 overflow-hidden flex items-center">
            <Slider />
          </div>
        </div>
        <div className="w-full sm:w-1/5">
          <SidebarRounds stage={stage} fixture={matches} />
        </div>
      </div>
      <Footer />

      <Modal isOpen={isOpenBet} closeModal={closeModalBet}>
        <TitleContentMedium title="simula tu apuesta" />
        <ProfitsPotentials
          profit={profit}
          home_team={match?.home_name}
          away_team={match?.away_name}
          date={match?.date}
          bet={bet}
        />

        <TitleContentMedium title="realiza tu pago" />
        <PaymentFormRound profit={profit} matchId={id} bet={bet} />
      </Modal>
    </div>
  );
};
