import { NavLink, Outlet } from "react-router-dom";
import { useInvoiceState } from './../InvoiceContext';
import { useSearchParams } from "react-router-dom";
import QueryNavLink from './../QueryNavLink';

function Invoices() {
  const invoices = useInvoiceState();
  const [searchParams, setSearchParmas] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input 
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if(filter) {
              setSearchParmas({filter});
            } else {
              setSearchParmas({});
            }
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if(!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.includes(filter.toLowerCase());
        })
          .map(invoice => (
          <QueryNavLink className={( {isActive} ) => {
            return "nav " + (isActive ? "current-nav" : "");
          }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Invoices;