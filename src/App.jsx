import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TrackOrderPage from './pages/TrackOrderPage';

function AppContent() {
  const { currentPath } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-1 flex flex-col">
        {currentPath === '/track-order' ? (
          <TrackOrderPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
