import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const theme = createTheme();

    const { values, handleChange } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          
        <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
          <AppBar position="static"
          >
            <Toolbar>
              <Typography variant="h6">Enter User Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
            label="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            margin="normal"
            
            
          />
          <br />
          <TextField
            label="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            margin="normal"
          />
          <br />
          <TextField
            label="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin="normal"
          />
          <br />
          <div>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          </div>
          </Dialog>
          
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
