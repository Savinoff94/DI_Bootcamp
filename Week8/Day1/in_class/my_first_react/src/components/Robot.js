const Robot = (props) => {
    const {robotinfo} = props;
    console.log(robotinfo);
    const{name,email,username,id} = robotinfo;
    return(
        <>
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 dashed shadow-5 .bw2 b--black'>
            <img src={`https://robohash.org/${id}/?size=200x200`} alt='robot'/>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{username}</h2>
        </div>
        </>
    )
}

export default Robot;
