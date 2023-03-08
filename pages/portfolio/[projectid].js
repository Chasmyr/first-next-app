import { useRouter } from 'next/router'

function PortfolioProjectPage() {
    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)

    // send request to backend sever to fetch data with router.query.projectid

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    )
}

export default PortfolioProjectPage