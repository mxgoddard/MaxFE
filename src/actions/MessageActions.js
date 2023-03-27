import { SET_MESSAGE, CLEAR_MESSAGE } from "./Types";

export const SetMessageAction = (message) => ({
    type: SET_MESSAGE,
    payload: message
});

export const ClearMessageAction = () => ({
    type: CLEAR_MESSAGE
});