export default function Stringify ({object, data}) {
    if (object) {
        return (
            <div style={{width: "100%", overflow: "scroll"}}>
                <pre>
                    {JSON.stringify(object, null, 4)}
                </pre>
            </div>
        )
    } else if (data) {
        return (
            <div style={{width: "100%", overflow: "scroll"}}>
                <pre>
                    {JSON.stringify(data, null, 4)}
                </pre>
            </div>
        )
    }
    
}
