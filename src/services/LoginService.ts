
let user = ''
let passowrd = ''

export default function () {

    function get() {
        return user == 'admin' && passowrd == 'admin'
    }

    function set(User: string, Passowrd: string) {
        user = User
        passowrd = Passowrd
    }

    function logOut() {
        user = ''
        passowrd = ''
    }

    return {
        get,
        set,
        logOut,
    }
}
