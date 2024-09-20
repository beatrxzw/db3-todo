function Inputs(props) {

    return (
        <>
            <div className="input-container">
                <label htmlFor="" className="global-label">{props.label}</label>
                <input className="input-global" type={props.type} placeholder={props.placeholder} name={props.name} />
            </div>
        </>
    )
}

export default Inputs