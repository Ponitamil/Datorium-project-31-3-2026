interface AuthScreenProps {
  onLogin: () => void;
}

export default function AuthScreen({ onLogin }: AuthScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-3 text-3xl font-bold">Welcome</h1>
        <p className="mb-6 text-slate-600">
          Enter the app to browse Rick and Morty characters.
        </p>

        <button
          onClick={onLogin}
          className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
