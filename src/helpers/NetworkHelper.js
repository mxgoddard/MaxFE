// TODO - Add error handling and inject constant base url
const LOCAL_BASE_URL = 'https://localhost:5001/api';
const HOSTED_BASE_URL = 'https://maxapp.azurewebsites.net/api';

export const DetermineUrl = (relativePath) => 
{
    let baseUrl = window.location.hostname === 'localhost' ? LOCAL_BASE_URL : HOSTED_BASE_URL;
    return `${baseUrl}/${relativePath}`;
}