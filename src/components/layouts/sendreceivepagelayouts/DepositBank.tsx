import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const DepositBank = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Deposit To Bank" src="/icons/bank.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="send and receive photo2"
            url="/images/depositbank.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Link your bank accounts to your moregift account and deposit your Gift Cash in seconds."
            heading="Deposit To Bank"
            text="Deposit your Gift Cash into your bank account"
            src="/icons/bank.svg"
            content="View use case"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositBank;
