import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="w-1/4 flex justify-between ">
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/homeDef.png" alt="icono home" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/aboutDef2.png" alt="Descripción 2" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/maletinDef.png" alt="Descripción 3"width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
      <div className="flex flex-col text-center">
        <Link href="/">
          <Image src="/img/lupaDef.png" alt="Descripción 4" width={50} height={50} className="transition-transform transition-filter transform hover:scale-125"/>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
