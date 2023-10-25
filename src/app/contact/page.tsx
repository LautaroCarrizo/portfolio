import { Cover } from "@/components/Cover/Cover";
import Image from "next/image";
function Contact() {
  return (
    <div className="h-full flex flex-col justify-between bg-light">
      <Cover />
      <div className="w-full p-10 h-1/3 relative flex flex-col text-center titleLight justify-center">
        <h1 className="text-7xl fontStyle tracking-widest font-bold pb-4">Contacto</h1>
        <h3 className="fontStyle tracking-wider font-semibold text-2xl">
          <i>
            Estoy en constante búsqueda de nuevos desafíos que impulsen mi
            carrera y no temo explorar nuevos horizontes. Si crees que puedo
            contribuir con valor y conocimiento a tu proyecto, te invito a
            contactarme. <br/>¡¡Estoy esperando con entusiasmo tu mensaje!!
          </i>
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <a
          className={`w-30 h-80 text-center transition-transform transition-filter transform hover:scale-125`}
          href="mailto:laucarrizo332@gmail.com?subject=Contacto&cc=&bcc=&body=Hola,%20¿en%20qué%20puedo%20ayudarte?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/gmail.png" alt="GitHub" width={180} height={180} />
        </a>
        <a
          className={`w-30 h-80 text-center transition-transform transition-filter transform hover:scale-125`}
          href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/linkedin2.svg"
            alt="LinkedIn"
            width={160}
            height={160}
          />
        </a>
        <a
          className={`w-30 h-80 text-center transition-transform transition-filter transform hover:scale-125`}
          href="https://wa.me/543516512087"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/whatsapp.png"
            alt="instagram"
            width={160}
            height={160}
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
