export function getUserDataAction(payload) {
    return {
        type: "GET_USER_DATA",
        payload
    }
}

export function removeUserDataAction() {
    return {
        type: "REMOVE_USER_DATA"
    }
}