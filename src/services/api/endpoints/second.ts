import { IRates } from 'models/rates';
import axios from 'services/api/axios';

const endpoints = {
    getLastRates: () => axios.get<IRates>('second/'),
    pollRates: () => axios.get<IRates>('second/poll/'),

};
export default endpoints;