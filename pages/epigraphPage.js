import Heading from '../components/Heading'

import Link from 'next/Link'

const epigraphPage = () => {
    return (
        <Layout>
            <Container type="basic">
                <Heading title="Epigraph" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
            <Container type="basic">
                <Link href="/introductionPage">
                <a><Heading title="Page suivante" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" /></a>
                </Link>
            </Container>
        </Layout>
    );
};

export default epigraphPage;