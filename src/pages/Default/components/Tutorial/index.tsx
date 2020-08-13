import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import img1 from '../../../../assets/images/1.jpg';
import img2 from '../../../../assets/images/2.jpg';
import img3 from '../../../../assets/images/3.jpg';
import img4 from '../../../../assets/images/4.jpg';
import img5 from '../../../../assets/images/5.jpg';
import img6 from '../../../../assets/images/6.jpg';
import img7 from '../../../../assets/images/7.jpg';
import img8 from '../../../../assets/images/8.jpg';
import img9 from '../../../../assets/images/9.jpg';
import img10 from '../../../../assets/images/10.jpg';
import img11 from '../../../../assets/images/11.jpg';

import { gold, pink, blue } from '../../../../styles/global';
import A from '../../../../components/A';

const Styled = styled.div`
  background-color: ${blue};
  color: ${pink};
  padding: 50px;
  border: 5px solid ${gold};
  min-height: 80vh;

  h1 {
    margin: 0 0 20px 0;
    color: ${gold};
  }

  h2 {
    margin: 40px 0 20px;
    color: ${gold};
  }

  h3 {
    margin: 40px 0 20px;
    color: ${gold};
  }

  p {
    margin: 10px 0;
  }

  small {
    display: block;
  }

  p + small {
    margin: -10px 0 20px 0;
  }

  hr {
    border: 0;
    border-top: 1px dashed ${pink};
    margin: 40px 0;
  }

  img {
    margin: 20px 0;
    max-width: 500px;
    width: 100%;
    height: auto;
    box-shadow: 10px 10px 0px 0px ${gold};
    border: 1px solid ${blue};
  }

  a {
    color: ${pink};
    font-style: italic;
    transition: box-shadow 0.3s, background-color 0.3s;
    &:hover {
      color: ${blue};
      box-shadow: 0px 0px 15px 10px ${gold};
      background-color: ${gold};
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.2s;
  border: 3px solid ${gold};
  color: ${gold};
  font-size: 13px;
  background-color: ${blue};
  &:hover {
    border: 3px solid ${blue};
    background-color: ${gold};
    box-shadow: 0px 0px 10px 5px ${pink};
    color: ${blue};
  }
  & + button {
    margin: 0 5px;
  }
`;

interface IProps {
  setIsTutorial: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tutorial = ({ setIsTutorial }: IProps) => {
  return (
    <Styled>
      <Close type="button" onClick={() => setIsTutorial(false)}>
        ✖
      </Close>
      <Trans i18nKey="tutorial">
        <h1>Tutorial</h1>
        <p>⟶ Publish your list in 5 easy steps</p>
        <h2>Account</h2>
        <p>
          In order to put your link list online, we will need to host it in
          GitHub Pages.
        </p>
        <p>
          Don't worry about the technical terms, I'll guide you through the
          process.
        </p>
        <p>
          ⟶ Create an account on <a href="https://github.com/">GitHub</a> (it's
          free!).
        </p>
        <img src={img1} alt="" />
        <p>⟶ Answer whatever you like on the next steps</p>
        <img src={img2} alt="" />
        <p>⟶ Confirm your e-mail.</p>
        <p>Voilá, account created!</p>
        <h2>Repository</h2>
        <p>
          Go to the <a href="https://github.com/">GitHub homepage</a>.
        </p>
        <p>⟶ Click on the + symbol (top right)</p>
        <p>
          ⟶ Click on <b>New Repository</b>
        </p>
        <img src={img3} alt="" />
        <p>
          ⟶ Write the repository name. It <b>must</b> end with ".github.io".
        </p>
        <small>For example, I'm using temposfantasticos.github.io</small>
        <p>
          ⟶ Select <b>Public</b>.
        </p>
        <p>
          ⟶ Click on <b>Create Repository</b>
        </p>
        <img src={img4} alt="" />
        <p>You'll see your recently created repository! Congratulations!</p>
        <h2>New file</h2>
        <p>
          ⟶ Click the (well hidden) <b>creating a new file</b> link.
        </p>
        <img src={img5} alt="" />
        <p>
          ⟶ name your file <b>index.html</b>
        </p>
        <p>⟶ At the field below, paste the generated code</p>
        <small>
          (Optional: you can change "no wrap" to "soft wrap" to see the file
          better)
        </small>
        <img src={img6} alt="" />

        <p>
          ⟶ Click on <b>Commit new file</b> at the bottom. Your file is ready :)
        </p>
        <h2>Going live</h2>
        <p>
          ⟶ In your repository, click on <b>Settings</b>
        </p>
        <img src={img7} alt="" />
        <p>
          ⟶ Scroll down the page until you see <b>GitHub Pages</b>.
        </p>
        <p>
          ⟶ If you see a blue message starting with "Your site is ready to be
          published at...", your site is already live! Go to the next step.
        </p>
        <img src={img8} alt="" />
        <p>If not, follow this:</p>
        <p>
          ⟶ Probably there's a selection box with 'None' written. Click on it
          and select <b>Master</b>, then click <b>Save</b>
        </p>
        <p>⟶ Your page will be published.</p>
        <h3>Myname.com</h3>
        <p>
          Want a custom domain (or, in layman terms, a www.myname.com address?)
        </p>
        <p>
          Click the "learn more" link below <b>Custom domain</b>, in GitHub
          Pages settings section.
        </p>
        <h2>Updating your list</h2>
        <p>
          ⟶ Log in your GitHub account and click your repository, at the left
          column:
        </p>
        <img src={img9} alt="" />
        <p>⟶ Click the index.html file</p>
        <img src={img10} alt="" />
        <p>⟶ Click on the small pen symbol:</p>
        <img src={img11} alt="" />
        <p>
          ⟶ Paste the new code (from the Linkbio site) and click on Commit
          changes.
        </p>
        <p>
          ⟶ Wait a few seconds and... ready! Everything updated with a few
          clicks.
        </p>
        <hr />
        <small>Want to improve this tutorial or ask for more help?</small>
        <small>
          Open an issue at the{' '}
          <A href="http://www.github.com/angelod1as/linkbio">
            Linkbio GitHub repository
          </A>
          .
        </small>
      </Trans>
    </Styled>
  );
};

export default Tutorial;
