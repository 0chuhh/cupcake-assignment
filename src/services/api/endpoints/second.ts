import { IRates } from 'models/rates';
import axios from 'services/api/axios'

const endpoints = {
    second: () => axios.get<IRates>('second/'),
    poll: () => axios.get<IRates>('second/poll/'),
    
}
export default endpoints