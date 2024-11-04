import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './App.css'


const SERVICE_ID = "service_4ize8uc";
const TEMPLATE_ID = "template_ppf7bde";
const PUBLIC_KEY = "V7nOTlMYmfqOpGlgq";

function Contact() {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="mt-24 p-6 max-w-4xl mx-auto">
        <h1>Contact Me</h1>
        <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
          
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='#3498db'>Submit</Button>
      </Form>

      <div className="mt-4">
        <ul className="space-y-2 flex flex-col items-center mb-4">
          <li><p>Email: knahuina.work@gmail.com</p></li>
          <li><a href="tel:+447938693979">UK: +447938693979</a></li>
          <li><a href="tel:+1512-748-0479">USA: +1(512)748-0479</a></li>
        </ul>

        <div className="max-w-screen-lg mx-auto h-[10vh] flex items-center justify-center gap-2">
          <div className="p-2 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105">
            <a href="https://github.com/KaiNahuina"><ion-icon name="logo-github"></ion-icon></a>
          </div>
          <div className="p-2 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105">
            <a href="https://www.instagram.com/kainahuina/"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
          <div className="p-2 rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105">
            <a href="https://www.linkedin.com/in/ikaika-nahuina-0570261a4/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
        </div>
      </div>



    </div>
  )
};
        
export default Contact;