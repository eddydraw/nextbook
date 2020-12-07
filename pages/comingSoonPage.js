import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const comingSoonPage = () => {
    return (
        <Layout>
            <NavBook previous="/acknowledgementPage" next="/backCoverPage"/>
            <Container type="basic">
                <Heading title="Coming soon / Read more" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default comingSoonPage;