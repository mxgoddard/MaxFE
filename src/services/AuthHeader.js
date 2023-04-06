export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authToken) {
        return { Authorization: user.authToken };
    } else {
        return {};
    }
}