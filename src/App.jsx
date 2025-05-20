import './App.css'
import QuoteCard from './Components/QuoteCard'
import { Helmet } from 'react-helmet-async';
function App() {

  return (
    <>
     <Helmet>

     <title>Inspirational Quotes</title>
     <meta name="description" content="Discover motivational quotes to brighten your day with PandorAI." />
  <meta name="keywords" content="quotes, inspiration, motivation" />
  <meta property="og:title" content="Inspirational Quotes" />
  <meta property="og:description" content="Find motivational quotes and optimize your day." />
  <meta property="og:type" content="website" />
      </Helmet>
   <QuoteCard/>
    </>
  )
}

export default App
