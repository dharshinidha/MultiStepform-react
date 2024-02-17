import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import  ListItem  from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      }
  render() {
    const theme = createTheme();
    const { values: {firstName, lastName, email, occupation, city, bio}} = this.props;
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
              <Typography variant="h6">Confirm User Details</Typography>
            </Toolbar>
          </AppBar>
          <List>
          <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
          </List>
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
            Confirm & Continue
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
      
    

export default Confirm;