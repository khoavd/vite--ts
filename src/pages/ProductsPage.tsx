import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  const [searchParams] = useSearchParams();

  function getFilteredProducts() {
    const search = searchParams.get('search');

    if (search === null || search === '') {
      return products;
    } else {
      return products.filter(
        (prod) => prod.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1,
      );
    }
  }

  return (
    <div className="text-center p-5 text-xl">
      <h2 className="text-base text-slate-600 font-bold">Here is some great tool for ReactJS</h2>

      <ul className="list-none m-0 p-0">
        {getFilteredProducts().map((prod) => (
          <li key={prod.id} className="p-1 text-base text-slate-800">
            <Link to={`${prod.id}`} className="p-1 text-base text-slate-800 hover:underline">
              {prod.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
