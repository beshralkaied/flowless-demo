
import LocalStorageService from './LocalStorageService'

let localStorageService = LocalStorageService()
let isLogedin: boolean


export default function () {

    function check() {
        if (!isLogedin) {
              if (localStorageService.get('isLogedin') === 'true') {
             isLogedin = true
        } 
        }
      
        return isLogedin
    }

    async function login(User: string, Passowrd: string) {

        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => { isLogedin = User === 'admin' && Passowrd === 'admin'; localStorageService.set('isLogedin', 'true'); resolve(isLogedin) }, 3000)
            } catch (error) {
                reject(error)
            }
        })
    }

    function logOut() {
        localStorageService.set('isLogedin', 'false')
        isLogedin = false
    }

    return {
        check,
        login,
        logOut,
    }

}

