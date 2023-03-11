import { useRouter } from 'next/router'

const Print = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
        <p>Printing something of type {router.query.table} with id {router.query.id}</p>
        <p>here are all the <code>router.query</code> details</p>
        <pre>{JSON.stringify(router.query, null, 4)}</pre>
    </div>
  
  )
}

export default Print
