import fetch from '@/config/fetch'

//登录用户接口
export const loginData= data => fetch('/static/data/login.json', data);
