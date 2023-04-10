import { useState } from 'react';
import 'C:/Users/lucho/Desktop/VAGen-React/vagen-app/src/components/Navbar.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';

function App(){

  var [activeTab, setActiveTab] = useState(1);

  var ActiveTabHome = () => {
    setActiveTab(1);
  }

  var ActiveTabServices = () => {
    setActiveTab(2);
  }

  var ActiveTabContact = () => {
    setActiveTab(3);
  }

  return(
    <div>
      <nav className="Navbar">
            <ul>
                <li>
                    <h1>VAGen Service</h1>
                </li>
                <li>
                    <table>
                        <tr>
                            <td onClick={ActiveTabHome}>Home</td>
                            <td onClick={ActiveTabServices}>Services</td>
                            <td onClick={ActiveTabContact}>Contacts</td>
                        </tr>
                    </table>
                </li>
            </ul>
      </nav>
      {activeTab===1? <Home/> : null}
      {activeTab===2? <Services/> : null}
      <Footer/>
    </div>
  );
}

export default App;
