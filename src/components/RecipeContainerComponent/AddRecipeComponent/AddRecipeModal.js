import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddRecipeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        console.log('handleClickOpen was clicked');
        this.setState({ open: true });
    }

    handleClickClose = () => {
        console.log('handleClickClose was clicked');
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Click to add recipe
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Recipe</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClickClose} color="primary">
                            Cancel
                        </Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddRecipeModal;