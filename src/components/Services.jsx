import Card from "./Card";
import './Services.css';
import { useState } from "react";



function Services(){

    var [mousedOver, setMousedOver] = useState(false);



    return(
        <div className="backgroundservices">
            <div className="Services">
                <table>
                    <tr>
                        <td>
                            <Card title = 'Oil Change' image = "car-oil.png"/>
                        </td>
                        <td>
                            <Card title = 'Engine Repairs' image = "car-engine.png"/>
                        </td>
                        <td>
                            <Card title = 'Transmission Repairs' image = "manual-transmission.png"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card title = 'Running gear' image = "brake-disc.png"/>
                        </td>
                        <td>
                            <Card title = 'A/C repair' image = "air-conditioning.png"/>
                        </td>
                        <td>
                            <Card title = 'Diagnostics' image ="diagnostic.png"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Services;