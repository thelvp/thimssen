import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <h1>Content</h1>
      <Footer />
    </div>
  );
}
export default App;
