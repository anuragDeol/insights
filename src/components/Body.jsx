import { Routes, Route } from 'react-router-dom';
import Summary from '../screens/Summary';
import Cashflow from '../screens/Cashflow';
import Insight from '../screens/Insights';
import Spending from '../screens/Spending';
import Highlight from '../screens/Highlights';

function Body() {
  return (
    <Routes>
      <Route path="/summary" element={<Summary />} />
      <Route path="/cashflow" element={<Cashflow />} />
      <Route path="/insight" element={<Insight />} />
      <Route path="/spending" element={<Spending />} />
      <Route path="/highlight" element={<Highlight />} />
    </Routes>
  )
}

export default Body;
