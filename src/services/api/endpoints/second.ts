import axios from 'services/api/axios'

const endpoints = {
    second: () => axios.get('second/'),
    poll: () => axios.get('second/poll/'),
    
}
export default endpoints