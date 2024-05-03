import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import React from "react";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const SendGiftCards = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Send Gift Cards" src="/icons/send.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Send Gift Cash easily and swiftly to anyone in any country or location. We maintain the lowest sending fees to ensure more value for your Gift Cash."
            heading="Send Gift Cards"
            text="Send Gift Cash to any country at the lowest fees"
            src="/icons/send.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage
            alt="send and receive photo2"
            url="/images/sendgiftcard.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SendGiftCards;
