import { useRouter } from 'next/router'
import { findRecordByValue, findMany } from '@/lib/utils/airtable-tools'
import config from '@/config/ssg-config'
import airtable from 'airtable'
import llog from '@/lib/utils/ll-loggers'

const Record = (props) => {
  const router = useRouter()
  return (
    <div>
        <h2>{props.record.fields.Title}</h2>
        <p>here are all the <code>router.query</code> details</p>
        <pre>{JSON.stringify(router.query, null, 4)}</pre>
        <p>and here are the <code>props</code></p>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  )
}

export async function getStaticProps(context) {
  const record = await findRecordByValue({
    baseId: process.env.AIRTABLE_BASE_ID,
    table: config.myTable,
    view: config.myView,
    field: config.mySlugField,
    value: context.params.slug
  })
  return {
    props: {
      record: JSON.parse(JSON.stringify(record)),
    },
  };
}

export async function getStaticPaths() {
  // const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
  // const records = await base(config.myTable).select({ view: config.myView }).all();
  const records = await findMany({
    baseId: process.env.AIRTABLE_BASE_ID,
    table: config.myTable,
    view: config.myView
  })
  const thePaths = records.map(r=>{
    return({
      params: {
        slug: r.fields[config.mySlugField]
      }
    })
  })
  return {
    paths: thePaths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default Record
