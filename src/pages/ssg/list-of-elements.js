import airtable from 'airtable';
import Link from 'next/link';
import { Stringify, Gap } from '@/components/utilities';

const TaskCard = ({data}) => {
  return (
    <div>
      <h4>title</h4>
      <p>{data.fields.Title ? data.fields.Title : "No Title Provided"}</p>
      <h4>description</h4>
      <p>{data.fields.Description ? data.fields.Description : "No Description"}</p>
      <h4>created</h4>
      <p>{data.fields.CreatedTime ? data.fields.CreatedTime : "no data"}</p>
      <h4>priority</h4>
      <p>{data.fields.Priority ? data.fields.Priority : "no data"}</p>
      <h4>status</h4>
      <p>{data.fields.Status ? data.fields.Status : "no data"}</p>
      <h4>taskName</h4>
      <p>{data.fields.taskName ? data.fields.taskName : "no data"}</p>
      <h4>assignedTo</h4>
      <p>{data.fields.AssignedTo ? data.fields.AssignedTo : "no data"}</p>
      <Stringify data={data} />
    </div>
  )
}

const TaskList = ({tasks}) => {
    return (
      <div>
        <h2>tasklist</h2>
        <Gap height="30"/>
        {tasks.map(card => {
        return (
          <TaskCard data={card} />
        )
      })}
      </div>
      
    )
}

export async function getStaticProps() {
  const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_MENU_BASE);
  const records = await base('_TASKS').select({ view: 'MAIN' }).all();
  console.log(  JSON.stringify(records, null, 4))
  const links = records.map((record) => ({
    params: { id: record.id },
  }));

  return {
    props: {
      records: JSON.parse(JSON.stringify(records)),
    },
  };
}


export default function TasksStatic(props){
    return (
        <div>
          <h1> tasks</h1>
          <TaskList tasks={props.records} />
          {/* <Stringify data={props} /> */}
        </div>
    )
}

