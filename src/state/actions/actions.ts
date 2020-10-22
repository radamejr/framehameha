export interface Action<T = undefined> {
    type: string;
    payload?: T;
    error?: boolean;
    meta?: boolean;
}

export const ActionPromise = (action: string | undefined) => {
    return {
        pending: `${action}_PENDING`,
        fulfilled: `${action}_FULFILLED`,
        rejected: `${action}_REJECTED`,
    };
};

export const Actions = {
    GET_CHARACTERS: "GET_CHARACTERS",
    GET_CHARACTERS_PENDING: "GET_CHARACTERS_PENDING",
    GET_CHARACTERS_FULFILLED: "GET_CHARACTERS_FULFILLED",
    GET_CHARACTERS_REJECTED: "GET_CHARACTERS_REJECTED",

    GET_USER: "GET_USER",
    GET_USER_PENDING: "GET_USER_PENDING",
    GET_USER_FULFILLED: "GET_USER_FULFILLED",
    GET_USER_REJECTED: "GET_USER_REJECTED",

    CREATE_USER: "CREATE_USER",
    UPDATE_USER: "UPDATE_USER",
    DELETE_USER: "DELETE_USER",

    CREATE_CHARACTER: "CREATE_CHARACTER",
    UPDATE_CHARACTER: "UPDATE_CHARACTER",
    DELETE_CHARACTER: "DELETE_CHARACTER",

    CREATE_NORMAL: "CREATE_NORMAL",
    UPDATE_NORMAL: "UPDATE_NORMAL",
    DELETE_NORMAL: "DELETE_NORMAL",

    CREATE_SPECIAL: "CREATE_SPECIAL",
    UPDATE_SPECIAL: "UPDATE_SPECIAL",
    DELETE_SPECIAL: "DELETE_SPECIAL",

    CREATE_SPECIAL_VARIANT: "CREATE_SPECIAL_VARIANT",
    UPDATE_SPECIAL_VARIANT: "UPDATE_SPECIAL_VARIANT",
    DELETE_SPECIAL_VARIANT: "DELETE_SPECIAL_VARIANT",

    CREATE_SUPER: "CREATE_SUPER",
    UPDATE_SUPER: "UPDATE_SUPER",
    DELETE_SUPER: "DELETE_SUPER",

    CREATE_SUPER_VARIANT: "CREATE_SUPER_VARIANT",
    UPDATE_SUPER_VARIANT: "UPDATE_SUPER_VARIANT",
    DELETE_SUPER_VARIANT: "DELETE_SUPER_VARIANT",

    CREATE_ASSIST: "CREATE_ASSIST",
    UPDATE_ASSIST: "UPDATE_ASSIST",
    DELETE_ASSIST: "DELETE_ASSIST",

    SET_CURRENT_CHARACTER: "SET_CURRENT_CHARACTER",
    
    LOG_OUT: "LOG_OUT",
    LOG_IN: "LOG_IN",
    LOGIN_STATUS: "LOGIN_STATUS",

    LOGIN_USER: "LOGIN_USER",
    TOKEN_AUTH: "TOKEN_AUTH",

    CLEAR_MESSAGE: "CLEAR_MESSAGE",
    SET_MESSAGE: "SET_MESSAGE",

    UPDATE_EDIT_STATUS: "UPDATE_EDIT_STATUS",
    UPDATE_EDIT_TYPE: "UPDATE_EDIT_TYPE",
    UPDATE_TARGET: "UPDATE_TARGET",
    UPDATE_CONTENT_TARGET: "UPDATE_CONTENT_TARGET",
}