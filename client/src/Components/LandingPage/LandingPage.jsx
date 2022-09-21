import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";
import { SectionThree } from "./SectionThree";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
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

  useEffect(() => {
    dispatch(getFixture()).then((result) => dispatch(getMatchesPerGroup()));
    dispatch(getTeams())
    dispatch(getGroups());
    dispatch(matchesMostBets());
    dispatch(startingAllPlayers());
  }, [dispatch]);



  return (
    <div className="flex flex-col">
      <SectionUno />
      <SectionDos />
      <SectionThree />
      <Footer />
    </div>
  );
};
