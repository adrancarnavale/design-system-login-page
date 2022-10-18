import { Text } from './components/Text/Text';

export function App() {
  return (
    <div className="h-screen w-screen font-sans m-0 p-0 box-border bg-gray-900">
      <Text asChild>
        <h1>App</h1>
      </Text>
    </div>
  );
}

export default App;
