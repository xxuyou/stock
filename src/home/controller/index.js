'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let exp = parseInt((new Date).valueOf()/1000) + 7200;
    let config = think.extend({}, this.config('demo'));
    let {app, auth, pool, wss, jwt} = config;
    let payload = {};
    payload['wss'] = wss;
    payload['app'] = app;
    payload['uid'] = 1;
    payload['exp'] = exp;
    let opt = jwt['options'];
    let JWT = new (think.service('jwt'))();
    let token = await JWT.sign(payload, auth, opt).catch((err) => err);
    payload['token'] = token['data'];
    this.assign('payload', payload);
    this.assign('pool', pool);
    return this.display();
  }

  /**
   * AJAX 运行方法，模拟向 RESTful API 发布数据
   *
   */
  async ajaxSendPriceAction() {
    if (!this.isAjax()) return this.error(9, 'illegal request!');
    let config = think.extend({}, this.config('demo'));
    let {app, auth, pool, api} = config;
    let url = [api, auth, app, pool].join('/');
    const request = require('superagent');
    let doSend = () => {
      let deferred = think.defer();
      let sendDataJson = {"name":"GOLD", "price":this._radom(1000, 1800)};
      let sendDataText = JSON.stringify(sendDataJson);
      request.put(url).set('Content-Type', 'application/json').send(sendDataText).end(function (err, res) {
        if (res['ok'] && res['statusCode'] == 200) {
          if (think.isEmpty(res['body'])){
            deferred.reject({err: 9, msg: 'empty', data: undefined});
          } else {
            deferred.resolve({err: 0, msg: 'ok', data: res['body']['data']['key']});
          }
        } else {
          deferred.reject({err: 9, msg: 'empty', data: undefined});
        };
      });;
      return deferred.promise;
    };
    let {err, msg, data} = await doSend();
    if (err > 0) return this.error(err, msg);
    return this.success(data);
  }

  /**
   * 快速生成一个范围内的随机数
   *
   * @param min
   * @param max
   * @returns {Number}
   * @private
   */
  _radom(min, max) {
    let num = Math.random() * (max - min) + min;
    return parseInt(num, 10);
  }
}