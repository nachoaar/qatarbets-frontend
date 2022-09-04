import { Navbar } from "../Navbar/Navbar";
import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";
import { SectionThree } from "./SectionThree";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFixture } from "../../redux/actions/fixtureActions";
import { getTeams } from "../../redux/actions/teamActions";

export const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFixture());
    dispatch(getTeams());
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <SectionUno />
      <SectionDos />
      <SectionThree />
      <Footer />
    </div>
  );
};
