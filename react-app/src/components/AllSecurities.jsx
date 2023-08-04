// We will use this file to make a table component which uses 'Security' components as children
// https://mui.com/material-ui/react-table/

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { findBonds } from '../services/SecurityServices';

const AllSecurities = () => {
    // Initially empty list containing all the securities in the database
    const [securities, setSecurities] = React.useState([]);

    React.useEffect(() => {
        getSecuritiesFromAPI();
    }, []
    )

    // Function that gets all data from Security table and sets it to 'securities' variable
    const getSecuritiesFromAPI = () => {
        findBonds()
            .then(res =>{
                setSecurities(res.data);
            })
            .catch(err => {
                setSecurities([]);
                console.log(err);
            })
    }    

    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 0 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>ISIN</TableCell>
                    <TableCell>CUSIP</TableCell>
                    <TableCell>Issuer</TableCell>
                    <TableCell>Maturity Date</TableCell>
                    <TableCell>Coupon %</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Face Value</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
                {securities.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>{row.isin}</TableCell>
                <TableCell>{row.cusip}</TableCell>
                <TableCell>{row.issuer_name}</TableCell>
                <TableCell>{row.maturity_data}</TableCell>
                <TableCell>{row.coupon}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.face_value}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row.status}</TableCell>
                </TableRow>
                ))}
            <TableBody>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default AllSecurities