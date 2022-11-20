import type { NextPage } from "next";
import WithLayout from "../components/HOC/withLayout";
import Homepage from "../components/MainComponents/HomePage/Homepage";

const Home: NextPage = () => {
  console.log("Homepage");
  return <Homepage />;
};

export default WithLayout(Home, "Home");
