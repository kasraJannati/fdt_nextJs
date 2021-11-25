import Head from 'next/head'
import Layout from '../../layouts/layout'
import React from 'react';
import DescriptionPr from '../../components/project/DescriptionPr';
import Cursor from '../../components/common/cursor';
import Header from '../../components/project/Header';
import Project from '../../components/project/Project';
import {storyblok} from '../../config/storyblok';
let cursorTarget = ['.descriptionPr'];

export default function Projects({data}){
    return (
      <div className={`projectsPage ${data.h1}`}>

          <Head>
            <title>FDT | {data.h1}</title>
            <meta name="description" content={data.description} />
          </Head>

          <Header data={data}/>
          <DescriptionPr title={data.title} description={data.description}/>
          {data.projects.map((project, index) => {
            return  <div className="pb-5" key={index}>
                        <Project index={index} project={project}/>
                    </div>
          })}
          <Cursor cursorTarget={cursorTarget}/>
      </div>
    );
}


export async function getStaticPaths() {   /* run first */
  const res = await storyblok.get('cdn/stories/', {
    "starts_with": "projects"
  })
  .then(response => {
    return response;
  }).catch(error => { 
    return error;
  })
  const data = res.data.stories; 
  return {
    paths: data.map((category) => ({
      params: {
        slug: category.full_slug.split('/')[1],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) { /* run second */
  const res = await storyblok.get(`cdn/stories/projects/${slug}/content`,{})
  .then(response => {
    return response;
  }).catch(error => { 
    return error;
  })
  const data = res.data.story.content;
  return {
    props: {
      data: data
    }
  };
};

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
