import axios from 'axios';
import evnCfg from '@/utils/config';
import authService from '@/services/auth.service';
// create an axios instance
const apiService = axios.create({
  timeout: 5000 // request timeout
});

// 请求拦截
apiService.interceptors.request.use(
  config => {
    // Do something before request is sent
    let url = config.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = evnCfg.host + url;
    }
    const token = authService.getTokenStr();
    console.log(token);
    config.url = url;
    let isAuthorization = config.sendToken;
    if (isAuthorization !== false) {
      isAuthorization = true;
    }
    if (isAuthorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截
apiService.interceptors.response.use(
  response => {
    const res = response.data || {};
    const status = response.status;
    if (status !== 200) {
      switch (response.status) {
        case 401: // 未登录状态码
          this.$confirm({
            title: '您未登录',
            content: '系统检测到您未登录，是否自动获取登录信息',
            onOk() {
              authService.getToken();
            },
            onCancel() {
              // console.log('Cancel');
            }
          });
          break;
        case 403:
          this.$notification['warning']({
            message: '提示',
            description: '请求被禁止，您无权限访问.'
          });
          break;
        case 500:
          // 后端响应数据
          this.$notification['warning']({
            message: '提示',
            description: res.errmsg || res.message || '服务器异常，请稍后重试'
          });
          break;
        case 404:
          this.$notification['warning']({
            message: '提示',
            description: '找到不资源.'
          });
          break;
        default:
          this.$notification['warning']({
            message: '提示',
            description: '操作失败，请稍后重试.'
          });
          break;
      }
      return Promise.reject(response);
    } else if (status === 200) {
      return res;
    }
  },
  error => {
    console.log('err' + error); // for debug
    this.$notification['error']({
      message: '请求异常',
      description: '服务端错误.'
    });
    return Promise.reject(error);
  }
);

export default apiService;
