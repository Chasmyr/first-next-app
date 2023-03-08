import { useRouter } from "next/router"

function ClientsProjectPage() {

    const router = useRouter()

    console.log(router.query)

    function loadProjectHandler(){
        // laod data...
        // then navigate away
        // router.push(`/clients/${router.query.clientId}/projecta`)
        // l'on peux aussi ajouter un object
        router.push({
            pathname: '/clients/[clientId]/[clientProjectId]',
            query: {clientId: router.query.clientId, clientProjectId: 'projecta'}
        })
    } 

    return (
        <div>
            <h1>The projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientsProjectPage