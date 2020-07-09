import React, {useState, useEffect} from 'react';

function StateHook (props){
    const [outputValue, setOutputValue] = 
    useState('Placeholder');

  function  UpdateText(){
        setOutputValue(
            document.getElementById('inputText').value
        );

}
useEffect(
    () =>{
    alert('Component Upadated');
    return () =>{ 
    alert('Component will be removed');
};
    }
);
return (
    <React.Fragment>
         <input id='inputText' type='text'></input>
         <button type='button' 
         onClick ={UpdateText}>
             Update
         </button>
         <br/>
         <label>{outputValue}
         </label>
     </React.Fragment> 
)
}
export default StateHook;