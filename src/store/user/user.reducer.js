import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE_FOR_REDUCER = {
    currentUser: null
};

export const userReducer = (state = INITIAL_STATE_FOR_REDUCER, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
};
