import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";
import { SectionThree } from "./SectionThree";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFixture,
  getMatchesPerGroup,
} from "../../redux/actions/fixtureActions";
import { getTeams } from "../../redux/actions/teamActions";
import { getGroups } from "../../redux/actions/groupActions";
import { startingAllPlayers } from "../../redux/actions/playersActions";
import { matchesMostBets } from "../../redux/actions/matchActions";

export const LandingPage = () => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams.teams);
  const numerosId = teams?.map((t) => t.id);
  console.log("numerosId");
  console.log(numerosId);

  const allPlayers = useSelector((state) => state.players?.allStartingPlayers);

  useEffect(() => {
    dispatch(getFixture()).then((result) => dispatch(getMatchesPerGroup()));
    dispatch(getTeams())/* .then((result) => {
      if (allPlayers.length < 1) {
        dispatch(startingAllPlayers(numerosId));
      }
    }); */
    dispatch(getGroups());
    dispatch(matchesMostBets());
  }, [dispatch]);

  useEffect(() =>{
    dispatch(startingAllPlayers(numerosId));
  },[numerosId])



  return (
    <div className="flex flex-col">
      <SectionUno />
      <SectionDos />
      <SectionThree />
      <Footer />
    </div>
  );
};
