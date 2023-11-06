import ProyectsComponent from "@/components/ProyectsComponent";
import {TransitionComponent} from "@/components/Transition/Transition";

function Proyects() {
  return (
    <div className="bg-black">
    <TransitionComponent/>
      <div className="w-full h-[25vh] relative">
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "25vh",
            objectFit: "cover",
          }}
        >
          <source src="/dev2.mp4" type="video/mp4" />
        </video>
        <h1 className="fontStyle text-white absolute p-10 text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:p-0">
          <i>PROYECTOS</i>
        </h1>
      </div>
      <ProyectsComponent/>
    </div>
  );
}

export default Proyects;
