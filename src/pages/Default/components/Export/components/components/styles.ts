import IColor from '../../../../../../dtos/IColor';

const styles = (color: IColor) => {
  return `
  <style>
  :root {
    --color-primary: ${color.primary};
    --color-secondary: ${color.secondary};
    --color-tertiary: ${color.tertiary};
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  }
  body, input, button {
  font-family: "Roboto Slab", serif;
  font-size: 18px;
  }
  body {
  color: var(--color-tertiary);
  -webkit-font-smoothing: antialiased;
  background: var(--color-primary);
  }
  .container {
  display: block;
  grid-template-columns: 1fr 1fr;
  }
  .main {
  min-height: 100vh;
  margin: 0;
  background-color: var(--color-tertiary);
  border-left: none;
  padding: 50px 20px;
  }
  .inside {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: 620px;
  margin: 0 auto;
  color: var(--color-primary);
  }
  .header {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  }
  .header img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-secondary);
  }
  .header h1 {
  margin: 20px;
  font-size: 26px;
  }
  .social {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  }
  .social a {
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  }
  .social a:hover {
  opacity: 0.5;
  }
  .links {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 30px 0;
  }
  .links .holder {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  }
  .links .holder a {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-text-decoration: none;
  text-decoration: none;
  background-color: var(--color-tertiary);
  border: 3px solid var(--color-secondary);
  margin: 10px 0;
  padding: 10px 30px;
  color: var(--color-primary);
  width: 100%;
  text-align: center;
  }
  .links .holder a:hover {
  color: var(--color-tertiary);
  background-color: var(--color-secondary);
  }
  .footer {
  background-color: var(--color-secondary);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  }
  .footer p a {
  color: var(--color-tertiary);
  font-style: italic;
  -webkit-transition: box-shadow 0.3s,background-color 0.3s;
  transition: box-shadow 0.3s,background-color 0.3s;
  }
  .footer p a:hover {
  box-shadow: 0px 0px 15px 10px var(--color-primary);
  background-color: var(--color-primary);
  }
</style>
  `;
};

export default styles;
