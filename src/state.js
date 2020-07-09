import React, {useState} from 'react';

function StateHook (props){
    const [outputValue, setOutputValue] = 
    useState('Placeholder');

    // eslint-disable-next-line no-undef
    UpdateText = () =>{
        setOutputValue(
            document.getElementById('inputText').value
        );

}
return(
    <React.Fragment>
    <input id='inputText' type='text'></input>
    <button type='button' 
    // eslint-disable-next-line no-undef
    onClick ={UpdateText}>
        Update
    </button>
    <br/>
<label>{outputValue}</label>
</React.Fragment>
);
}
export default StateHook;