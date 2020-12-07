import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading' 

const loginPage = () => {
  return (
    <Layout>
      <NavBook previous="/prologuePage" next="/introductionPage"/>
      <Container type="basic">
        <Heading title="Login" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
      </Container>
    </Layout>
    );
};

export default loginPage;