import React, { Component } from 'react'
import exampleStylemodule from './exampleStylemodule.css'
import Channel from './Channel';

export default class example extends Component {
  
constructor(props) {
  super(props);
  this.props = props;
  this.buttonClickHandler = this.buttonClickHandler.bind(this);
  this.swapHandler = this.swapHandler.bind(this);

  this.state = {
    swapStatus: true,
    shoutout:"Please Subscribe to",
    channels : [{
      id:1,
      name:"RAJ",
      url:"raj.com"
    },
    {
      id:2,
      name:"DEVARINTI",
      url:"devarinti.com"
    },
    {
      id:3,
      name:"KING",
      url:"king.com"

    },
    {
      id:4,
    name:"DEV",
    url:"dev.com"
   }

    ]
    
  }
}
buttonClickHandler = () => {
  //alert(this.props.data);
  this.setState({
    shoutout:"Subscribed to  Rajkumar Devarinti Channel.Thank You!"
  })

}
swapHandler() {
  this.setState({swapStatus:!(this.state.swapStatus)})

}
  render() {
    const style = {
      color:"red"
    }
   let cs;
   cs = this.state.channels.map((channel)=>{
    return <Channel key={channel.id} name={channel.name} url={channel.url}/>
   })


    return (
      <div className={exampleStylemodule.DivStyle}>
       <h1 style={style}> This is an class based component.Data is {this.props.data}</h1>
       <h1 style={{
      color:"blue"
    }
    }>{this.state.shoutout}</h1>
    {this.state.swapStatus === true ? cs :''}
    <button onClick={this.swapHandler}>swap</button>
       </div>
    )
  }
}


