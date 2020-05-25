import React,{Component} from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';  
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class UserName extends Component
{
    render=()=>{
        return  (
            <MuiThemeProvider>
              <React.Fragment>
        <AppBar title='Rock Paper Scissor Game' background='secondary' showMenuIconButton={false}/>
            <div className='input-form'>
                <TextField floatingLabelText='Name' hintText='Enter Your Name' title='Name' floatingLabelStyle={{color:'red'}} defaultValue={this.props.name} className='button' onChange={this.props.changeName}/>
                <RaisedButton label='Proceed' onClick={this.props.next} backgroundColor='green' labelColor='white'/>
            </div>
              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}