import { Layout } from './components';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
export default App;
