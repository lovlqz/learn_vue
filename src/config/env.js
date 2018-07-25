/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://192.168.2.107:6969'
}else{
  // loginUrl = 'http://116.205.13.132:29090'
	// baseUrl = 'http://116.205.13.132:28080';
  // backOrder = 'http://116.205.13.132:28080'
  // baseImgPath = '//elm.cangdu.org/img/';
  // http://116.205.13.132:28080   http://116.205.13.132:29090
}

export {
	baseUrl
}
