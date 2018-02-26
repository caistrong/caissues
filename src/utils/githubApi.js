import axios from 'axios'

export default {
  getIssues: async function () {
    try {
      let res = await axios.get('https://api.github.com/repos/caistrong/Blog/issues')
      return res
    } catch (err) {
      console.log(err)
    }
  },
  getIssue: async function (number) {
    try {
      let res = await axios.get(`https://api.github.com/repos/caistrong/Blog/issues/${number}`)
      return res
    } catch (err) {
      console.log(err)
    }
  }
}
