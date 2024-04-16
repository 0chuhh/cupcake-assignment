import { IRates } from 'models/rates';
import axios from 'services/api/axios'
import { EndpointType } from 'types/endpoint';

const endpoints:{[key:string]:EndpointType<IRates>} = {
    first: () => axios.get<IRates>('first/'),
    poll: () => axios.get<IRates>('first/poll/'),
    
}
export default endpoints