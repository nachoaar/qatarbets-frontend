import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
<<<<<<< HEAD
import { getGroupMatch } from "../../redux/actions/fixtureActions";
import { groupById } from "../../redux/actions/groupActions";
import { matchClean, matchId } from "../../redux/actions/matchActions";
=======
import {
  getGroupMatch,
  getMatchId,
  matchIdClean,
} from "../../redux/actions/fixtureActions";
import { matchesHeadToHead } from "../../redux/actions/matchActions";
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
import {
  startingPlayersAway,
  startingPlayersClean,
  startingPlayersHome,
} from "../../redux/actions/playersActions";
import { Footer } from "../Footer/Footer";
<<<<<<< HEAD
import FormLogin from "../Forms/FormLogin/FormLogin";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
=======
import { Slider } from "../HomeComponent/Slider/Slider";
import Modal from "../Modal/Modal";
import { Navbar } from "../Navbar/Navbar";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { ProfitsPotentials } from "../Utils/ProfitsPotentials";
import { SidebarMatch } from "../Utils/SidebarMatch";
import { TitleContent } from "../Utils/TitleContent";
import { TitleContentMedium } from "../Utils/TitleContentMedium";
import { Bench } from "./Bench/Bench";
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
import { CardDetail } from "./CardDetail/CardDetail";
import { CardCity } from "./CaredCity/CardCity";
import { Court } from "./Court/Court";

export const Detail = () => {
<<<<<<< HEAD
  /* const [isOpenLogin, openModalLogin, closeModalLogin] = useModal(false); */
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);
=======
  let { id } = useParams();
  /*  console.log("id del partido - " + id); */
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3

  let { id } = useParams();
  const dispatch = useDispatch();

<<<<<<< HEAD
  let { match } = useSelector((store) => store.match);
  let { groupId } = useSelector((store) => store.group);
  let { fixtureFilter } = useSelector((store) => store.fixture);
  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  let group = match[0]?.groupId;
  let homeId = match[0]?.home_team_id;
  let awayId = match[0]?.away_team_id;

  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");

    useEffect( () => {
    window.scrollTo(0, 0);
    dispatch(matchId(id));
    dispatch(startingPlayersHome(homeId));
    dispatch(startingPlayersAway(awayId));
    dispatch(groupById(group));
    dispatch(getGroupMatch(group));
    return () => {
      dispatch(startingPlayersClean());
    };
  }, [awayId, dispatch, group, homeId, id]);

=======
  //miramos el match
  const match = useSelector((state) => state.fixture.fixtureMatchId);
  /*   console.log("match");
  console.log(match); */

  //obtengo el id de los equipos del match
  const idHome = match[0]?.home_team_id;
  const idAway = match[0]?.away_team_id;

  let playersHome = useSelector((store) => store.players.startingPlayersHome);
  let playersAway = useSelector((store) => store.players.startingPlayersAway);

  const groupId = match[0]?.groupId; //obtengo el id del grupo del partido
  /*   console.log("grupo id");
  console.log(groupId); */

  //miramos los partidos del grupo
  const matchesGroup = useSelector((state) => state.fixture.fixtureFilter);
  /*   console.log("partidos por grupo");
  console.log(matchesGroup); */

  const headToHead = useSelector((state) => state.match.matchesHeadToHead);

  const nameGroups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  //para el modal
  const [profit, setProfit] = useState(0);
  const [bet, setBet] = useState("");
  const [betEng, setBetEng] = useState("");
  const [isOpenBet, openModalBet, closeModalBet] = useModal(false);

  useEffect(() => {
    /* window.scrollTo(0, 0); */
    dispatch(getMatchId(id)); //obtengo el partido
    dispatch(getGroupMatch(groupId)); //action que obtiene todos los partidos del grupo pasado por parametro
    return () => {
      dispatch(startingPlayersClean());
      /* dispatch(matchIdClean()) */
    };
  }, [id, groupId]);

  useEffect(() => {
    dispatch(startingPlayersHome(idHome));
    dispatch(startingPlayersAway(idAway));
    dispatch(matchesHeadToHead(idHome, idAway));
  }, [idHome, idAway]);
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3

  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />

<<<<<<< HEAD
      <div className="flex flex-row justify-center p-4 w-5/6 gap-3 h-auto mt-20">
        <div className="w-4/5">
          <div className="flex flex-row gap-2">
            <div className="w-7/12">
=======
      <div className="flex flex-col sm:flex-row justify-center sm:p-4 w-11/12 sm:w-5/6 gap-3 h-auto mt-20">
        <div className="w-full sm:w-4/5">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-7/12">
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
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
<<<<<<< HEAD
=======
                headToHead={headToHead}
                status={match[0]?.status}
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
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

<<<<<<< HEAD
          <div className="w-full flex flex-col h-auto mt-4">
            <TitleContentMedium title="Formacion de los equipos" />
            <div className="w-full h-auto">
=======
          <div className="w-full hidden sm:flex flex-col h-auto mt-4">
            <TitleContent title="Formacion de los equipos" />
            <Bench
              homeName={match[0]?.home_team.name}
              awayName={match[0]?.away_team.name}
              coachHome={match[0]?.home_team.coach}
              coachAway={match[0]?.away_team.coach}
            />
            <div className="w-full h-auto pb-4">
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
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
<<<<<<< HEAD
=======
        <TitleContentMedium title="simula tu apuesta" />
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
        <ProfitsPotentials
          profit={profit}
          home_team={match[0]?.home_team.name}
          away_team={match[0]?.away_team.name}
          date={match[0]?.date}
          bet={bet}
        />
<<<<<<< HEAD
        <FormLogin />
=======
        {/* <FormLogin /> */}
        <TitleContentMedium title="realiza tu pago" />
        <PaymentForm profit={profit} matchId={id} bet={bet} />
>>>>>>> 4ad1b23bda8c71fee707dc813af42ec63360a2e3
      </Modal>
    </div>
  );
};
