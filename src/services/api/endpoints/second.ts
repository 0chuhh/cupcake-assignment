import { IRates } from 'models/rates';
import axios from 'services/api/axios'
import { EndpointType } from 'types/endpoint';

const endpoints:{[key:string]:EndpointType<IRates>} = {
    second: () => axios.get<IRates>('second/'),
    poll: () => axios.get<IRates>('second/poll/'),
    
}
export default endpoints