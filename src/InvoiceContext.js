import React, { createContext, useContext, useReducer } from "react";

const initailInvoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000"
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003"
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997"
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/2998"
    }
];

function InvoiceReducer(state, action) {
    switch(action.type) {
        case 'GET':
            return state.find(invoice => invoice.number === action.number);
        case 'REMOVE':
            console.log(state.filter(invoice => invoice.number !== action.number));
            return state.filter(invoice => invoice.number !== action.number);
        default:
            throw new Error(`Unhandle action type: ${action.type}`);
    }
}

const InvoiceStateContext = createContext();
const InvoiceDispatchContext = createContext();

export function useInvoiceState() {
    const context = useContext(InvoiceStateContext);
    if(!context) {
        throw new Error('Cannot find InvoiceStateContext');
    }
    return context;
}

export function useInvoiceDispatch() {
    const context = useContext(InvoiceDispatchContext);
    if(!context) {
        throw new Error('Cannot find InvoiceDispatchContext');
    }
    return context;
}

export function InvoiceProvider({ children }) {
    const [state, dispatch] = useReducer(InvoiceReducer, initailInvoices);
    return (
        <InvoiceStateContext.Provider value={state}>
            <InvoiceDispatchContext.Provider value={dispatch}>
                {children}
            </InvoiceDispatchContext.Provider>
        </InvoiceStateContext.Provider>
    );
}

