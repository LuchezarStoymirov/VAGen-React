import './Navbar.css';

function Navbar(){
    return(
        <nav className="Navbar">
            <ul>
                <li>
                    <h1>VAGen Service</h1>
                </li>
                <li>
                    <table>
                        <tr>
                            <td>Home</td>
                            <td>Services</td>
                            <td>Contacts</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;