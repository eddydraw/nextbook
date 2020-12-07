import Layout from '../Layouts/Layout'
import NavBook from '../components/NavBook'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ChapterContent from '../components/ChapterContent'

import useFirestore from '../hooks/useFirestore'

import { useRouter } from 'next/router'
import { useEffect , useState } from 'react'

export function Chapter () {
    
    //Load all chapters from Firestore !!change firestore index name!!
    const { docs } = useFirestore('histoires')

    //Set the states
    const [ count , setCount ] = useState(1)
    const [ chapters , setChapters ] = useState([])
    const [ chapterPages , setChapterPages ] = useState(0)
    const [ content , setContent ] = useState(" ")
    const [ previousPage , setPreviousPage ] = useState(" ")
    const [ nextPage , setNextPage ] = useState(" ")
    const [ pageNumber , setPageNumber ] = useState(0)
    const [ pageMaxNUmber , setPageMaxNUmber ] = useState(50)

    //Load the router
    const router = useRouter()
    //Get the number of chapters
    const numberOfChapters = docs.length

    //
    //CHAPTER FETCHING
    //

    //Find the right content of the chapter from the the router
    const chapterId = router.query.id
    const activeRouterId = findChapterInRouter(docs)
    let currentChapterId = activeRouterId[0]

    function findChapterInRouter(chapters) {
        return chapters
        .filter(function(chapter) { 
            return chapter.id === chapterId
        })
    }

    //Find the right chapter in the database
    let chapterIndex = count 
    const activeChapterIndex = findChapterInDatabase(docs)
    let currentChapter = activeChapterIndex[0] 

    function findChapterInDatabase(chapters) {
        return chapters
        .filter(function(chapter) { 
            return chapter.index === chapterIndex
        })
    }

    //Break the chapter in chunks
    const firstpage = firstChunk(currentChapter)
    const restOfPages = restOfChunks(currentChapter)
    const allChunks = chapterArray(firstpage, restOfPages); 

    function chapterArray(story, chapters) {
        if(story){
            return story.concat(chapters)
        } else {
            return story
        }
    }

    function firstChunk(story) {
        if(story){
            return (
                story.body
                .match(/.{1,800}/g)
                .slice(0,1)
                )
        } else {
            return story
        }
    }

    function restOfChunks(story) {
        if(story){
            return (
                story.body
                .slice(1)
                .match(/.{1,1500}/g)
                )
        } else {
            return story
        }
    }

    //Documentation
    useEffect(() => {    
        setChapters (docs)
        if(restOfPages) {
            setChapterPages(restOfPages.length)
            setContent(allChunks[pageNumber])
        }else{
            setChapterPages(0)
            setPageNumber(0)
        }
    });
    
    //
    //CHAPTER NAVIGATION
    //

    function goToNextChapter() {
        //Go to the intro page or epilogue page when no chapters are being loaded
        if (count > numberOfChapters) {
            setPreviousPage("/introductionPage")
            setNextPage("/epiloguePage")

        } else if (pageNumber >= chapterPages) {
            setCount(count + 1)
            setPageNumber(0)

        } else if(pageNumber < chapterPages) {
            setPageNumber(pageNumber + 1)
        }
    }

    function goToPreviousChapter() {
        //Go to the intro page or epilogue page when no chapters are being loaded
        if ( count <= 0 ) {
            setPreviousPage("/introductionPage")
            setNextPage("/epiloguePage")
            setPageNumber(0)

         } else if ( pageNumber < 1 && count >= 1 ) {
            setCount(count - 1)
            setPageNumber(chapterPages - 1)

        } else if ( pageNumber >= 1 ) {
            setPageNumber(pageNumber - 1)
        }
    }

    const Navigation = () => {
        return (
            <NavBook 
            previous={previousPage}
            next={nextPage} 
            goToPreviousChapter={goToPreviousChapter} 
            goToNextChapter={goToNextChapter} />
        )
    }

    //
    // CHAPTER RENDERING
    //

    if(currentChapterId) {
        return ( 
        <Layout>
            <Navigation/>
            <ChapterContent previousPageNumber={setPageNumber} nextPageNumber={setPageNumber} data={currentChapterId} body={content} pageNumber={pageNumber} chapterNumber={count}/>
        </Layout>
        )
    } else if (currentChapter) {
        return (
        <Layout>
            <Navigation/>
            <ChapterContent previousPageNumber={setPageNumber} nextPageNumber={setPageNumber} data={currentChapter} body={content} pageNumber={pageNumber} chapterNumber={count}/>
        </Layout>
        )
    } else {
        return (
        <Layout>           
            <Navigation/>
            <Container type="center">
                <Heading title="LOADING" font="primary" point="x2large" weight="medium" spacing="wildest" />
            </Container>
        </Layout>
        )
    } 
};


export default Chapter;