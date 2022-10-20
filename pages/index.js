import Head from "next/head"
import Container from "../components/Container"
import fetch from 'isomorphic-fetch'
import Users from "../components/Users"

const Index = (props) => {
    return (
        <>
            <Container>
                <Head>
                    <title>Home | NextJS Project</title>
                </Head>
                <h1>NextJS</h1>
                <Users users={props.users}/>
            </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users")
    console.log(res)
    const resJSON = await res.json()
    return {users: resJSON.data}
}

export default Index