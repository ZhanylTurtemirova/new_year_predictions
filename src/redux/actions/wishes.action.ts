import {Wish} from "../../core/models/Wish";

export const actions = {
    setWishes: "[wishes] SET WISHES",
    clearWishes: "[wishes] CLEAR WISHES",
    changeWishes: "[wishes] CHANGE WISHES"
};

export const setWishes = (wishes: Wish[]) => ({
    type: actions.setWishes,
    payload: wishes
});

export const clearWishes = () => ({
    type: actions.clearWishes
});

export const changeWishes = (wish: Wish) => ({
    type: actions.changeWishes,
    payload: wish
});
