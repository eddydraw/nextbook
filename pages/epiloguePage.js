import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const epiloguePage = () => {
    return (
        <Layout>
            <NavBook previous="/chapterPage" next="/acknowledgementPage"/>
            <Container type="basic">
                <Heading title="Epilogue" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </Container>
        </Layout>
    );
};

export default epiloguePage;