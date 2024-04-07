import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BaseView from './pages/Base';
import FaqPage from './pages/FaqPage';
import NoPage from './pages/NoPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseView />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
