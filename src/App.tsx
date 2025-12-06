import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
