const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction ? 'https://api.altruistapp.tech' : 'http://localhost:8000';
