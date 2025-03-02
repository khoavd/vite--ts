import { useRouteError } from 'react-router-dom';
import { Header } from './Header';

export function ErrorPage() {
  const error = useRouteError();

  function isError(error: any): error is { statusText: string } {
    return 'statusText' in error;
  }

  return (
    <>
      <Header />
      <div className="text-center p-5 text-xl">
        <h1 className="text-xl text-slate-900">Ops, an error has occurred</h1>

        {isError(error) && <p>{error.statusText}</p>}
      </div>
    </>
  );
}
