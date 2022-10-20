import { useRouter } from 'next/router';
import Container from "../../components/Container";
import fecth from 'isomorphic-fetch';
import Head from 'next/head';

const UserProfile = (props) => {

    const router = useRouter()
    const { id } = router.query

    const { user } = props

    return (
        <>
            <Container>
                <Head>
                    <title> {user.first_name} {user.last_name} | NextJS Project</title>
                </Head>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className='card-header text-center'>
                                <img src={user.avatar} alt={user.first_name + user.last_name} style={{borderRadius: '50%'}}/>
                            </div>
                            <div className='card-body text-center'>
                                <h3>{user.id}. {user.first_name} {user.last_name}</h3>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

UserProfile.getInitialProps = async (ctx) => {
    //console.log(ctx.query.id)
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJSON = await res.json()
    return {user: resJSON.data}
}

export default UserProfile