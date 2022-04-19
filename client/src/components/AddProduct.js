import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';

export default function AddProduct(props) {
    return (
        <>
            <Dialog open={props.state.openProductModal} onClose={props.handleProductClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">Add Product</DialogTitle>
                <DialogContent>
                    <TextField id="standard-basic" type="text" autoComplete="off" name="name" value={props.state.name} onChange={props.onChange} placeholder="Product Name" required />
                    <br />
                    <TextField id="standard-basic" type="text" autoComplete="off" name="desc" value={props.state.desc} onChange={props.onChange} placeholder="Description" required />
                    <br />
                    <TextField id="standard-basic" type="number" autoComplete="off" name="price" value={props.state.price} onChange={props.onChange} placeholder="Price" required />
                    <br />
                    <TextField id="standard-basic" type="number" autoComplete="off" name="discount" value={props.state.discount} onChange={props.onChange} placeholder="Count" required />
                    <br /><br />
                    <Button variant="contained" component="label" > Upload
                        <input id="standard-basic" type="file" accept="image/*" name="file" value={props.state.file} onChange={props.onChange} id="fileInput" placeholder="File" hidden required />
                    </Button>&nbsp;
                    {props.state.fileName}
                </DialogContent>

                <DialogActions>
                    <Button onClick={props.handleProductClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={props.state.name == '' || props.state.desc == '' || props.state.discount == '' || props.state.price == '' || props.state.file == null} onClick={(e) => props.addProduct()} color="primary" autoFocus >
                        Add Product
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
