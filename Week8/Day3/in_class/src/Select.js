import React from 'react';
import Countries from './Countries';

class Select extends React.Component{
    constructor(){
        super();
        this.state = {
            countries:[],
            cities:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/getCountries')
        .then(res => res.json())
        .then(data=> {
        console.log(data);
        this.setState({countries:data});
        })
        .catch(e=>{
        console.log(e);
        })
    }

    changeHandler = (event) => {
        let country_id = event.target.value;
        fetch('http://localhost:4000/getCities/' + country_id)
        .then(res => res.json())
        .then(data=> {
        console.log(data);
        this.setState({cities:data});
        console.log("state", this.state.cities)
        })
        .catch(e=>{
        console.log(e);
        })
    }
    nothing = () => {}

    render (){
        return(
            <>
            <Countries  data={this.state.countries} changeHandler={this.changeHandler}/>
            <Countries  data={this.state.cities} changeHandler={this.nothing}/>
            </>
        )
    }
}

export default Select;