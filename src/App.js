import './App.css';
import Home from './Home';
import About from './About';
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import GlobalNav from './GlobalNav';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Activity() {
  return <h1>Activity</h1>;
}

function NotFound() {
  return <h1>페이지를 찾을 수 없습니다.</h1>;
}

export default App;