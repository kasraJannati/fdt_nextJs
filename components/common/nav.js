import React,{ useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () =>{

    const router = useRouter()

    const items = {
      "Home": "/",
      "Our Work": {
        "programming":"/programming",
        "blockchain & nft":"/blockchain",  
        "content production":"/production",
        "coming soon":"/comingsoon",

      },
      "Our Story": "/about",
      "Get In Touch": "/contact"
    }

    const closeMenu = () => {
      var checkMenu = document.querySelector('.animated-icon1.open')
      if(checkMenu){
        document.querySelector('.click-button').click();
      }
    }

    const listItems = Object.keys(items).map((keyName, index) => {
      if(keyName === 'Our Work'){
        return  <li key={index} className="nav-item">
                    <Link href="/">
                        <a className="nav-link text-capitalize" id="projectDropdown" data-bs-toggle="dropdown" aria-expanded="false">{keyName}</a>
                    </Link>
                  <ul className="dropdown-menu" aria-labelledby="projectDropdown">
                    {Object.keys(items['Our Work']).map((keyName, index) => {
                      return  <li key={index}>
                                <Link href={'/projects'+items['Our Work'][keyName]}>
                                    <a className="nav-link text-capitalize"  onClick={closeMenu}> {keyName}</a>
                                </Link>
                              </li>
                    })}
                  </ul>
                </li>
      }else{
        return  <li key={index} className="nav-item">
                    <Link href={items[keyName]}>
                        <a className={router.pathname == items[keyName] ? "active nav-link text-capitalize" : "nav-link text-capitalize"} onClick={closeMenu} >{keyName}</a>
                    </Link>
                </li>
      }
    })

    /* menu ham */
    const [isActive, setActive] = useState("false");
    const clickHam = () => {
      setActive(!isActive);
    }

    return ( 
      <>
        <div className="container_fluid">
          <nav className="navbar navbar-expand-lg position-absolute fw-bold p-3">
            <div className="container-fluid">
              
              <a href="/" className="text-white text-decoration-none">
                <h5>Future Deep Tech</h5>
              </a>

              <button className="navbar-toggler click-button" onClick={clickHam} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <div className={isActive ? "animated-icon1" : "animated-icon1 open"}><span></span><span></span><span></span></div>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {listItems}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
}
export default Nav;



