import { useSelector } from 'react-redux';
import ExampleUseCallback from './basesReactHooks/ExampleUseCallback';
import ExampleUseEffect from './basesReactHooks/ExampleUseEffect';
import ExampleUseLayoutEffect from './basesReactHooks/ExampleUseLayoutEffect';
import ExampleUseMemo from './basesReactHooks/ExampleUseMemo';
import ExampleUseRef from './basesReactHooks/ExampleUseRef';
import ExampleUseSelector from './basesReactHooks/ExampleUseSelector';
import ExampleUseState from './basesReactHooks/ExampleUseState';
import UseCookieEx from './customHooks/js/UseCookieEx';
import UseFetchEx from './customHooks/js/UseFetchEx';

function App() {
  return (
    <div className="App">
      <h2>JavaScript version</h2>
      <ExampleUseState />
      <ExampleUseEffect />
      <ExampleUseLayoutEffect />
      <ExampleUseRef />
      <ExampleUseMemo />
      <ExampleUseCallback />
      <ExampleUseSelector />
      <UseCookieEx />
      <UseFetchEx />
    </div>
  );
}

export default App;
