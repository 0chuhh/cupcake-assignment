import { IRates } from 'models/rates';
import axios from 'services/api/axios';

const endpoints = {
    getLastRates: () => axios.get<IRates>('first/'),
    pollRates: () => axios.get<IRates>('first/poll/'),

};
export default endpoints;