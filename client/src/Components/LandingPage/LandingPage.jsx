import { Navbar } from "../Navbar/Navbar";
import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";
import { SectionThree } from "./SectionThree";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";
import { getTeams } from "../../redux/actions/teamActions";
import { getGroups } from "../../redux/actions/groupActions";

export const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixture());
    dispatch(getTeams());
    dispatch(getGroups());
  }, [dispatch]);

  const fixture = useSelector((estate) => estate.fixture);
  const upcomingMatches = fixture.fixture.slice(0, 3);

  console.log(fixture.fixture.length)

  return (
    <div className="flex flex-col">
      <Navbar />
      <SectionUno />
      <SectionDos upcomingMatches={upcomingMatches}/>
      <SectionThree />
      <Footer />
    </div>
  );
};
