
let isLogedin: boolean


export default function () {

    function check() {
        return isLogedin
    }

    async function login(User: string, Passowrd: string) {

        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => { isLogedin = User === 'admin' && Passowrd === 'admin'; resolve(isLogedin) }, 3000)
            } catch (error) {
                reject(error)
            }
        })
    }

    function logOut() {
        isLogedin = false
    }

    return {
        check,
        login,
        logOut,
    }
}
