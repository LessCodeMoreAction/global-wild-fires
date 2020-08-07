import * as React from 'react';
import {PureComponent} from 'react';
import * as boostrap from 'react-bootstrap';




export default class ControlPanel extends PureComponent {

    render() {
        
        return (
            <div className="control-panel">
                <h5 className="Text-white"> 
                    Global Wild Fires
                </h5>
                <p>
                Map is showing the top 100 global fires in the last 24 Hours.
                </p>


                <p>
                 Data source:{' '}
                <a href="https://firms.modaps.eosdis.nasa.gov/web-services/">
                    NASA FIRMS (Fire Information for Resource Management System)
                </a>
                </p>
                

            </div>
        );


    }


}