import Container from '../components/Container'
import Heading from '../components/Heading'

import Link from 'next/link'

const ChapterItem = ({ title, body , id , author }) => {

    return (
        <Container type="pd1">
            <Link 
                href={{ pathname: '/chapterPage',  query: { id: `${id}` }} } 
                as={`/histoire_${title}, auteur_${author}`} >
                <a>
                    <Heading title={title} font="primary" point="base" weight="light" align="left" spacing="wildest" />
                </a>
            </Link>
        </Container>
    );
};

export default ChapterItem;