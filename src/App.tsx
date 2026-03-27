import { Layout } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
export default App;
