import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Wish } from "../../core/models/Wish";
import styles from "./Card.module.scss";
import {clearUsers} from "../../redux/actions/users.action";
import {setWishes} from "../../redux/actions/wishes.action";
import {Api} from "../../core/api/api";

interface CardProp {
  handleRandomElement(arg: any): void;
  clearUsers: () => void;
  setWishes: (wishes: Wish[]) => void;
  wishes: Wish[]
}

const Card: React.FC<CardProp> = ({ handleRandomElement, clearUsers , setWishes, wishes}) => {
  const [employee, setEmployee] = useState<string>("");
  // const [wishes, setWishesArray] = useState<Wish[]>([]);
  const [randomElement, setRandomElement] = useState<Wish>();

  useEffect((): void => {
    clearUsers()
    Api.getWishes()
        .then(res => {
          // setWishesArray(res.data);
          setWishes(res.data)
        })
        .catch(err => {
          console.log(err);
        });
  }, [clearUsers, setWishes]);

  const generateResult = (e: any) => {
    const wish = wishes[Math.floor(Math.random() * wishes.length)];
    setRandomElement(wish);
    handleRandomElement(wish);
    console.log("1234", wish);

    if (wish?.isGift) {
      console.log("QWERTTYUIIO", randomElement);

      sendMail(employee, wish);
    }
    e.preventDefault();
  };

  const sendMail = (employee: string, randomElement: Wish) => {
    let { text } = randomElement;
    text = `${employee}: ${text}`;
    Api.sendMail({ text: text })
        .then((resData) => {
          if (resData.status === 200) {
            setEmployee("");
          } else  {
            console.log(resData);
          }
        });
  };

  const handleChange = (e: any) => {
    setEmployee(e.target.value);
  };

  return (
    <div className={styles.Card}>
      <div className={styles.Content}>
        <h1 className={styles.Title}>
          С наступающим <br />
          Новым Годом!
        </h1>
        <p className={styles.Text}>
          Пусть новый год будет наполнен достижениями, богатством, <br />
          любовью и здоровьем! Желаем вам мира, благополучия и счастья,
          <br /> пусть в Новом Году всё получится, и задуманное сбудется!
        </p>
        <p className={styles.TextBold}>
          Предлагаем вам принять участие в моментальной <br />
          лотерее, у вас есть возможность получить предсказание <br />
          на будущий год, пожелание или приятный подарок!
        </p>
        <form onSubmit={generateResult} className={styles.Form}>
          <div>

            <input
              name="employee"
              type="text"
              required
              className={styles.Input}
              value={employee}
              onChange={handleChange}
              placeholder="Пожалуйста введите свою фамилию и имя"
            />
          </div>
          <button
            type="submit"
            className={styles.Button}
            onChange={generateResult}
          >
            Участвовать!
          </button>
        </form>
        <div className={styles.Logo} />
      </div>
    </div>
  );
};

export default connect(
    (state: any) => ({ wishes: state.wishesReducer }),
    {clearUsers, setWishes}
    )(Card);
