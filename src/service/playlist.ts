import service from './request'

export function getTopList({ cat = '全部' , limit = 10 , before = ''}) {
    return service.get(`/top/playlist/highquality?cat=${cat}&limit=${limit}&before=${before}`);
}