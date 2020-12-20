import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Prediction from "../../components/Prediction/Prediction";

interface RandomElement {
  isGift: boolean;
  text: string;
  count?: number;
}
const Home: React.FC = () => {
  const [randomElement, setRandomElement] = useState<RandomElement>({
    isGift: false,
    text: "",
  });
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {}, [randomElement, isOpen]);
  const handleWish = (wish: RandomElement): void => {
    setRandomElement(wish);
    setOpen(true);
  };
  const handleOpen = (isOpen: boolean): void => {
    setOpen(isOpen);
  };
  return (
    <div className={styles.Home}>
      <div className={styles.Content}>
        <div className={`${styles.Corner} ${styles.CornerLeft}`} />
        <div className={styles.Left}>
          <Card handleRandomElement={handleWish} />
        </div>
        <div className={styles.Prediction}>
          <Prediction
            wish={randomElement}
            isOpenProp={isOpen}
            handleOpen={handleOpen}
          />
        </div>
        <div className={styles.Right}>
          <Modal />
        </div>
        <div className={`${styles.Corner} ${styles.CornerRight}`} />
      </div>
    </div>
  );
};

export default Home;
