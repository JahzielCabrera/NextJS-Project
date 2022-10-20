import Navigation from "./navigation"
import Head from "next/head"

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>Next JS Project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/litera/bootstrap.min.css" integrity="sha384-enpDwFISL6M3ZGZ50Tjo8m65q06uLVnyvkFO3rsoW0UC15ATBFz3QEhr3hmxpYsn" crossorigin="anonymous" />
            </Head>
            <Navigation />
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )
}   

export default Container