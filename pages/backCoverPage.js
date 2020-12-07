import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const backCoverPage = () => {
    return (
        <Layout>
        <NavBook previous="/acknowledgementPage" next="/"/>
            <Container type="basic">
                <Heading title="Back cover" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout> 
    );
};

export default backCoverPage;