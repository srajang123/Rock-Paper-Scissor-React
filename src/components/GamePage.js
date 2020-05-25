import React,{Component} from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';  
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Table, { TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody } from 'material-ui/Table';

export default class GamePage extends Component
{
  componentDidUpdate=(prev)=>{
      console.log(prev.stats.history[prev.stats.history.length-1]);
  }
  render=()=>{
      let res;
      let val=(<div className='buttons'>
        <RaisedButton label={res} backgroundColor='green'className='button' onClick={this.props.end}/>
      </div>)
      console.log(this.props.stats.won===-1);
    if(this.props.stats.won===-1)
    {
        val=(<div className='buttons'>
        <RaisedButton label='Rock' secondary={true} onClick={this.props.click(0)} className='button'/>
        <RaisedButton label='Paper' secondary={true} onClick={this.props.click(1)} className='button'/>
        <RaisedButton label='Scissor' secondary={true} onClick={this.props.click(2)} className='button'/>
        <br/>
        <RaisedButton label='END-GAME' backgroundColor='red'className='button' onClick={this.props.end}/>
    </div>)
    }
    return(
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Rock Paper Scissor Game' background='secondary' showMenuIconButton={false}/>
        {val}
        <div className='show'>
            <Table label='History'>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Computer</TableHeaderColumn>
                        <TableHeaderColumn>User</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>
            <TableBody displayRowCheckbox={false}>
            {this.props.stats.history.map(e=>
                <TableRow>
                    <TableRowColumn>
                        {e.comp.toUpperCase()}
                    </TableRowColumn>
                    <TableRowColumn>
                        {e.user.toUpperCase()}
                    </TableRowColumn>
                </TableRow>
            )}
            </TableBody>
        </div>
      </React.Fragment>
    </MuiThemeProvider>
    )
  }
}