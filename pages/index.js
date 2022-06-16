import Head from 'next/head'
import Layout from '../layouts/layout'
import Header from '../components/home/header'
import Description from '../components/home/description'
import Step from '../components/home/step'
import Ourclient from '../components/home/ourclient'
import Cursor from '../components/common/cursor'
import {storyblok} from '../config/storyblok';

export async function getServerSideProps() {
  const res = await storyblok.get('cdn/stories/homepage/content', {})
  .then(response => {
    return response;
  }).catch(error => { 
    return error;
  })
  const data = res.data.story.content;
  console.log(data)
  return {
    props: {data}
  }
}

export default function Home({data}) {
  let cursorTarget = ['.description','.ourclient'];
  
  return (
    <div className="homepage">
      <Head>
        <title>FDT | {data.h1}</title>
        <meta name="description" content={data.description} />
      </Head>
      <Header data = {data}/>
      <Description data = {data}/>
      <div className="stepLinkBox">
          {/* <a href="/projects/smartcontracts" className="stepLink"><Step steps={data.smartcontracts}></Step></a> */}
          <a href="/projects/blockchain" className="stepLink"><Step steps={data.blockchain}></Step></a>
          <a href="/projects/production" className="stepLink"><Step steps={data.content_production}></Step></a>
          <a href="/projects/comingsoon" className="stepLink"><Step steps={data.idea}></Step></a>
      </div>
      <Ourclient data = {data.our_client}/>
      <Cursor cursorTarget={cursorTarget}/>
    </div>
  )
}

/*** select layout  ***/
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}