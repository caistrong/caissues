import ArticleList from '../components/ArticleList'
import ArticleDetails from '../components/ArticleDetails'

const routes = [
  {
    path: '/',
    name: 'index',
    component: ArticleList
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: ArticleDetails
  }
]

export default routes
