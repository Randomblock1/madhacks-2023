const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction ? 'http://api.altruistapp.tech:8000' : 'http://localhost:8000';
