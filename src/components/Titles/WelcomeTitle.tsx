import { musicInterface } from "@/types/interface";
function Welcome({music}:  musicInterface) {
  const danceTitle = music && "dance";
    const titleText = "Bienvenido";
  const titleLetters = titleText.split("");
  const letterDance = music && "letter-animation"
  return (
    <div className="w-full flex justify-center align-middle h-14 ">
      <h1 className={`colorTitle text-3xl fontStyle tracking-widest font-semibold ${danceTitle}`}>
          {titleLetters.map((letter, index) => (
          <span key={index} className={`${letterDance}`}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Welcome;
