import request from '~/utils/request';

export async function load() {
  return request.get('/loadAuth');
}

export async function login(data) {
  return request.post('/login', { data });
}

export async function logout() {
  return request.get('/logout');
}
