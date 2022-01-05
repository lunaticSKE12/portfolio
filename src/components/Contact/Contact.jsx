import React, { useRef } from 'react';
import {
  C,
  CBg,
  CWrapper,
  CLeft,
  CRight,
  CInfoItem,
  Img,
  Input,
  TextArea,
  Button,
} from './ContactStyle';
import emailjs from 'emailjs-com';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../pages/context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput && subjectInput && emailInput && messageInput) {
      emailjs
        .sendForm(
          'service_qj2euyq',
          'template_082qdil',
          formRef.current,
          'user_iEbq76phkJIa0yyXV9TID'
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setDone(false);
    }
  };
  return (
    <C>
      <CBg></CBg>
      <CWrapper>
        <CLeft>
          <h1>Let's discuss</h1>
          <div className="c-info">
            <CInfoItem>
              <Img src="/images/LINE_APP.png" alt="line app" />
              @jamesnapongd
            </CInfoItem>
            <CInfoItem>
              <Img src="/images/email.png" alt="email" className="c-icon" />
              jamesnapongd@gmail.com
            </CInfoItem>
          </div>
        </CLeft>
        <CRight>
          <p>
            <b>What's your story</b> Get in touch.
          </p>
          <form
            style={{ marginTop: '20px' }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Name *"
              name="user_name"
              style={{ backgroundColor: darkMode && '#333' }}
              value={nameInput}
              onInput={(e) => setNameInput(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Subject *"
              style={{ backgroundColor: darkMode && '#333' }}
              name="user_subject"
              value={subjectInput}
              onInput={(e) => setSubjectInput(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email *"
              style={{ backgroundColor: darkMode && '#333' }}
              name="user_email"
              value={emailInput}
              onInput={(e) => setEmailInput(e.target.value)}
            />
            <TextArea
              rows="5"
              placeholder="Message *"
              style={{ backgroundColor: darkMode && '#333' }}
              name="message"
              value={messageInput}
              onInput={(e) => setMessageInput(e.target.value)}
            />
            <Button>Submit</Button>
            {done ? (
              'Thank you...'
            ) : (
              <p style={{ color: 'red' }}>Filed all requirement field.</p>
            )}
          </form>
        </CRight>
      </CWrapper>
    </C>
  );
};

export default Contact;
