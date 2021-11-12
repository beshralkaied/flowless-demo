import { watch } from '@vue/runtime-dom'
import LocalStorageService from './LocalStorageService'

let localStorageService = LocalStorageService()
let isLogedin: boolean


export default function () {

    function check() {
        if (localStorageService.get('isLogedin') === 'true') {
            return true
        } else {
            return isLogedin
        }
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

