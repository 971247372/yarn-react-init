import { observable, action, computed, runInAction } from 'mobx';
import { load, login, logout } from '../services/session';
import request from '../utils/request';

export default class Session {
  @observable data = null;
  @observable isLoading = false;
  @observable isLoaded = false;

  @computed
  get isLoggedIn() {
    const { accessToken } = this.data || {};
    return Boolean(accessToken);
  }

  @computed
  get userName() {
    const { userName = 'unknown' } = this.data || {};
    return userName;
  }

  @computed
  get userId() {
    const { userId = 'unknown' } = this.data || {};
    return userId;
  }

  @computed
  get authorization() {
    const { accessToken: authorization } = this.data || {};
    return authorization;
  }


  @action
  login = async (username, password, type, callbacks = {}) => {
    this.isLoading = true;
    const data = { username, password, type };
    try {
      const { response: session } = await login(data);
      runInAction(() => {
        this.data = session;
        this.isLoaded = true;
        request.setHeaders({
          userId: session.userId,
          Authorization: session.accessToken
        });
        if (callbacks.success) {
          callbacks.success(session);
        }
      });
    } catch (error) {
      console.log(error);
      if (callbacks.fail) {
        callbacks.fail(error);
      }
    } finally {
      this.isLoading = false;
    }
  };

  @action
  async logout() {
    try {
      await logout();
    } finally {
      window.location.reload();
    }
  }

  @action
  load = async () => {
    try {
      const { response: session } = await load();
      runInAction(() => {
        this.data = session;
        this.isLoaded = true;
        request.setHeaders({
          userId: session.userId,
          Authorization: session.accessToken
        });
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.data = null;
      });
    }
  };
}

export const name = 'session';
