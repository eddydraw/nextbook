import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const acknowledgementPage = () => {
    return (
        <Layout>
            <NavBook previous="/epiloguePage" next="/comingSoonPage"/>
            <Container type="basic">
                <Heading title="Acknowledgement" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default acknowledgementPage;