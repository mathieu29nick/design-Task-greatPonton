import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import PersonalInformationFormComponent from "./components/PersonalInformationFormComponent/PersonalInformationFormComponent";
import PremiumAccount from "./components/PremiumAccount/PremiumAccount";
import SimpleCardComponent from "./components/SimpleCardComponent/SimpleCardComponent";

function App() {
  return (
    <div className="main">
      <aside className="menu">
        <div className="menu1">
          <img
            src={process.env.PUBLIC_URL + "/img/resume.png"}
            alt=""
            className=""
          />
        </div>
        <div className="menu2">
          <CardComponent
            className="card-component"
            icon={"liste.png"}
            libelle={"My boards"}
            boards={[]}
          />
          <CardComponent
            icon={"search.png"}
            libelle={"Search"}
            boards={listMenu2}
          />
          <CardComponent
            icon={"board.png"}
            libelle={"My boards"}
            boards={listMenu1}
            rightIcon={"add.png"}
          />
        </div>
        <div className="menu3">
          <div className="card-header-account">
            <div className="card-account-icon-title">
              <img
                src={process.env.PUBLIC_URL + "/img/img.png"}
                height={32}
                width={32}
                alt=""
                className="card-icon"
              />
              <span className="card-title">Carla</span>
            </div>
            <button className="card-add-button">
              <img
                src={process.env.PUBLIC_URL + "/img/settings.png"}
                alt=""
                className="card-icon"
              />
            </button>
          </div>
        </div>
      </aside>
      <div className="content">
        <PremiumAccount
          title={"Premium Account"}
          description={
            "You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats."
          }
        />
        <PersonalInformationFormComponent />
        <div className="text">
          <div className="checkbox-text">
            <input type="checkbox" className="checkbox"></input>
            <p>Show my profile to serious employers on <span className="personal-information__text__link">
               hirethesbest.io 
            </span> for free</p>
          </div>
        </div>
        <SimpleCardComponent
          title={"Delete account"}
          description={
            "If you delete your account you’ll be permanently removing it from our systems - you can’t undo it."
          }
          link={"Yes, Delete my account"}
        />
        <div className="text">
          <p className="personal-information__text">
            <span className="personal-information__text__link">
              Get in touch with our support team
            </span>{" "}
            if you have any question or want to leave some feedback.
          </p>
          <p className="personal-information__text">
            We’ll be happy to hear from you.
          </p>
        </div>
        <FooterComponent tab={listFooter} />
      </div>
    </div>
  );
}

const listMenu1 = [
  { leftLogo: "folder.png", libelle: "Board 1" },
  { leftLogo: "folder.png", libelle: "Board 2" },
  { leftLogo: "folder.png", libelle: "Board 3" },
  { leftLogo: "key.png", libelle: "Board agent 1" },
  { leftLogo: "key.png", libelle: "Board agent 2" },
  { leftLogo: "key.png", libelle: "Board agent 3" },
];

const listMenu2 = [
  { leftLogo: "star.png", libelle: "Software Engineer" },
  { leftLogo: "star.png", libelle: "Computer hardware engineer" },
  { leftLogo: "star.png", libelle: "Network Engineer" },
  { leftLogo: "star.png", libelle: "Technical Support" },
  { leftLogo: "star.png", libelle: "Network administrator" },
  { leftLogo: "star.png", libelle: "Management" },
  { leftLogo: "star.png", libelle: "Data analysis" },
  { leftLogo: "star.png", libelle: "Computer technician" },
  { leftLogo: "watch.png", libelle: "Past search 1" },
  { leftLogo: "watch.png", libelle: "Past search 2" },
  { leftLogo: "watch.png", libelle: "Computers and information..." },
  { leftLogo: "watch.png", libelle: "Database Administrator" },
  { leftLogo: "watch.png", libelle: "Computer security" },
  { leftLogo: "watch.png", libelle: "Computer Systems Analyst" },
];

const listFooter = [
  { libelle: "Terms & Conditions" },
  { libelle: "Privacy Policy" },
  { libelle: "FAQ" },
  { libelle: "Contact Us" },
];

export default App;
