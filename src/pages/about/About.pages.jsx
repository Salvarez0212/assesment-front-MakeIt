import { BsCheckLg } from "react-icons/bs";
import avatar from "../../assets/profile.jpg";
import "./about.pages.scss";

export const About = () => {
  return (
    <div className="about__placer">
      <main className="main__about">
        <article className="main__about-info">
          <picture className="avatar__container">
            <img src={avatar} alt="Profile Image" />
          </picture>
          <div className="name__about">
            <p>Sebastian Alvarez Henao</p>
          </div>
        </article>
        <article className="second__about">
          <div className="description__about">
            <p>
              Hola! mi nombre es Sebastian, tengo 23 años y vivo en la ciudad de
              Medellin, Colombia. Soy un estudiante de desarrollo web apasionado
              por el Front, también soy estudiante de Ingeniería mecánica. Me
              gusta jugar videojuegos y leer un libro de vez en cuando. Suelo
              despejar mi mente saliendo con mis amigos o mi novia.
            </p>
          </div>
          <div className="learn__about">
            <h4>En este Assesment aprendí:</h4>
            <div className="list__learn">
              <ul>
                <li>
                  <BsCheckLg size={16} className="icon" />
                  Usar redux toolkit de manera asincrona con createAsyncThunk
                </li>
                <li>
                  <BsCheckLg size={16} className="icon" />
                  Deshabilitar un botón según una condición
                </li>
                <li>
                  <BsCheckLg size={16} className="icon" />
                  Manipular un temporizador con Math.random
                </li>
              </ul>
            </div>
          </div>
          <div className="contact__about">
            <p>Mi correo: alvarezsebastian31@gmail.com</p>
            <p>Mi Github: github.com/Salvarez0212 </p>
          </div>
        </article>
      </main>
    </div>
  );
};
