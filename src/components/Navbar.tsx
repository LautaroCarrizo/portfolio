import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="w-1/4 flex justify-between p-6">
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/homeDef.png" alt="icono home" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/about">
          <Image src="/img/aboutDef2.png" alt="icono about" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/proyects">
          <Image src="/img/maletinDef.png" alt="icono proyectos"width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/lupaDef.png" alt="icono contacto" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
