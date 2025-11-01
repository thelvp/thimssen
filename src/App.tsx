import { BrowserRouter, Route, Routes } from 'react-router';
import { About } from './pages/About';
import { ErrorPage } from './pages/Errorpage';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';
import { Layout } from './components/Layout';

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
