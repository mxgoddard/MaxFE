// Add error handling and inject constant base url
export const GeneralTestApiCall = () => {
    fetch('https://maxapp.azurewebsites.net/api/general/test', {
        method: "GET"
    })
    .then(res => res.json())
    .then((result) => {
        console.log('result');
        console.log(result);
        return result;
    })
    .catch((ex) => {
        console.log('Shit did not work');
        console.log(ex);
    });
}

// export const async GetSteamLibrary() {

// }