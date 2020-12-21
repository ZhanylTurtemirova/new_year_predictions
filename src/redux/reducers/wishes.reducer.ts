import { Wish } from "../../core/models/Wish";
import { actions } from "../actions/wishes.action";

const initialState: Wish[] = [];

export const wishesReducer = (
    state = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case actions.setWishes:
            return payload;
        case actions.clearWishes:
            return initialState;
        case actions.changeWishes:
            return [...initialState,payload];
        default:
            return state;
    }
};
