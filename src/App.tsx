import { GiftButton } from '@/components/pin-app/GiftButton';
import { BackToTop } from '@/components/pin-app/BackToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home children={undefined}/>} />
      </Routes>
      <GiftButton />
      <BackToTop />
    </Router>
  );
}

export default App;
