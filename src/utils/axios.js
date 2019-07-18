import axios from 'axios'

const requestAPI = (url, success, faill) => {
  url = 'https://easy-mock.com/mock/5d09a55b0ac790072280317a/test/' + url
  axios.get(url).then(res => {
    const data = res.data.data
    success(data)
  }).catch(err => {
    faill(err)
  })
}

export default requestAPI