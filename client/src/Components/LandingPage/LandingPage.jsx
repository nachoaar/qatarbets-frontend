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

export const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixture()).then((result) => dispatch(getMatchesPerGroup(2)));
    dispatch(getTeams());
    dispatch(getGroups());
  }, [dispatch]);

  const fixture = useSelector((estate) => estate.fixture);
  const matchesPerGroups = useSelector((estate) => estate.fixture.fixtureGamesPerGroup);

  const upcomingMatches = fixture.fixture.slice(0, 3);


  return (
    <div className="flex flex-col">
      <SectionUno />
      <SectionDos
        upcomingMatches={upcomingMatches}
        matchesPerGroups={matchesPerGroups}
      />
      <SectionThree />
      <Footer />
    </div>
  );
};
