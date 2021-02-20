import Head from 'next/head'
import {withRouter} from 'next/router'
import {useState} from 'react'

const Home = ({ router }) => {
  const [pickedColors, setPickedColors] = useState([])

  const colors = router.asPath.split('/').filter(({length}) => length > 0)

  return (
    <div>
      <Head>
        <title>Color</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { colors.map((color, index) => <div className="Color" key={`color-${index}`} style={{ backgroundColor: `#${ color }`, width: `${100.0 / colors.length}vw`}} />) }
      </main>
    </div>
  )
}

export default withRouter(Home)