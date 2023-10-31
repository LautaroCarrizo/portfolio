
import { musicInterface } from "@/types/interface";
function Icons({music} : musicInterface) {
    const danceIcons = music && "dance";
  return (
  <div>
  <div className="flex items-center flex-col max-sm:ml-6">
    <a
      className={`w-20  max-sm:w-28 h-40 max-sm:h-20 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://github.com/LautaroCarrizo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/githubPng.png" alt="GitHub" className="w-[80px] h-[80px] max-sm:w-[50px] max-sm:h-[50px]" />
    </a>
    <a
     className={`w-20 max-sm:w-28 h-40 max-sm:h-20 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/linkedin2.svg" alt="LinkedIn" className="w-[80px] h-[80px] max-sm:w-[50px] max-sm:h-[50px]" />
    </a>
        <a
    className={`w-20 max-sm:w-28 h-40 max-sm:h-20 transition-transform transition-filter transform hover:scale-125 ${danceIcons}`}
      href="https://www.instagram.com/lautaro.carrizo1/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/img/instagramPng.png" alt="instagram" className="w-[80px] h-[80px] max-sm:w-[50px] max-sm:h-[50px]" />
    </a>
  </div>
</div>
  );
}

export default Icons;
