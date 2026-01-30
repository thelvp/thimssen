import { HashRouter, Route, Routes } from 'react-router';
import { Layout } from './components';
import { Home, About, Contact, ErrorPage, Projects } from './pages';
import { Music } from './pages/Music';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
