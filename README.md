[![荆秀实时数据推送服务](https://github.com/xxuyou/yipaibao/blob/master/screenshot/logo-160.png)](http://xxuyou.com)

# WSS Real-time Data Push Service

## DEMO 股票行情

[![Gitter](https://img.shields.io/badge/Powered%20by-WSS%20Realtime Data Push-brightgreen.svg)](http://xxuyou.com)

本 DEMO 简单演示了向 WSS RESTful API 发布数据，以及订阅者订阅数据。

响应事件，接收数据

![响应事件，接收数据](https://github.com/xxuyou/yipaibao/blob/master/screenshot/demo-stock-01.png)

开启 DEBUG 模式，可在控制台查看

![开启 DEBUG 模式，可在控制台查看](https://github.com/xxuyou/yipaibao/blob/master/screenshot/demo-stock-02.png)

## 最佳实践

1. Clone 代码到本地
```sh
git clone https://github.com/xxuyou/stock.git
```

1. 进入目录，编译代码
```sh
cd code/in/your/dir/
npm install
```

1. 运行
```sh
cd code/in/your/dir/
npm start
```

4. 打开浏览器，输入 http://127.0.0.1:8360

即可看到行情数据推送过来

###### 提示：行情数据为模拟数据，请勿据此做出任何决策！
###### 提示：请勿将 DEMO 中的关键参数转作它用！

# 感谢

[![Gitter](https://img.shields.io/badge/Thanks%20for-ThinkJS%20Framework-brightgreen.svg)](https://github.com/thinkjs/thinkjs) 免费开源的 Node 开发框架！[官网](http://thinkjs.org)
[![Gitter](https://img.shields.io/badge/Thanks%20for-SuperAgent-brightgreen.svg)](https://github.com/visionmedia/superagent) a small progressive **client-side** HTTP request library [官网](http://visionmedia.github.io/superagent/)
[![Gitter](https://img.shields.io/badge/Thanks%20for-JWT-brightgreen.svg)](https://github.com/auth0/node-jsonwebtoken) [官网](https://jwt.io)

# License

[MIT](https://github.com/thinkjs/thinkjs/blob/master/LICENSE)
