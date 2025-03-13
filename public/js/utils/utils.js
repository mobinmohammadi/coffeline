    const showSwal = (title, icon, buttons, callback , input) => {
        swal({
        title,
        icon,
        buttons,
        input,
        }).then((result) => callback(result));
    };

    export { showSwal }


const saveInToLocalStorege = (key, value) =>{
    return localStorage.setItem(key , JSON.stringify(value))
}

const getToken = () => {
    return JSON.parse(localStorage.getItem("user")).token
}

const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(location.search)
    return urlParams.get(key)

}



export { saveInToLocalStorege , getToken , getUrlParam}