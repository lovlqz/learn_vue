import { baseUrl,loginUrl,backOrder} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	// if(url =='/web/user/login?'||url=='/web/user/logout'){
  //   url = loginUrl + url;
  // }else if(url == '/order/refund/'){
	//   url = backOrder +url;
  // } else{
  //   url = baseUrl + url;
  // }
  url = baseUrl + url;


	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
    if(typeof data == "object"){
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })
    }else{
      dataStr +=data;
    }
		if (dataStr !== '') {
      if(dataStr.substr(0, dataStr.lastIndexOf('&'))!=''){
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url  + dataStr;
      }else{
        url = url  + dataStr;
      }
    }else{
      url = url
    }
	}

	if (window.fetch && method == 'fetch') {
    let requestConfig={}
    if(url =='/web/user/login?'||url=='/web/user/logout'){
      requestConfig = {
        // credentials: 'include',
        method: type,
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json',
        },
        mode: "cors",
        cache: "no-cache"
      }
    }else{
      requestConfig = {
        // credentials: 'include',
        method: type,
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json',
          'Token': localStorage.getItem('Authorization')
        },
        mode: "cors",
        cache: "no-cache"
        // credentials: 'include'
      }
    }


		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}

		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json()
      if(responseJson.stateCode==500102){
			  console.log(1)
        window.routes.push('/')
       }
      return responseJson

    } catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
      requestObj.setRequestHeader("Cache-Control", "no-cache");
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
