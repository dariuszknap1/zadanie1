import React from 'react';
import { Button, TableBody, Table, TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';

export default function ProductsTable(props) {
    return (
        <>
            <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Count</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.state.products.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center"><img src={`http://localhost:2000/${row.image}`} width="70" height="70" /></TableCell>
                  <TableCell align="center">{row.desc}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.discount}</TableCell>
                  <TableCell align="center">
                    <Button className="button_style" variant="outlined" color="primary" size="small" onClick={(e) => props.handleProductEditOpen(row)} >
                      Edit
                    </Button>
                    <Button className="button_style" variant="outlined" color="secondary" size="small" onClick={(e) => props.deleteProduct(row._id)} >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
        </TableContainer>
        </>
    );
}
