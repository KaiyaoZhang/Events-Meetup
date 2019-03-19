import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from './asyncConstants';

export const asyncActionStart = () => {
    return {
        type: ASYNC_ACTION_START
    }
}

export const asyncActionFinish = () => {
    return {
        type: ASYNC_ACTION_FINISH
    }
}

export const asnycActionError = () => {
    return {
        type: ASYNC_ACTION_ERROR
    }
}