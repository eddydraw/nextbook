import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const prologuePage = () => {
    return (
        <Layout>
            <NavBook previous="/forewordPage" next="/loginPage"/>
            <Container type="basic">
                <Heading title="Prologue" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default prologuePage;