import Image from "next/image";
import { musicInterface } from "@/types/interface";
function Icons({music} : musicInterface) {
    const danceIcons = music && "dance";
  return (
  <div>
  <div className="flex items-center flex-col">
    <a
      className={`w-20 h-40 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://github.com/LautaroCarrizo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/githubPng.png" alt="GitHub" width={80} height={80} />
    </a>
    <a
     className={`w-20 h-40 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/linkedin2.svg" alt="LinkedIn"width={80} height={80} />
    </a>
        <a
    className={`w-20 h-40 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://www.instagram.com/lautaro.carrizo1/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/instagramPng.png" alt="instagram"width={80} height={80} />
    </a>
  </div>
</div>
  );
}

export default Icons;
