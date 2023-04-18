import { useState } from 'react';
import 'C:/Users/lucho/Desktop/VAGen-React/vagen-app/src/components/Navbar.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Contacts from './components/Cotacts';

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
      <nav className="Navbar" style={{
        borderBottom: activeTab===1? '2px solid #FFA701': activeTab===2? '2px solid #FFA701': '2px solid #1167b1'}}>
            <ul>
                <li>
                    <h1>VAGen Service</h1>
                </li>
                <li>
                    <table>
                        <tr>
                            <td onClick={ActiveTabHome} style={{color:activeTab==1? '#FFA701' : null}}>Home</td>
                            <td onClick={ActiveTabServices} style={{color:activeTab==2? '#FFA701' : null}}>Services</td>
                            <td onClick={ActiveTabContact} style={{color: activeTab==3? '#FFA701' : null}}>Contacts</td>
                        </tr>
                    </table>
                </li>
            </ul>
      </nav>
      {activeTab===1? <Home/> : null}
      {activeTab===2? <Services/> : null}
      {activeTab===3? <Contacts/> : null}
      <Footer/>
    </div>
  );
}

export default App;
