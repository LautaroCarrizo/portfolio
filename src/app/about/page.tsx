import InfoAbout from "@/components/AboutComponent";
import Skills from "@/components/Skills";
function About() {
  return (
    <div className="h-full bg-black">
    <div className="flex w-full h-auto text-white">
      <div className="w-1/4">
        <img src="/img/gifDef5.gif" alt="gif" className="w-full h-full"></img>
      </div>
      <div className="w-3/6">
        <InfoAbout />
      </div>
      <div className="w-1/4">
        <img src="/img/gifDef2.gif" alt="gif" className="w-full h-full"></img>
      </div>
    </div>
      <Skills/>
    </div>
  );
}
export default About;
