import { IRates } from 'models/rates';
import axios from 'services/api/axios'
import { EndpointType } from 'types/endpoint';

const endpoints:{[key:string]:EndpointType<IRates>} = {
    third: () => axios.get('third/'),
    poll: () => axios.get<IRates>('third/poll/'),
    
}
export default endpoints