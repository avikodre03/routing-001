import React from 'react'
import "../Styles/Contact.css"
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
const Contact = () => {
  return (
    <div className='Contact'>

      <div className="contactLeft">
        <div className="heading">
          <h1>Connect With Us</h1>
        </div>

        <div className="contactDetails">
          <h3>Enquiry</h3>
          <p><GrMail /> enquiry@urbansciencemep.com</p>
          <p><AiFillPhone /> 0509418224</p>
        </div>

        <div className="contactDetails">
          <h3>Procurement Team</h3>
          <p><GrMail /> urbansciencemep@gmail.com</p>
          <p><AiFillPhone /> +971 543565450</p>
        </div>

        <div className="contactDetails">
          <h3>General Enquiry</h3>
          <p><AiFillPhone /> 0509418224</p>
        </div>
      </div>

      <div className="contactRight">
        <p>Name</p>
        <input type="text" />

        <p>Email</p>
        <input type="email" />

        <p>Country</p>
        <select>
          <option value="USA">USA</option>
          <option value="INDIA">INDIA</option>
          <option value="etc">etc</option>
        </select>

        <p>Expected date</p>
        <input type="date" name="" id="" />

        <p>Message</p>
        <textarea className='textarea'></textarea>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact