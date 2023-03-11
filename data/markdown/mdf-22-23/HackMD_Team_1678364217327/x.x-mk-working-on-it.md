# x.x-mk-working-on-it

## mk menu steps

- `npm i @next/font`
- 



## all the steps





0.1 dev environment
1.1 start up a next app
1.2 tour files and folders
1.3 initial react component
1.3a html basics
1.4 global styles
1.4a css basics in depth
1.5 style modules
1.5a more advanced css selectors
1.5b more advanced css properties, animations?
1.6 a new page, file-system routing
1.7 a new component, then putting it in a different file and components folder

- change h1
- change background
- import a google font

## simple html page

let's quickly create a webpage the old-fashioned way as a refresher (or first time intro to html and css). We can put old-school HTML and CSS files in the public folder, and these will get served up at the root of your site.

- in `/public` create a `simple-page.html` doc
- add some basic html and navigate to it at [localhost:3000/simple-page.html](http://localhost:3000/simple-page.html)
- you can also create a css file here. let's create a `simple-styles.css` file in the public folder, then add this css to our `simple-styles.css` doc
    ```
    body {
        background-color: blue;
    }
    ```
    and this as the HTML in our `simple-page.html` file
    ```
    <head>
        <link rel="stylesheet" type="text/css" href="simple-styles.css">
    </head>
    <body>
        <div>
            <h1>simple html page</h1>
        </div>
    </body>
    ```
- go ahead and ask chatGPT about various html elements and add them.


### Airtable API

- create Airtable API key, add that and the baseID to a file called `.env.local` in the root of your project.
```
AIRTABLE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AIRTABLE_WEBLAB_BASE=xxxxxxxxxxxxxxx
```
- now create a new page where you'll access your Airtable data. As a first proof of concept, let's make a chart. So create a page file called `chart-001.js` and add the following code

```
import React from 'react';
var Airtable = require('airtable');

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const findMany = async ({ baseId, table, view, max }) => {
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);
    var theRecords = [];
    await base(table).select({
        maxRecords: max ? max : 100,
        view: view ? view : "Grid view"
    }).eachPage(function page(records, next){
        theRecords.push(...records);
        next()
      })
      .catch(err=>{console.error(err); return})
    return theRecords;
}

export default function GameControllerChart(props) {
    console.log(props.data)
    const data = {
        labels: ['Responsiveness', 'Ease of Use', 'Coolness', 'Affordability', 'Durability'],
        datasets: props.data.map(e=>{
            return {
                label: e.fields.Name,
                data: [e.fields.ResponsivenessAverage, e.fields.EaseOfUseAverage, e.fields.CoolnessAverage, e.fields.AffordabilityAverage, e.fields.DurabilityAverage],
                backgroundColor: e.fields.Color,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        })
    };
    const options = {
    
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                min: 0,
                // max: 20
            }
        }
    
    }
    return (
        <div style={{ maxWidth: "70%", maxHeight: "80vh" }}>
            <Radar data={data} options={options} />
        </div>
    )
}

export async function getServerSideProps() {
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_WEBLAB_BASE);
    const airtableResult = await findMany({baseId: process.env.AIRTABLE_WEBLAB_BASE, table: "Controllers", view: "MAIN", max: 5});
    return { props: {data: JSON.parse(JSON.stringify(airtableResult))} }
}
```

slow this down and do in steps.

### 

## the big chunks

OK. Please do poke around other tutorials to gain some familiarity with the tools above. But if you are ready to dive in to this tutorial, here will be the basic steps

1. development environment setup
2. create a next app (but try not to freak out about its complexity)
3. html/css review (in public folder)
4. react components (in empty page)
5. js review
6. next overview
7. next file-system-based routing
8. ways of styling in react/next
9. generating pages from content
10. creating an API route (?)
11. connecting to the Airtable API
12. Airtable sidequest?
13. putting your stuff on the web: heroku/vercel/netlify/github
14. use [google sheets](https://www.andredevries.dev/posts/google-sheets-database-nextjs) as backend?
    - [google-spreadsheet npm package](https://www.npmjs.com/package/google-spreadsheet)
    - [another option from fireship](https://fireship.io/lessons/google-sheets-database-nextjs/)
    - 