import { IRates } from 'models/rates';
import axios from 'services/api/axios';

const endpoints = {
    getLastRates: () => axios.get('third/'),
    pollRates: () => axios.get<IRates>('third/poll/'),

};
export default endpoints;