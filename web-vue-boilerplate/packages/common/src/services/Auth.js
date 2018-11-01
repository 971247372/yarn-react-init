import Service from '../Service'
import session from '../session'

class Auth extends Service {
  saveSession(token, auth) {
    session.saveToken(token)
    session.setAuthData(auth)
  }

  /**
   * 服务端登录
   * @param {string} userName 用户名
   * @param {string} password 密码
   */
  login(userName, password) {
    const Authorization = 'Basic ' + btoa(`${userName}:${password}`)
    return this.post('/login', {}, { headers: { Authorization } }).then(data => {
      this.saveSession(data.token, data.userDto)
      return data
    })
  }

  /**
   * 登出
   */
  logout() {
    return this.post('/logout')
      .then(() => session.clear())
      .catch(() => session.clear())
  }
}

export default new Auth()
