import Homecomponent from "./home/page";
import About from "./about/page";
import Main from "./components/home-project";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
    <Homecomponent></Homecomponent>
    <About></About>
    <Main></Main>
    <Skills></Skills>
    </>
  );
}
