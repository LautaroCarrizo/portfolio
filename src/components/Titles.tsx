import Image from "next/image";
function Titles() {
  return (
    <div className="w-full relative text-center p-10 flex flex-col ">
      <h1 className="colorTitle2 text-6xl fontStyle tracking-widest font-semibold">
        Carrizo Lautaro
      </h1>
      <p className="colorSubTitle text-3xl fontStyle tracking-widest font-semibold p-4">
        Desarrollador Web Fullstack
      </p>
      <div className="flex justify-center">
        <Image src="/img/ubilogo.png" alt="Logo de Ubicacion" width={30} height={30} />
        <p className="colorSubTitle text-2xl fontStyle tracking-widest font-semibold ml-2">
          Cordóba Argentina
        </p>
      </div>
    </div>
  );
}

export default Titles;
