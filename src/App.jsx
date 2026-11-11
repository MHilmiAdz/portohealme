import { MotionConfig } from 'framer-motion';
import Portfolio from './Portofolio';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Portfolio />
    </MotionConfig>
  );
}

export default App;
