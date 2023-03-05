import { API_URL } from "./env";

export async function ensureLogin() {
    const userAuthData = await fetch(API_URL + '/', { credentials: 'include' });
    if ((await userAuthData.text()) == 'failed.') {
        window.location.href = '/login';
    }
}