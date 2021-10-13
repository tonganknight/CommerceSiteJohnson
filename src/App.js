import './App.css';
import {BreakpointProvider} from 'react-socks';
import RenderLive from './components/RenderLive';

function App() {
  return (
    <BreakpointProvider>
    
      <RenderLive/>
    </BreakpointProvider>
  );
}

export default App;
