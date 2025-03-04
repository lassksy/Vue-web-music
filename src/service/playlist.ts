import axios from "axios";


// 获取歌单
export const getPlaylist = async () => {
        try {
            const response = await axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/top/playlist/highquality');
            return response.data.playlists.map((item: any) => ({
                name: item.name || '未知歌单名',
                coverImgUrl: item.coverImgUrl || '未知封面', 
            })); 
        } catch (error) {
            console.error('请求失败:', error);
            return [];
        }
    };