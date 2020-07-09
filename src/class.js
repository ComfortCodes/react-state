import React from 'react';

class ReactState extends React.Component{
    constructor(props){
        super(props);
        this.state = {outputText :'Placeholder'};
    }
    UpdateText = () =>{
        this.setState({
            outputText : document.getElementById('inputText').value
        });
    }
    render(){
        return (
        <React.Fragment>
             <input id='inputText' type='text'></input>
             <button type='button' 
             onClick ={this.UpdateText}>
                 Update
             </button>
             <br/>
             <label id='output'>
                 {this.state.outputText}
             </label>
         </React.Fragment> 
           
    );
    }
}
export default ReactState;