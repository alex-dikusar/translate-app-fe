import AppLayout from 'src/components/AppLayout';
import AppProviders from './components/AppProviders';

function App() {
  return (
    <AppProviders>
      <AppLayout>App Layout</AppLayout>
    </AppProviders>
  );
}

export default App;
