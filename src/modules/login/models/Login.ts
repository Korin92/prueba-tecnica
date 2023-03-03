export type LoggedUser = {
    email: string,
    password: string
}

export default function emptyLoggedUSer(){
    return {
        email:'',
        password:''
    }
}