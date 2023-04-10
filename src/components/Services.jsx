import Card from "./Card";
import './Services.css';

function Services(){
    return(
        <div className="Services">
            <table>
                <tr>
                    <td>
                        <Card title = 'Oil Change' text = 'text goes here!'/>
                    </td>
                    <td>
                        <Card title = 'Engine Repairs' text = 'text goes here'/>
                    </td>
                    <td>
                        <Card title = 'Transmission Repair' text = 'text goes here'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Card title = 'Running gear' text = 'text goes here!'/>
                    </td>
                    <td>
                        <Card title = 'A/C repair' text = 'text goes here'/>
                    </td>
                    <td>
                        <Card title = 'Diagnostics' text = 'text goes here'/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Services;