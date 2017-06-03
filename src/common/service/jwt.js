'use strict';
const JWT = require('jsonwebtoken'); // @see https://github.com/auth0/node-jsonwebtoken
export default class extends think.service.base {
  /**
   * init
   * @return {}         []
   */
  init(...args){
    super.init(...args);
  }

  /**
   * generate a JWT token
   * @see https://github.com/auth0/node-jsonwebtoken
   * @use
   * let JWT = new (think.service('jwt'))();
   * let token = await JWT.sign(payload, priAuth, options).catch((err) => err);
   * this.write(token);
   * this.end();
   *
   * @param payload
   * @param secretOrPrivateKey
   * @param options
   * @returns {Promise}
   */
  async sign(payload, secretOrPrivateKey, options) {
    return new Promise(function(resolve, reject) {
      JWT.sign(payload, secretOrPrivateKey, options, function (err, token) {
        if (err) {
          reject({err: 9, msg: err.name + ':' + err.message, data: undefined});
        } else {
          resolve({err: 0, msg: 'ok', data: token});
        };
      });
    });
  }

  /**
   * verify a JWT token
   * @see https://github.com/auth0/node-jsonwebtoken
   * @use
   * let JWT = new (think.service('jwt'))();
   * let verify = await JWT.verify(token, priAuth, options).catch((err) => err);
   * this.write(verify);
   * this.end();
   *
   * @param token
   * @param secretOrPublicKey
   * @param options
   * @returns {Promise}
   */
  async verify(token, secretOrPublicKey, options) {
    return new Promise(function(resolve, reject) {
      JWT.verify(token, secretOrPublicKey, options, function (err, decoded) {
        if (err) {
          reject({err: 9, msg: err.name + ':' + err.message, data: undefined});
        } else {
          resolve({err: 0, msg: 'ok', data: decoded});
        };
      });
    });
  }
}