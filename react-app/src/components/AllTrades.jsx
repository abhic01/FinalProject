// We will use this file to make a table component which uses 'Security' components as children
// https://mui.com/material-ui/react-table/

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { findAllTrades } from '../services/TradeServices';

export default function ClientPosition () {
    // Initially empty list containing all the securities in the database
    const [trades, setTrades] = React.useState([]);

    React.useEffect(() => {
        getTradesFromAPI();
    }, []
    )

    // Function that gets all data from Security table and sets it to 'securities' variable
    const getTradesFromAPI = () => {
        findAllTrades()
            .then(res =>{
                setTrades(res.data);
            })
            .catch(err => {
                setTrades([]);
                console.log(err);
            })
    }    

    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 0 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Book ID</TableCell>
                    <TableCell>Security ID</TableCell>
                    <TableCell>Counterparty ID</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Trade Status</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Buy or Sell</TableCell>
                    <TableCell>Trade Date</TableCell>
                    <TableCell>Settlement Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {trades.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.book_id}</TableCell>
                <TableCell>{row.security_id}</TableCell>
                <TableCell>{row.counterparty_id}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row.t_status}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.unit_price}</TableCell>
                <TableCell>{row.buy_sell}</TableCell>
                <TableCell>{row.trade_date}</TableCell>
                <TableCell>{row.settlement_date}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}