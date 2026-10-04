import React from 'react';
import { AlertTriangle, RefreshCw, Home, Search } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LMEX App Error Boundary caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#071A33] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A9E0_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="max-w-md w-full text-center relative z-10 bg-[#0A2244]/80 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Something went wrong
            </h1>

            <p className="text-sm text-white/70 leading-relaxed mb-8">
              We encountered an unexpected issue while processing this request. Our operations monitoring team has been notified.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] text-sm font-bold shadow-md shadow-[#16A9E0]/20 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
