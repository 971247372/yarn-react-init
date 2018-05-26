import request from '~/utils/request';
export async function getBanners() {
  return request.get('/vconfig/banner');
}

export async function getTag() {
  return request.get('/tag');
}

export async function getHotVideoList(data) {
  return request.get('/video/order?page=' +
      data.page +
      '&row=' +
      data.row +
      '&orderByKey=' +
      data.orderByKey +
      '&isDesc=true');
}
