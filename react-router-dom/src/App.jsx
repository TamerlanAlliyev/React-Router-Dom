import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Company from './pages/child/Company';
import ProductDetail from './pages/child/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/About' element={<About />}>
          <Route path='company' element={<Company />} />
        </Route>

        <Route path='/Products' element={<Products />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
