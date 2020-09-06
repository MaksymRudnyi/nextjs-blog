import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default () => {
    return <Layout>
        <Head>
            <title>First page</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1>First post</h1>
        <Link href="/">
            <a>Go home</a>
        </Link>

        <style jsx>{`
            h1 {
                font-size: 24px;
                color: blue
            }
        `}
        </style>
    </Layout>
}

