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
import { FaLine } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();

  const hendleSubmit = (e) => {
    e.preventDefault();
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
            <Input type="text" placeholder="Name" name="user_name" />
            <Input type="text" placeholder="Subject" name="user_subject" />
            <Input type="text" placeholder="Email" name="user_email" />
            <TextArea rows="5" placeholder="Message" name="message" />
            <Button>Submit</Button>
          </form>
        </CRight>
      </CWrapper>
    </C>
  );
};

export default Contact;
