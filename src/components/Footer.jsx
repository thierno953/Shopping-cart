import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'

const footerAboutLinks = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "About",
    path: "/"
  },
  {
    display: "Category",
    path: "/"
  },
  {
    display: "Accessories",
    path: "/"
  },
  {
    display: "Contact",
    path: "/"
  }
]

const footerCustomerLinks = [
  {
    display: "Html",
    path: "/"
  },
  {
    display: "Sass",
    path: "/"
  },
  {
    display: "React",
    path: "/"
  }
]
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          <div>
            <div className="footer__title">
              Address
            </div>
            <div className="footer__content">
              <p>
                Phone : <strong>+32 466 240 103</strong>
              </p>
              <p>
                Email : <strong>thiernobarry554@gmail.com</strong>
              </p>
              <p>
                Address : <strong>Brussels</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">
              About
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <div className="footer__title">
              Informations
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className="footer__about">
            <div className="footer__title">
              <p>
                About
              </p>
            </div>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
