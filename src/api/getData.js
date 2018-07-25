import fetch from '@/config/fetch'

// 登录用户接口
export const loginData = data => fetch('/static/data/login.json', data)

// 查询未读消息
export const messageData = data => fetch('/static/data/message.json', data)
