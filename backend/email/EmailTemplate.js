const Template = {

    confirm: id => ({
      subject: 'Confirm Email',
      html: `
        <ul style="list-style-type:none">
          <li>
            <img src='https://icon-library.com/images/small-email-icon/small-email-icon-23.jpg' alt='image'/>
          </li>
          <li>
            <h1>Please click below link to verify your account</h1>
            <a href='http://localhost:3000/confirm?id=${id}'>
              click to confirm email
            </a>
          </li>
        </ul>
      `,      
      text: `Copy and paste this link: http://localhost:3000/confirm/${id}`
    })
    
}

export default Template