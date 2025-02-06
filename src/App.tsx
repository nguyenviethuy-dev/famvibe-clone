import { GiftButton } from '@/components/pin-app/gift/GiftButton';
import { BackToTop } from '@/components/pin-app/backtotop/BackToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import NewArrival from '@/pages/NewArrival';
import BestSeller from '@/pages/BestSeller';
import ProductDetailPage from "./pages/ProductDetailPage"
import TrackingPage from "@/pages/TrackingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route path="/best-seller" element={<BestSeller />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />{/* Route cho trang chi tiết sản phẩm */}
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
      <GiftButton />
      <BackToTop />
    </Router>
  );
}

export default App;
