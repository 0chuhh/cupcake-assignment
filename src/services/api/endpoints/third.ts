import { IRates } from 'models/rates';
import axios from 'services/api/axios'

const endpoints = {
    third: () => axios.get('third/'),
    poll: () => axios.get<IRates>('third/poll/'),
    
}
export default endpoints