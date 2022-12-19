
export default function getCookieByName(key) {
    let cookieValue = null;
    console.log("document.cookie", document.cookie);
    let arr = document.cookie.split(';');
    arr.forEach( e => {
        const singleCookieArr = e.trim().split('=');
        if(singleCookieArr[0] === key) {
            cookieValue = singleCookieArr[1];
            return;
        }
    })
    return cookieValue;
}
