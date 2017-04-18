import Hello from './components/Hello.html'
import Header from './components/Header'
import IndexContainer from './page_containers/index.html'

window.onload = () => {
  const indexContainer = new IndexContainer({
    target: document.body
  })
  const header = new Header({
    target: document.getElementById('header-div'),
    // data: {title: 'Hello Sveleteeeeee'}
  })
  const hello = new Hello({
    target: document.getElementById('hello-div')
  })
}
