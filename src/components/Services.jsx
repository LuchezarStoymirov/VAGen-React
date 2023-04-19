import Card from "./Card";
import './Services.css';
import { useState } from "react";



function Services(){


    var oilText = 'Oil text goes here to explain the service. Description of the process and more info will be added later.';

    var ENGText = 'Engine text goes here to explain the service. Description of the process and more info will be added later.';

    var TRMText = 'Transmission text goes here to explain the service. Description of the process and more info will be added later.';

    var RGText = 'Running gear text goes here to explain the service. Description of the process and more info will be added later.';

    var ACText = 'A/C text goes here to explain the service. Description of the process and more info will be added later.';

    var diagnosticsText = 'Diagnostics text goes here to explain the service. Description of the process and more info will be added later.';


    return(
        <div className="backgroundservices">
            <div className="Services">
                <table>
                    <tr>
                        <td>
                            <Card title = 'Oil Change' image = "car-oil.png" text = {oilText}/>
                        </td>
                        <td>
                            <Card title = 'Engine Repairs' image = "car-engine.png" text = {ENGText}/>
                        </td>
                        <td>
                            <Card title = 'Transmission Repairs' image = "manual-transmission.png" text = {TRMText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Card title = 'Running gear' image = "brake-disc.png" text = {RGText}/>
                        </td>
                        <td>
                            <Card title = 'A/C repair' image = "air-conditioning.png" text = {ACText}/>
                        </td>
                        <td>
                            <Card title = 'Diagnostics' image ="diagnostic.png" text = {diagnosticsText}/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Services;