import axios from '@/libs/api.request'
import config from '@/config'

const baseUrl = '/patient/base';

const getPatientBaseList = (data) => {
    return axios.request({
        url: config.preUrl + baseUrl + '/list',
        data,
        method: 'post'
    })
};
export default {
    getPatientBaseList
}