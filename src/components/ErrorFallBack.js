function ErrorFallback({ error, resetErrorBoundary }) {
        return (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button
              onClick={resetErrorBoundary}
              className="p-2 rounded-xl border border-emerald-300 active:scale-95 duration-100 transition-all ease-in text-blue-700 bg-white w-40 h-10"
            >
              Reload
            </button>
          </div>
        );
      }
      
      export default ErrorFallback;