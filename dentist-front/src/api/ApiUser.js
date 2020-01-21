import axios from '@/libs/api.request'
import config from '@/config'

const baseUrl = '/user';

const login = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl + '/login',
        data,
        method: 'post'
    })
};

export default {
    login
}
