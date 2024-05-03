import style from "@/components/atoms/howItWorksBtn/HowItworks.module.scss";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { useGlobalContext } from "../../../../context/AppContext";

const HowItWorks = () => {
  const { theme } = useGlobalContext();
  return (
    <div className={style.container}>
      <Link href="" className={style.links}>
        <button
          className={
            theme === "light"
              ? style.play_button1
              : `${style.play_button1} ${style.dark}`
          }
        >
          How it works
          <FaPlay className={style.play_icon} />
        </button>
      </Link>
    </div>
  );
};

export default HowItWorks;
