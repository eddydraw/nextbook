import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ChapterItem from '../components/ChapterItem'

import useFirestore from '../hooks/useFirestore';

const tableOfContentsPage = () => {
    
    const { docs } = useFirestore('histoires');

    const ChapterList = () => {
        return (
            <Container type="list">
                {docs && docs.map(chapter => <ChapterItem title={chapter.title} body={chapter.body} key={chapter.id} id={chapter.id} /> )}
            </Container>
        )
        }

    const Loading = () => {
        return (
            <Container type="center">
                 <Heading title="LOADING" font="primary" point="x2large" weight="medium" spacing="wildest" />
            </Container>
        )
     }
    
    return (
        <Layout>
            <NavBook previous="/copyrightPage" next="/dedicationPage"/>
            <Container type="basic">
                <Heading title="Table des chapitres" font="primary" point="x3large" weight="medium" align="center" spacing="wildest" />
                  {docs ? <ChapterList/> : <Loading/>}
            </Container>
        </Layout>
    );
};

export default tableOfContentsPage;