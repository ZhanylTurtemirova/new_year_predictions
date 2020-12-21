import React, { useState } from "react";
import styles from "./Modal.module.scss";

const Modal: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleChange = () => {
    setOpen(!isOpen);
  };
  return (
    <div
      className={`${styles.Modal} ${isOpen ? styles.ModalOpen : ""}`}
      onClick={handleChange}
    >
      <div className={styles.Content}>
        <div className={`${styles.Arrow} ${isOpen ? styles.ArrowDown : ""}`} />
        <span className={styles.Title}>Правила</span>
        <div className={styles.Text}>
          <p className={styles.Paragraph}>
            Вы можете принять участие в лотерее только один раз
          </p>
          <p className={styles.Paragraph}>
            Забрать подарок нужно самостоятельно в офисе Компании
          </p>
          <p className={styles.Paragraph}>
            Чтобы получить подарок, вам необходимо обратиться к HR в своей
            локации
          </p>
          <p className={styles.Paragraph}>
            <a href="mailto:envera_issabaeva@epam.com">Алматы: Энвера Исабаева</a>
            <br />
            <a href="mailto:anna_voronova@epam.com">Караганда: Анна Воронова</a>
            <br />
            <a href="mailto:gaukhar_ni@epam.com">Нур-Султан: Гаухар Ни</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
