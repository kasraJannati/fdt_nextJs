import Head from 'next/head'
import Layout from '../layouts/layout'
import React, {useState} from 'react';
import Scrolldown from '../components/common/srolldown';
import mars from '/public/img/mars-contact.jpg'
import contactShape from '/public/img/poly2.png';
import {storyblok} from '../config/storyblok';

export async function getServerSideProps() {
  const res = await storyblok.get('cdn/stories/contactpage/content', {})
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

export default function Contact({data}) {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [successful, setSuccessful] = useState("");
    const [error, setError] = useState("");

    
    let scrollTarget = '.formContactBox';
    let phoneContact = "tel:" + data.phone.url;
    let emailContact = "mailto:" + data.email.url;
    let formTitle = 'Want to work with us?';

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
          firstName,
          email,
          content
      }

      function validateEmail(elementValue){      
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue); 
      } 
     
      if(validateEmail(email) == false){
        setError('Please enter a valid email!');
      }else{
        sendEmail();
      }

      function sendEmail(){
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
              setSubmitted(true)
              setFirstName('')
              setEmail('')
              setContent('')
              setError('')
              setSuccessful('We will connect with you soon!')
            }
        })
      }

    }
    
    return (
        <div className="contactPage">
            <Head>
                <title>FDT | {data.title}</title>
                <meta name="description" content={data.description} />
            </Head>

            <section className="writeUs py-5 position-relative d-flex align-items-center">
               <div className="container text-start position-relative">
                    <h1 className="pt-5 text-uppercase">{data.title}</h1>
                    <div className="pt-3">
                        <p>{data.description} <br />
                            <a href={phoneContact} className="text-white text-decoration-none">{data.phone.url}</a><br />
                            <a href={emailContact} className="text-white text-decoration-none">{data.email.url}</a>
                        </p>
                    </div>
               </div>
               <img src={mars.src} alt="future deep tech" className="marsImage"></img>
            </section>
            {/* I set autoComplete equal to name because of the behavior of chrome */}
            <section className="formContactBox py-5 position-relative">
                <Scrolldown target={scrollTarget}/>
                <div className="container py-5 mb-5">
                    <h4 className="py-5 text-uppercase">{formTitle}</h4>
                    <form className="formContact m-auto" autoComplete="off" noValidate>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">Name</label>
                            <input type="text" className="form-control" id="firstname" name="firstname" required value={firstName} autoComplete="firstname" onChange={e => setFirstName(e.target.value)}/> 
                        </div>
                        <div className="my-5 py-2">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" required value={email} autoComplete="email" onChange={e => setEmail(e.target.value)}/>
                            <div className="messageError mt-3 fw-bold text-danger">{error}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">What we need to know?</label>
                            <input type="text" className="form-control" id="content" name="content" required value={content} autoComplete="content" onChange={e => setContent(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-5" onClick={(e)=>{handleSubmit(e)}} disabled={submitted}><span>G</span>et <span>I</span>n <span>T</span>ouch</button>
                        <div className="messageSend mt-3 fw-bold text-success">{successful}</div>
                    </form>
                </div>
                <div className="contactShapeBox">
                    <img src={contactShape.src} alt="future deep tech" className="contactShape"></img>
                </div>
            </section>
        </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <Layout>
        {page}
        </Layout>
    )
}