const Gap = (props) => {
    let w = props.width ? `${props.width}px` : "0px"
    let h = props.height ? `${props.height}px` : "0px"
    return (
        <div style={{width: w, height: h}}></div>
    )
}

export default Gap;