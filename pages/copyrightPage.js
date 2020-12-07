import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const copyrightPage = () => {
    return (
        <Layout>
            <NavBook previous="/titlePage" next="/tableOfContentsPage"/>
            <Container type="basic">
                <Heading title="Copyright" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default copyrightPage;