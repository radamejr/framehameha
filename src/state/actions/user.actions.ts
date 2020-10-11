import { Action, Actions } from "./actions"

import { getUserWithTokenApi, loginUserApi, logoutUserApi } from "../../helpers/api/fetch/user_methods"
import { LoginUserState, CreateUserState } from "../../models/app/helper_models/user.models"

export const logoutUser = () => {
    return {
        type: Actions.LOG_OUT,
        payload: null,
    }
}

export const setLoginStatus = (status: string) => {
    return {
        type: Actions.LOGIN_STATUS,
        payload: status
    }
}

export const loginUser = (user: LoginUserState): Action<Promise<void>> => {
    return {
        type: Actions.LOGIN_USER,
        payload: loginUserApi(user),
    }
}

export const getUserWithToken = (id: string): Action<Promise<void>> => {
    return {
        type: Actions.TOKEN_AUTH,
        payload: getUserWithTokenApi(id),
    }
}