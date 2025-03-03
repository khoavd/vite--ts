import { Link, NavLink, useSearchParams } from "react-router-dom";
import logo from "./assets/react.svg";

export function Header() {
  const [searchParams] = useSearchParams();
  //const navigate = useNavigate();

  // function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const search = formData.get('search') as string;
  //   navigate(`/products/?search=${search}`);
  //   //setSearchParams({ search });
  // }

  return (
    <header className="text-center text-slate-40 bg-slate-900 h-40 p-5">
      <form className="reative text-right" action={"/products"}>
        <input
          type="search"
          name="search"
          placeholder="search"
          defaultValue={searchParams.get("search") ?? ""}
          className="absolute right-0 top-0 rounded py-2 px-3 text-gray-700"
        ></input>
      </form>

      <Link to={""}>
        <img src={logo} alt="Logo" className="inline-block h-20"></img>
      </Link>
      <Link to={""}>
        <h1 className="text-2xl text-white">React Tools</h1>
      </Link>
      <nav>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="contact"
          className={({ isActive }) =>
            `text-white no-underline p-1 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="contact-two"
          className={({ isActive }) =>
            `text-white no-underline p-1 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Contact_2
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) =>
            `text-white no-underline p-1 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
}
