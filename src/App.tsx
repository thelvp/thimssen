import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components';
import { Home, About, Work, Contact, ErrorPage } from './pages';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
