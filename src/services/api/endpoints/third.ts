import axios from 'services/api/axios'

const endpoints = {
    third: () => axios.get('third/'),
    poll: () => axios.get('third/poll/'),
    
}
export default endpoints