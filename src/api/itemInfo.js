import request from './request'

export function getItemsApi() {
  return request({
    url: '/items',
    method: 'get',
  })
}
export function getItemByIdApi(id) {
  return request({
    url: `/items/${id}`,
    method: 'get',
  })
}

export function addItemApi(item) {
  return request({
    url: '/items',
    method: 'post',
    data: item,
  })
}

export function updateItemApi(id, item) {
  return request({
    url: `/items/${id}`,
    method: 'put',
    data: item,
  })
}

export function deleteItemApi(id) {
  return request({
    url: `/items/${id}`,
    method: 'delete',
  })
}
