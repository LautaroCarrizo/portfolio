import Image from "next/image";

function Icons() {
  return (
  <div>
  <div className="flex items-center flex-col">
    <a
      className="w-20 h-40 transition-transform transition-filter transform hover:scale-125"
      href="https://github.com/LautaroCarrizo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/githubDef.svg" alt="GitHub" width={80} height={80} />
    </a>
    <a
      className="w-20 h-40 transition-transform transition-filter transform hover:scale-125"
      href="https://www.linkedin.com/in/lautaro-carrizo-13b7a1217/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/linkedin2.svg" alt="LinkedIn"width={80} height={80} />
    </a>
        <a
      className="w-20 h-40 transition-transform transition-filter transform hover:scale-125"
      href="https://www.instagram.com/lautaro.carrizo1/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/img/instagram-logo.svg" alt="instagram"width={80} height={80} />
    </a>
  </div>
</div>
  );
}

export default Icons;
