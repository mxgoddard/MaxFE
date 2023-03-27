export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.AuthToken) {
        return { Authorization: user.AuthToken };
    } else {
        return {};
    }
}