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
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarRounds } from "../Utils/SidebarRounds";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { Bench } from "./Bench/Bench";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";

export const DetailRounds = () => {
  let { id, stage } = useParams();

  const dispatch = useDispatch();

  const matchesOctavos = useSelector(
    (state) => state.fixture.fixtureRoundOf16[8]
  );
  const matchesCuartos = useSelector((state) => state.fixture.fixtureRoundOf8);
  const matchesSemis = useSelector((state) => state.fixture.fixtureRoundOf4);
  const matchesFinal = useSelector((state) => state.fixture.fixtureRoundOf2);

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
  if (stage === "Final") {
    match = matchesFinal?.find((m) => m.id === Number(id));
    matches = matchesFinal;
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

  const nameGroups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  //para el modal
  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);


  useEffect(() => {
    dispatch(startingPlayersHome(idHome));
    dispatch(startingPlayersAway(idAway));
    dispatch(matchesHeadToHead(idHome, idAway));
    return() => {
      dispatch(startingPlayersClean())
    }
  }, [idHome, idAway]);

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />

      <div className="flex flex-row justify-center p-4 w-5/6 gap-3 h-auto mt-20">
        <div className="w-4/5">
          <div className="flex flex-row gap-2">
            <div className="w-7/12">
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
              />
            </div>
            <div className="w-5/12 h-max">
              <CardCity
                date={match?.date}
                city={match?.city}
                stadium_name={match?.stadium_name}
              />
            </div>
          </div>

          <div className="w-full flex flex-col h-auto mt-4">
            <TitleContentMedium title="Formacion de los equipos" />
            <Bench
              homeName={match?.home_name}
              awayName={match?.away_name}
              /*

               */
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
            <div className="w-full h-32 overflow-hidden flex items-center">
              <Slider />
            </div>
          </div>
        </div>

        <SidebarRounds stage={stage} fixture={matches} />
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
        <PaymentForm
          profit={profit}
          matchId={id}
          bet={bet}
        />
      </Modal>
    </div>
  );
};
