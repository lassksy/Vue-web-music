import axios from 'axios';

// 获取 MV 图片和标题
export const getMV = async () => {
    try {
      const response = await axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/personalized/mv');
  
      if (!response.data || !response.data.result) {
        return []; 
      }
  
      return response.data.result.map((item: any) => ({
        cover: item.picUrl || '', 
        title: item.copywriter || '未知标题' 
      }));
    } catch (error) {
      console.error('请求失败:', error);
      return []; 
    }
  };

// //获取图片
// export const getMV = async () => {
//     try {
//       const response = await axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/personalized/mv');
//       return response.data.result.map((item: any) => item.picUrl); 
//     } catch (error) {
//       console.error('请求失败:', error);
//       return [];
//     }
//   };

// //获取mv推荐标题
// export const getMVinfo = async () => {
//     try {
//       const response = await axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/personalized/mv');
//       return response.data.result.map((item: any) => item.copywriter); 
//     } catch (error) {
//       console.error('请求失败:', error);
//       return [];
//     }
//   };