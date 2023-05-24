import '../About/About.scss'
export default function About() {
  return (
    <div className="about" id='about'>
      <div className='about-content'> 
      <div className='about-heading'>
    <h1>About Me</h1><hr/>
    <p>Hi, Im Kalyan Yama, Im interested in combining creativity and technology. Im passionate about the web and
 Ive been creative coding since 2022, I have completed my graduation in 2022, After that, I started my career,
  I have overall 1 years of experience in ReactJs , NodeJs with Express, MongoDB, MySql and REST APIs. Previously
 worked with few projects related to my skills, Below you can see some of my skills and projects.</p>
      </div>
      <div className='about-info'>
        <div className='left'>
          <img src='kn.JPG'/>
        </div>
        <div className='right'>
        <h4 className='info-h4'>Full stack Devoloper</h4>
       <p className='about-top'></p>
       <ul className='about-ul'>
        <li><b>Name</b> : Yama Kalyan</li>
        <li><b>Email</b> : yamakalyan6@gmail.com</li>
        <li><b>Mobile no</b> : +91 9550049382</li>
        <li><b>DOB</b> : 20-07-2000</li>
        <li><b>Degree</b> : B.com(computer application)</li>
        <li><b>City</b> : Hyderabad</li>
        <li><b>Free-lance</b> : Available</li>
       </ul>
       <p className='about-bottom'>Fresher and looking for a job opportunity</p>
      </div>
        </div>
 
      </div>
    </div>
  )
}
