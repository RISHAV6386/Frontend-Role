import React from 'react'
import { FaFacebookF } from "react-icons/fa6"
import { CiTwitter } from "react-icons/ci"

const Footer = () => {
  return (
    <div>
      {/* ===== Top Section: Logo + About + Follow Us + Contact ===== */}
      <div className='grid grid-cols-3 pl-50 gap-20 pt-20'>

        {/* Logo + About Us text */}
        <div className='h-70 w-70'>
          <div className='flex items-center mt-2 ml-2 mb-8'>
            <img 
              className='size-20 bg-transparent' 
              src="https://th.bing.com/th/id/OIP.FJRn2vXUbfz9yMvMWw_VCgHaB2?w=301&h=180&c=7&r=0&o=5&pid=1.7" 
              alt="Eco" 
            />
            <h1 className='text-2xl font-bold'>E-COMM</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Social Media section */}
        <div className='h-70 w-70'>
          <h1 className='text-2xl font-bold mt-10 mb-8'>Follow Us</h1>
          <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <div className='flex items-center pt-2 gap-20'>
            <FaFacebookF />
            <CiTwitter />
          </div>
        </div>

        {/* Contact section */}
        <div className='h-50 w-50'>
          <h1 className='text-2xl font-bold mt-10 mb-8'>Contact Us</h1>
          <p className='text-xl'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>
      </div>

      {/* ===== Middle Section: Information, Service, Accounts, Offers ===== */}
      <div className='grid grid-cols-4 pl-50 gap-20'>

        {/* Information links */}
        <div className='h-35 w-35'>
          <h1 className='text-2xl mb-8'>Information</h1>
          <p>
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>

        {/* Service links */}
        <div className='h-35 w-35'>
          <h1 className='text-2xl mb-8'>Service</h1>
          <p>
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>

        {/* My Account links */}
        <div className='h-35 w-35'>
          <h1 className='text-2xl mb-8'>My Accounts</h1>
          <p>
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>

        {/* Offers links */}
        <div className='h-35 w-35'> 
          <h1 className='text-2xl mb-8'>Our Offers</h1>
          <p>
            About Us <br />
            Infomation <br />
            Privacy Policy <br />
            Terms & Conditions
          </p>
        </div>
      </div>

      {/* ===== Bottom Section: Copyright + Payment Methods ===== */}
      <div className='h-10 w-300 m-auto mt-20 grid grid-cols-2'>

        {/* Left side - Copyright article */}
        <p className='text-slate-300'>
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>

        {/* Right side - Payment card logos */}
        <div className='flex items-center gap-4 justify-end'>
          <img 
            className='size-10 object-center w-15 h-8' 
            src='https://logos-world.net/wp-content/uploads/2023/06/Western-Union-New-Logo.png'
            alt="Western Union"
          />
          <img 
            className='size-10 object-center w-15 h-8' 
            src="https://th.bing.com/th/id/OIP.zeRTxpEsrjvlKPWbIlwwagHaEK?w=378&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="Mastercard"
          />
          <img 
            className='size-10 object-center w-15 h-8' 
            src='https://www.freepnglogos.com/uploads/paypal-logo-png-16.png'
            alt="PayPal"
          />
          <img 
            className='size-10 object-center w-15 h-8' 
            src='https://www.freepnglogos.com/uploads/visa-card-logo-9.png'
            alt="Visa"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
