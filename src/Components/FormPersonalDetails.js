import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';


class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter Personal Details</Typography>
            </Toolbar>
          </AppBar>
          <TextField
             label="Enter your Occupation"
             
             onChange={handleChange('occupation')}  //field occupation 
             defaultValue={values.occupation}
             margin="normal"
          />
          <br/>
          <TextField
             label="Enter your City"
             
             onChange={handleChange('city')}  //field city
             defaultValue={values.city}
             margin="normal"
          />
          <br/>
          <TextField
             label="Enter your Bio"
             
             onChange={handleChange('bio')}  //field bio
             defaultValue={values.bio}
             margin="normal"
          />
          <br/>
          <div>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
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
    margin: 15,
    
    
  }
};

export default FormPersonalDetails;
