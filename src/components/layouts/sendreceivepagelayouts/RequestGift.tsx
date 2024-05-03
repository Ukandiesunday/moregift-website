import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import React from "react";
import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const RequestGift = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Request Gift" src="/icons/gift.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="send and receive photo" url="/images/requst.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Request Gift Cash from friends, family or anyone. Simply tap request on your moregift app and send a personalized request."
            heading="Request Gift"
            text="Request and Receive Gift Cash"
            src="/icons/gift.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestGift;
