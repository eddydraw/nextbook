import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Break from '../components/Break'

import { useEffect , useState } from 'react'

import Numbering from "./Numbering"

const ChapterContent = ({ data , body , pageNumber , chapterNumber }) => {

    return (
        <Container type="pd20">

            { pageNumber + 1 <= 1 
            ?       
                <div>
                    <Container type="center">
                        <Heading title={chapterNumber} font="primary" point="x2large" weight="medium" spacing="wildest" />
                        <Break/>
                        <Heading title={data.title} font="primary" point="x3large" weight="medium" spacing="wildest" />
                    </Container>
                    <p className="content"><Break/>{body}</p> 
                </div>
            : 
                <p className="content"><Break/>{body}</p> 
            }
            <Break/>
            <Numbering pageNumnber={pageNumber + 1 }/>
            <div className="items"></div>
        </Container>
    )
}

export default ChapterContent;