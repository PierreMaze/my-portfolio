import { lazy, Suspense } from "react";
import { useRouteError } from "react-router-dom";

const Error = lazy(() => import("../../../pages/ErrorPage.jsx"));

const RouteErrorBoundary = () => {
  const error = useRouteError();

  // Déterminer le code d'erreur et le message
  const getErrorInfo = () => {
    if (error?.status === 404) {
      return { statusCode: 404, message: "Page non trouvée" };
    }
    if (error?.status === 500) {
      return { statusCode: 500, message: "Erreur serveur" };
    }
    if (error?.status) {
      return {
        statusCode: error.status,
        message: error.statusText || error.message,
      };
    }
    return {
      statusCode: 500,
      message: error?.message || "Une erreur inattendue s'est produite",
    };
  };

  const { statusCode, message } = getErrorInfo();

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-zinc-600">Chargement...</div>
        </div>
      }
    >
      <Error statusCode={statusCode} message={message} />
    </Suspense>
  );
};

export default RouteErrorBoundary;
