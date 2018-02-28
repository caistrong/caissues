import axios from 'axios'
import config from './config'

export default {
  getIssuesOfPage: async function (PageNumber) {
    try {
      let res = await axios.get(`https://api.github.com/repos/${config.user_name}/${config.blog_repo}/issues?page=${PageNumber}&per_page=${config.per_page}`)
      return res.data
    } catch (err) {
      alert(err)
    }
  },
  getIssue: async function (number) {
    try {
      let res = await axios.get(`https://api.github.com/repos/${config.user_name}/${config.blog_repo}/issues/${number}`)
      return res.data
    } catch (err) {
      alert(err)
    }
  },
  getIssueCount: async function () {
    try {
      let res = await axios.get(`https://api.github.com/repos/${config.user_name}/${config.blog_repo}`)
      return res.data.open_issues_count
    } catch (err) {
      alert(err)
    }
  }
}
