import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'

const index = () => {
  return (
    <Layout>
      <NavBook previous="/backCoverPage" next="/titlePage"/>
        <Container type="basic">
          <Heading title="Front cover" font="primary" point="x3large" weight="medium" align="center" spacing="wildest" />
      </Container>
    </Layout>
  );
};

export default index;