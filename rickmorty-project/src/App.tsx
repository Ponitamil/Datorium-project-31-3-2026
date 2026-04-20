import { useEffect, useState } from 'react';
import AuthScreen from './features/auth/AuthScreen';
import CharacterList from './features/catalog/CharacterList';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuth');
    if (savedAuth === 'true') {
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {isAuth ? (
        <>
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div>
                <h1 className="text-2xl font-bold">Rick and Morty Catalog</h1>
                <p className="text-sm text-slate-500">
                  SPA with React, TypeScript and Tailwind CSS
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:opacity-90"
              >
                Logout
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <CharacterList />
          </main>
        </>
      ) : (
        <AuthScreen onLogin={handleLogin} />
      )}
    </div>
  );
}
