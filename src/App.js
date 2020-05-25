import React,{Component} from 'react';
import './App.css';

import GamePage from './components/GamePage';
import GameResult from './components/GameResult';
import UserName from './components/UserName';

export default class App extends Component
{
  componentDidMount=()=>{
    document.title='Rock Paper Scissor';
  }
  constructor(props)
  {
    super(props);
    this.state={
      name: '',
      history: [],
      choices:{
        0:'rock',
        1:'paper',
        2:'scissor'
      },
      score:{
        comp:0,
        user:0
      },
      won:-1,
      namein:0
    }
  }
  chooseAuto=()=>{
    return this.state.choices[Math.floor(Math.random()*3)];
  }
  end=()=>{
    let {user,comp}=this.state.score;
    if(user>comp)
      this.setState({
        won: 1
      })
    else if(user<comp)
      this.setState({
        won:2
      })
    else
      this.setState({
        won:0
      })
  }
  countScore=(val)=>
  {
    let {user,comp}=val;
    let us=this.state.score.user,cp=this.state.score.comp;
    if(user==='rock')
    {
      if(comp==='paper')
        cp++;
      else if(comp==='scissor')
        us++;
    }
    else if(user==='paper')
    {
        if(comp==='rock')
        us++;
      else if(comp==='scissor')
        cp++;
    }
    else if(user==='scissor')
    {
        if(comp==='paper')
        us++;
      else if(comp==='rock')
        cp++;
    }
    this.setState({
      score:{
        user:us,
        comp:cp
      }
    })
  }
  click=v=>e=>{
    let choice=this.state.history;
    let el={
      user:this.state.choices[v],
      comp:this.chooseAuto()
    };
    this.countScore(el);
    choice.push(el);
    this.setState({
      history:choice
    })
  }
  changeName=(e)=>{
      this.setState({
          name:e.target.value
      })
  }
  nextPage=n=>{
    this.setState({
      namein:1
    })
  }
  render=()=>{
    if(this.state.won!==-1)
      return <GameResult won={this.state.won} name={this.state.name}/>
    else if(this.state.namein!==0)
      return <GamePage stats={this.state} click={this.click} end={this.end}/>
    else
      return <UserName next={this.nextPage} changeName={this.changeName} name={this.state.name}/>
  }
}