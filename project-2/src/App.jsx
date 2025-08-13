import "./App.css";
import ContactForm from "./contact-components/contactForm/contactForm";
import ContactHeader from "./contact-components/contactHeader/ContactHeader";
import Navbar from "./contact-components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
