import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import logoBlackOnyx from "../../Assets/BB.png";

export const Footer = () => {
  return (
      <div className=".container-fluid">
          <div className="text-white bg-dark">
              <div className="p-4 pb-0">

                  <section className="">
                      <div className="row">
                          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
  
                              <h6 className="text-uppercase mb-4 font-weight-bold">
                                  Nuestra entidad
                              </h6>
                              
                              <a
                                target="_blank" 
                                href="https://www.instagram.com/blackonyxgg/?hl=es"
                              >
                              <img
                                  style={{
                                      width: '90%'
                                  }}
                                  src={logoBlackOnyx}/>
                              </a> 
                          </div>
  
                          <hr className="w-100 clearfix d-md-none" />
  
                          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                              <h6 className="text-uppercase mb-4 font-weight-bold">Categorias</h6>
  
                              <Link
                                  to="/category/carta"
                                  className="nav-link" 
                              >
                                  singles
                              </Link>
  
                              <Link
                                  to="/category/carpeta"
                                  className="nav-link"
                              >
                                  Carpetas
                              </Link>
  
                              <Link
                                  to="/category/deckbox"
                                  className="nav-link"
                              >
                                  Deckbox
                              </Link>
  
                              <Link
                                  to="/"
                                  className="nav-link"
                              >
                                  inicio
                              </Link>
                          </div>
  
                          <hr className="w-100 clearfix d-md-none" />
  
                          <hr className="w-100 clearfix d-md-none" />
  
                          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                              <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                              <p><i className="fas fa-home mr-3"></i> La Rioja, Argentina</p>
                              <p><i className="fas fa-envelope mr-3"></i> Blackonyxsupport@gmail.com</p>
                              <p><i className="fas fa-phone mr-3"></i> 3804 123456 </p>
                              <p><i className="fas fa-print mr-3"></i> 3804 654321</p>
                          </div>
  
                          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                              <h6 className="text-uppercase mb-4 font-weight-bold">Redes Sociales</h6>
  
                              <a 
                                  target="_blank" 
                                  href="https://www.facebook.com/blackonyxgg/"
                              >  
                                  <button 
                                      className="btn btn-danger" style={{
                                          margin: 10,
                                          borderRadius: 10,
                                          width: 70,
                                      }}>
                                      <FontAwesomeIcon icon={faFacebook}/>
                                  </button>
                              </a>  
                              <br/>
                              <a 
                                  target="_blank" 
                                  href="https://www.instagram.com/blackonyxgg/?hl=es"
                              >
                                  <button className="btn btn-danger"style={{
                                      margin: 10,
                                      borderRadius: 10,
                                      width: 70,
                                  }}>
                                      <FontAwesomeIcon icon={faInstagram} />
                                  </button>
                              </a>
                              <br/>
                              <a 
                                  target="_blank" 
                                  href="http://google.com"
                              >
                                  <button className="btn btn-danger"style={{
                                      margin: 10,
                                      borderRadius: 10,
                                      height: 40,
                                      width: 70,
                                  }}>
                                      <FontAwesomeIcon icon={faTwitter} />
                                  </button>
                              </a>
              
                          </div>
                      </div>
                  </section>
              </div>
              <div className="text-center p-3">
                  © 2022 Copyright BlackOnyx Store
              </div>
          </div>
      </div>
    
  )
}
