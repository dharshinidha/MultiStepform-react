import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

class Success extends Component {
  render() {
    const theme = createTheme();
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
              <Typography variant="h6">Success</Typography>
              
            </Toolbar>
          </AppBar>
          <center>
              <h1>Thank you for your Submission</h1>
              <p>Will get an email for furthur instruction</p>
              <span>You can close the window now</span>
            </center>
            
        </Dialog>
         
          </React.Fragment>
      </ThemeProvider>
      
    )
  }
}

export default Success