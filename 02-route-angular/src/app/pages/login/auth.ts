export interface Auth {
    user: string,
    pass: string
}

export interface User {
    user: string,
    pass: string
    vision: string,
}

export interface AuthState {
    user: string,
    pass: string
    vision: string,
    userExist: boolean
}
