import Image from "next/image";
import { motion } from "framer-motion";
import { useWidth } from "@/utils/hookWidth";
function Skills() {
  const width = useWidth();
  const sliderDevices = width < 700 ? "logo-slideMobile" : "logo-slide";
  return (
    <div className="h-auto max-sm:pb-5">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
      >
        <h1 className="text-white text-4xl fontStyle w-4/6 flex justify-center max-xl:pt-5 max-sm:p-0 max-sm:text-3xl ">
          <i>Skills</i>
        </h1>
      </motion.div>
      <div className="flex w-full">
        <div className="logo-skills">
          <div className={`flex w-full ${sliderDevices}`}>
            <Image
              src={"/img/js3.png"}
              alt="skills"
              className="mx-5 rounded-[50%] max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/ts3.png"}
              alt="skills"
              className="mx-5  max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/node2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/sequalize.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/express-js.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/react2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/redux.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/postgres2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/next5.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/tailwind3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/html3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/css.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/git3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/boostrap.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
              <Image
              src={"/img/js3.png"}
              alt="skills"
              className="mx-5 rounded-[50%] max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/ts3.png"}
              alt="skills"
              className="mx-5  max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/node2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/sequalize.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/express-js.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/react2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/redux.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/postgres2.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/next5.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/tailwind3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/html3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/css.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/git3.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
            <Image
              src={"/img/boostrap.png"}
              alt="skills"
              className="mx-5 max-sm:mx-1 max-sm:w-[45px] max-sm:h-[45px] max-md:w-[55px] max-md:h-[55px]"
              width={90}
              height={60}
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
