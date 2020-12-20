import React from "react";
import styles from "./Prediction.module.scss";

interface PredictionProps {
  wish: {
    text: string;
    isGift: boolean;
    count?: number;
  };
  isOpenProp: boolean;
  handleOpen(arg: boolean): void;
}
const Prediction: React.FC<PredictionProps> = ({
  wish,
  isOpenProp,
  handleOpen,
}) => {
  const handleClose = () => {
    handleOpen(false);
  };

  return (
    <div
      className={`${styles.Wrapper} ${
        isOpenProp ? styles.WrapperOpen : styles.WrapperClose
      }`}
    >
      <div className={styles.Prediction}>
        <div className={styles.Envelop}>
          <div className={styles.Triangle} />
          <div className={styles.Rectangle} />
        </div>
        <div className={styles.Card}>
          <div className={styles.Content}>
            <div className={styles.Close} onClick={handleClose} />
            <div
              className={`${styles.Img} ${
                wish && wish.isGift ? styles.ImgGift : styles.ImgSnow
              }`}
            />
            <div className={styles.Text}>{wish && wish.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
