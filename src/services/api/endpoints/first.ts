import { IRates } from 'models/rates';
import axios from 'services/api/axios'

const endpoints = {
    first: () => axios.get<IRates>('first/'),
    poll: () => axios.get<IRates>('first/poll/'),
    
}
export default endpoints