import React from 'react'
import "../Styles/Services.css"
import { FiSettings } from 'react-icons/fi';
const Services = () => {
  return (
    <div className='Services'>
      <h1>MEP Building Services</h1>
      <p>URBAN SCIENCE is one of the leading MEP companies in Dubai, in electrical, mechanical, instrumentation, and building services within Dubai. We help our customers with integrated engineering solutions that are comprised of design, procurement, project management, commissioning, and facilities management especially done according to the client's requirements. We employ the best engineers, offer the best technology, and use the most efficient processes that guarantee a successful project. We'll meet with you before a project starts to discuss any custom needs, and provide a handover when it's done so you're fully satisfied.</p>
      <div className="mechanicalDiv">
        <FiSettings/> <h2> Mechanical</h2>
      </div>
      <p>From last 18 years URBAN SCIENCE have consistently delivery best output in facility management and MEP work. Our core team has covered a large part in Dubai. Our consistent delivery and expertise make us one of the leading facility management company in Dubai.</p>
      <div className="HVAC"><span><FiSettings/></span><p> HVAC</p></div>
      <div className="Plumbing"><span><FiSettings/></span><p> Plumbing</p></div>
      <div className="electricalDiv">
        <FiSettings/> <h2>Electricals</h2>
      </div>
      <p>Urban Science Contracting is prepared to take on all challenging Electrical works whether it is ELV, LV, IT Solutions, access control, CCTV, and Security. We are happy to inform you that we are a Dubai Municipality and DCD approved MEP company in Dubai.</p>
      <div className="network"><span><FiSettings/></span><p> LV network</p></div>
      <div className="BLW"><span><FiSettings/></span><p> BLW</p></div>
    </div>
  )
}

export default Services