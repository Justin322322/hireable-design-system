import { useCallback, useState } from "react";

/**
 * Hook to throw async errors that can be caught by Error Boundaries
 *
 * @example
 * const throwError = useAsyncError();
 *
 * useEffect(() => {
 *   fetchData()
 *     .catch((error) => {
 *       throwError(error); // This will be caught by ErrorBoundary
 *     });
 * }, []);
 */
export const useAsyncError = () => {
  const [, setError] = useState();

  return useCallback(
    (error: Error) => {
      setError(() => {
        throw error;
      });
    },
    [setError]
  );
};
