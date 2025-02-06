import { GiftButton } from '@/components/pin-app/gift/GiftButton';
import { BackToTop } from '@/components/pin-app/backtotop/BackToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import NewArrival from '@/pages/NewArrival';
import BestSeller from '@/pages/BestSeller';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/best-seller" element={<BestSeller />} />
      </Routes>
      <GiftButton />
      <BackToTop />
    </Router>
  );
}

export default App;
