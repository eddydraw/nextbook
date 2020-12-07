import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const forewordPage = () => {
    return (
        <Layout>
            <NavBook previous="/dedicationPage" next="/prologuePage"/>
            <Container type="basic">
                <Heading title="Foreword" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default forewordPage;