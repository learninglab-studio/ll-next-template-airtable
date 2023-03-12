import airtable from 'airtable';
import Link from 'next/link';
import { Stringify, Gap } from '@/components/utilities';
import llog from '@/lib/utils/ll-loggers'
import config from '@/config/ssg-config'

// const myTable = "_PROJECTS"
// const myView = "Spring 2023"
// const mySlugField = "slug"

const RecordList = (props) => {
  return (
      <div>
        <Gap height="30"/>
        <h1>{config.myTable} record list</h1>
        <div>
        <Gap height="30"/>
        {props.records.map((record, i) => {
        return (
            <div key={i}>
              <Link  href={`/ssg/${record.fields[config.mySlugField]}`}><h3>{record.fields.Title ? record.fields.Title : record.id}</h3></Link>
              <Stringify data={record} />
            </div>          
          )
        })}
      </div>
        
      </div>
  )
}


export async function getStaticProps() {
  const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
  const records = await base(config.myTable).select({ view: config.myView }).all();
  llog.blue(config)
  llog.magenta(records)
  return {
    props: {
      records: JSON.parse(JSON.stringify(records)),
    },
  };
}

export default RecordList