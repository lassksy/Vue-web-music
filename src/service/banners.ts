import axios from 'axios';

//获取图片
export const getBanners = async () => {
  try {
    const response = await axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/banner');
    return response.data.banners.map((item: any) => item.imageUrl);
  } catch (error) {
    console.error('请求失败:', error);
    return [];
  }
};