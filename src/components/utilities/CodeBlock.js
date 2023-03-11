export default function CodeBlock ({code}) {
    return (
        <div style={{width: "400px", margin: "auto", color: "white"}}>
            <pre>
                {code}
            </pre>
        </div>
    )
}