function Button(index) {

    const { arr, io, me } = index;




    return (
        <button className="btn" onClick={() => { me(io) }}>{arr}</button>
    );
}

export default Button;