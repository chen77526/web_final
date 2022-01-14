const Template = {

    confirm: id => ({
      subject: 'Confirm Email',
      html: `
        <a href='http://localhost:3000/confirm?id=${id}'>
          click to confirm email
        </a>
      `,      
      text: `Copy and paste this link: http://localhost:3000/confirm/${id}`
    })
    
}

export default Template