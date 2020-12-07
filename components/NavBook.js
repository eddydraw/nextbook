import Link from 'next/Link'

import Container from './Container'
import Heading from './Heading'

import { useEffect , useState } from 'react'

const NavBook = ({ previous , next , onclick , children, goToPreviousChapter , goToNextChapter }) => {

    const [count, setCount] = useState(1);

    const TopNav = () => {
     // console.log(previous)
     // console.log(next)
      return (
        <div className="flex tablet:space-x-96 mobile:space-x-36">
          <Link href = { count > 1 && count <= 10 ? " " : previous } >
            <a className="w-half" onClick={goToPreviousChapter} >
              <Heading title="<==<" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </a>
          </Link>
          <Link href = { count > 1 && count <= 10 ? " " : next } >
            <a className="w-half" onClick={goToNextChapter} >
              <Heading title=">==>" font="primary" point="x2large" weight="medium" align="center" spacing="wildest" />
            </a>
          </Link>
        </div>
      )
    }
    return (
        <Container type="floating">
          {children ? children : <TopNav/>}
        </Container>  
    );
};

export default NavBook;