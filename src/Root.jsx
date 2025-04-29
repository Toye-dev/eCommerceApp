import React from 'react';
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import NavDrop from './NavDrop';
import { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion';

// For freezing the scroll, useState wont work, because this has to be done on the body
// Acessing the body is like accessing an external api like nasa. React has no access like vanilla js.
// So, useEffect is required. Accessing the body to freeze the scroll is a side effect outside react's regular render


function Root() {

  const { navDrop, handleNavHide, handleNavView, cart} = useContext(AppContext)
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  useEffect(() => {
    if (navDrop) {
      document.body.classList.add('noScroll')
    } else { 
      document.body.classList.remove('noScroll')
    }
  },[navDrop]);
  
  return (
    <>
      <div className="rootBody"> 
        <nav>
          <div className="logoSection">
            <div className="logo">
              <p className="top">Tómi&iacute;Wò ÒKÉ</p>
              <p className="center">Cakes & pastry</p>
              <p className="bottom">- since <span className="logoYear">2020</span> -</p>
            </div>
          </div>

          <div className="navSection">
            <div
              className={`icon cancel ${navDrop ? "show" : "hide"}`}
              onClick={handleNavHide}
            >
              ✖
            </div>

            <FontAwesomeIcon
              icon={faBars}
              className={`icon bars ${!navDrop ? "show" : "hide"}`}
              onClick={handleNavView}
            />
            
              <div className="counter">{cart.reduce((total, item) => total + item.quantity, 0)}</div>
              <Link to="cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={`shoppingCart ${navDrop ? 'hidden' : "show"}`}
                />
              </Link>
            
            <NavDrop />
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className='footer'>
          <h2 className='footerHead'><em><a className='instagramLink' href="https://www.instagram.com/tomiescakes/">Follow Us</a> On Instagram</em></h2>
          <p className='moreDetails'>We bring our commitment to catering your events, organizing birthday surprises or engagement proposals. We always collaborate with you in bringing your celebrations and love affairs to life</p>
          
          <Formik
            initialValues={{email: ""}}
            validationSchema={Yup.object({
              email: Yup.string()
                .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, "Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values, { resetForm }) => {
              setIsSubmitted(true);
              resetForm();
              setTimeout(() => setIsSubmitted(false), 3000); //the submit happens for only 5 seconds and vanishes
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form className='form'>
          
                <h2 className='formText'><em>Join The Mailing List</em></h2>
                <p>Stay up tp date on upcoming workshops, tips and cake reflections</p>
                {isSubmitted && <p className='success-message'>Thank you for subscribing to our newsletter!</p>}
                <Field type="email" name="email" placeholder='Email address' />
                <ErrorMessage name="email" className='error-message' component="div"/>
                <span className="underline">*************************************</span>
                <button className='button' type='submit'>Subscribe</button>
              
                </Form>
              )
            }}
          </Formik>

          <div className="studioFlower">
            <img src="/homepageCakes/Flower-3.png"></img>
          </div>
          <p className='copyright'>Copyright © 2025 Tomiiwo Oke. All rights reserved.</p>

        </footer>
      </div>
      
    </>
  )
}

export default Root;

/*
refresher {cart.reduce((total, item) => total + item.quantity, 0)}

total is the accumulator, item is the currentValue, the current object of the array being iterated through, 0 is the third argument: the starting number 
*/