// this page will pull from Airtable every time you load it
import { findMany } from "@/lib/utils/airtable-tools"
import llog from "@/lib/utils/ll-loggers"
import { Stringify } from "@/components/utilities"
import Link from "next/link"

// change these
const yourTable = "Tasks"
const yourView = "THE_MENU"
const slugField = "TaskID"

// this is your page code
function Page({ data }) {
    // Render data...
    return (
        <div>
            <div style={{minHeight:"100vh", width: "70%", margin: "auto", marginBottom: "2em", marginTop: "2em"}}>
                <h1>sample ssr</h1>
                <p>We got {data.length} records back. You can now loop through them to do something with the data. Like let's create links to other pages that we'll also generate server-side.</p> 
                {data.map((e, i)=>{return(
                    
                    <Link href={`/ssr/${e._table.name}/${e.fields[slugField]}`}>
                    <div
                    style={{
                      backgroundColor: 'rgba(20,20,30,.7)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '7px',
                    //   display: 'block',
                      margin: '10px auto'
                    }}>
                    {e.fields.Title}
                  </div>
                  
                    </Link>
                )})}
                <p>For now we'll also stringify the data at the bottom of this page.</p>

            </div>
            <Stringify data={data} />
        </div>
    )
}
  
// this is the function that gets data each time the page is requested
export async function getServerSideProps() {
    const atData = await findMany({
        baseId: process.env.AIRTABLE_BASE_ID,
        table: yourTable,
        view: yourView,
        maxRecords: 10
    })
    // logging the data to the (server-side) console
    llog.cyan(atData)
    // Pass data to the page via props
    // we just need to do one little thing first:
    let theData = JSON.parse(JSON.stringify(atData))
    return { props: {data: theData} }

}

export default Page