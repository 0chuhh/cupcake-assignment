import axios from 'services/api/axios'

const endpoints = {
    first: () => axios.get('first/'),
    poll: () => axios.get('first/poll/'),
    
}
export default endpoints