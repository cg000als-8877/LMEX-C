import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TrackOrderPage from './pages/TrackOrderPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    if (currentPath === '/track-order') {
      return <TrackOrderPage />;
    }
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-1 flex flex-col">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ErrorBoundary>
  );
}
