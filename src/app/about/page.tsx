import InfoAbout from "@/components/AboutComponent";
import {TransitionComponent} from "@/components/Transition/Transition";
function About() {
  return (
    <div className="h-screen">
      <TransitionComponent/>
      <InfoAbout/>
    </div>
  );
}
export default About;
