import './App.css';
import Home from './Home';
import About from './About';
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';
import GlobalNav from './GlobalNav';

function App() {

  return (
    <div>
      <h1>BookKeeper</h1>
      <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
      </nav>
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="hello" element={<Hello />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes> */}
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

function Hello() {
  return <h1>Hello Router</h1>;
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