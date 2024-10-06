import request from "./request";

//  
export function getDailySongs() {
    return request.get(`/recommend/songs`)
  }
  