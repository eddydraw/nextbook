import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading' 

const introductionPage = () => {
    return (
        <Layout>
            <NavBook previous="/loginPage" next="/chapterPage"/>
            <Container type="basic">
                <Heading title="Introduction" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default introductionPage;