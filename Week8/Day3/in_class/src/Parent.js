import { directive } from '@babel/types';
import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Child/>
            </div>
        )
    }
}
export default Parent;

