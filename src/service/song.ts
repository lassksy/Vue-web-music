import axios from 'axios';
import instance from './request';

export function getDailySongs() {
  return instance.get(`/recommend/songs`, {
    withCredentials: true,
  });
}
  