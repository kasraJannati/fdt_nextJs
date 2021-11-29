import Head from 'next/head'
import Layout from '../layouts/layout'
import React from 'react';
import Cursor from '../components/common/cursor';
import Scrolldown from '../components/common/srolldown';
import lineShape from '/public/img/lineShape.png'

import {storyblok} from '../config/storyblok';
export async function getServerSideProps() {
  const res = await storyblok.get('cdn/stories/aboutpage/content', {})
  .then(response => {
    return response;
  }).catch(error => { 
    return error;
  })
  const data = res.data.story.content;
  return {
    props: {data}
  }
}


export default function About({data}) {
    let cursorTarget = ['.descriptionAbout','.joinOurTeam'];
    let scrollTarget = '.whoweare';
    let titleMembers = 'who we are?'
    let joinTitle = 'JOIN OUR TEAM'
    let joinEmail = "mailto:" + data.join_us_email.url

    return (
        <div className="aboutpage">
          <Head>
            <title>FDT | {data.title}</title>
            <meta name="description" content={data.description.split('.')[0]} />
          </Head>

          <section className="descriptionAbout py-5 position-relative">
              <div className="container">
                  <section className="position-fixed aboutDesFix">
                      <h1 className="pt-5 mt-5 text-uppercase">{data.title}</h1>
                      <p className="w-75 text-center pt-3 m-auto pb-md-5 ">
                          {data.description}
                      </p>    
                  </section>
              </div>
              <video muted autoplay="autoplay" playsinline="true">
                <source src="./vid/fdtStory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </section>
          <section  className="whoweare py-5 position-relative">
              <Scrolldown target={scrollTarget}></Scrolldown>
              <h4 className="py-md-5 pt-5 pb-0 text-white text-uppercase">{titleMembers}</h4>
              <div className="container py-5 pb-5 pt-0 position-relative">
                  <div className="imagesUs py-5">
                    {data.members.map((member) => {
                        return <div className="position-relative overflow-hidden" key={member._uid}>
                                    <img src={member.image.filename} alt="future deep tech" className="img-fluid"></img>
                                    <div className="infoMember"><span>{member.title} - {member.description}</span></div>
                                </div>
                    })}
                  </div>
              </div>
              <img src={lineShape.src} alt="future deep tech" className="lineShape position-absolute"></img>
          </section>
          <section className="joinOurTeam py-5 position-relative">
              <div className="container">
                  <h2 className="pt-5 mt-5">{joinTitle}</h2>
                  <p className="w-75 text-center pt-3 m-auto pb-md-5 ">
                  {data.join_us}
                  <br />
                  <a href={joinEmail}>{data.join_us_email.url}</a>
                  </p>    
              </div>       
          </section>
          <Cursor cursorTarget={cursorTarget}/>
        </div>
    )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}