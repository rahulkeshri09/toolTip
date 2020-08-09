import React from 'react';
import DropDown from './DropDown';
import ToolTip from './ToolTip';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      position:"top"
    }
  }
  setPosition=(pos)=>{
    this.setState({
      position:pos
    })
  }
  componentDidMount(){
    console.log("inside componentdidmount")
    const changeColor=document.getElementsByClassName('btn');
    for (let i=0;i<changeColor.length;i++){
      changeColor[i].addEventListener('click',function(){
        changeColor[i].style.opacity=0.5;
        setTimeout(reverseColorbtn,200);
        setTimeout(removeNotification,1000);
        const y=document.getElementsByTagName('body')
        const elem=document.createElement("h1");
        elem.innerText="Successfully Set Position";
        elem.setAttribute("class","notification")
        console.log(y[0].prepend(elem));
        function reverseColorbtn(){
          changeColor[i].style.opacity=1;
        }
        function removeNotification(){
          elem.remove();
        }
      })
    }
  }
  render(){
    const {position}=this.state;
    return (
      <div className="App">
        <DropDown setPosition={this.setPosition}/>
        <ToolTip tooltipAlign={position}/>
      </div>
    );
  }
}
  

export default App;
