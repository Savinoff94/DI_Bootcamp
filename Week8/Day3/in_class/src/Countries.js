const Countries = (props) => {
    return(
        <select onChange={props.changeHandler}>
            {
                props.data.map((item,i) => {
                    return <option value={item.country_id || item.city_id}>{item.country || item.city}</option>
                })
            }
        </select>
    )
}

export default Countries;