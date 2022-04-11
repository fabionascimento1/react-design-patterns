import axios from 'axios';
import { env } from 'process';

export const httpInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_API_URL });