import Mock from 'mockjs';

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}
export default Mock.mock('http://localhost:8080', {
  'name'    : '@name',
  'age|1-100': 100,
  'color'    : '@color'
});