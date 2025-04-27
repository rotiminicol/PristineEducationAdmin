import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import DashboardPage from './components/dashboard/DashboardPage';
import './index.css';

function App() {
  return (
    <Layout>
      <DashboardPage />
    </Layout>
  );
}

export default App;