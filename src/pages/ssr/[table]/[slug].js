import { useRouter } from 'next/router'
import { findRecordByValue } from '@/lib/utils/airtable-tools'
import { Stringify } from '@/components/utilities'
import llog from "@/lib/utils/ll-loggers"
import Markdown from '@/components/utilities/Markdown'

const yourTable = "Tasks"
const yourView = "THE_MENU"
const yourField = "TaskID"

const Page = ({data}) => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
        <p>Printing something of type <code>{router.query.table}</code> with slug <code>{router.query.slug}</code>.</p>
        <p>here are all the <code>router.query</code> details</p>
        <pre>{JSON.stringify(router.query, null, 4)}</pre>
        <h2>{data.fields.TaskTitle}</h2>
        <Markdown md={data.fields.Description} />
        <Stringify data={data} />
    </div>
  
  )
}

export async function getServerSideProps(context) {
  try {
    const atData = await findRecordByValue({
      baseId: process.env.AIRTABLE_BASE_ID,
      table: context.params.table,
      view: yourView,
      field: yourField,
      value: context.params.slug
    })
    // logging the data to the (server-side) console
    llog.cyan(atData)
    // Pass data to the page via props
    // we just need to do one little thing first:
    let theData = JSON.parse(JSON.stringify(atData))
    return { props: {data: theData} }
  } catch (error) {
    // if there's an error we send the user to a 404
    llog.red(`no data`)
      return {
        notFound: true,
      }
  }
  
}

export default Page
