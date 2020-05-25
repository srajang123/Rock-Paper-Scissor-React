import React,{Component} from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';  
import AppBar from 'material-ui/AppBar';

export default class GameResult extends Component
{
    render=()=>{
        let col,res,name=this.props.name;
        switch(this.props.won)
        {
            case 0: res='Draw';
                      break;
            case 1: res=name+' Won';
                      break;
            case 2: res=name+' Lost';
                      break;
            default: 
        }
        switch(this.props.won)
        {
            case 0: col='yellow';
                    break;
            case 1: col='green';
                    break;
            case 2: col='red';
                    break;
            default :
        }
        let style={background:col};
        return  (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title='Rock Paper Scissor Game' background='secondary' showMenuIconButton={false}/>
                <div className='result' style={style}>
                    <h1>{res}</h1>
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}