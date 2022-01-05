import { useNavigate, useParams } from "react-router-dom";
import { useInvoiceState, useInvoiceDispatch } from './../InvoiceContext';

function Invoice() {
    const params = useParams();
    const navigate = useNavigate();

    const invoices = useInvoiceState();
    const dispatch = useInvoiceDispatch();

    const invoice = invoices.find(invoice => invoice.number === parseInt(params.invoiceId, 10));

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            number: invoice.number
        });
        navigate("/invoices");
    }

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {invoice.amount}</h2>
            <p>{invoice.name}: {invoice.number}</p>
            <p>Due Date: {invoice.due}</p>
            <button onClick={onRemove} >Delete
            </button>
        </main>
    );
}


export default Invoice;