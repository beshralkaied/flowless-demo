
export default function () {

    function set(name: string, value: string) {
         localStorage.setItem(name, value) 

    }

    function get(name: string) {
        return localStorage.getItem(name)
    }

    return {
        set,
        get,
    }

}

