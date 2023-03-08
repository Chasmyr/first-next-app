import Link from "next/link"

function ClientsPage() {

    const clients = [
        {id: 'max', name: 'Maximilian'},
        {id: 'manu', name: 'Manuel'},
        {id: 'seb', name: 'sebastian'}
    ]

    return (
        <div>
            <h1>Clients Page</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[clientId]',
                            query: {clientId: client.id}
                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClientsPage