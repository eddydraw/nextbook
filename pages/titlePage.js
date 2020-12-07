import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading' 

const titlePage = () => {
  return (
    <Layout>
        <NavBook previous="/" next="/copyrightPage"/>
        <Container type="titleBookPage">
          <Heading title="Les Petites Histoires" font="primary" point="x6large" weight="medium" align="center" spacing="wildest" />
          <Heading title="Dr. Tshabu Djamani" font="primary" point="x3large" weight="medium" align="center" spacing="wildest" />
        </Container>  
     </Layout> 
    );
};

export default titlePage;