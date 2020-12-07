import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const dedicationPage = () => {
    return (
        <Layout>
            <NavBook previous="/tableOfContentsPage" next="/forewordPage"/>
            <Container type="basic">
                <Heading title="Dedication" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default dedicationPage;