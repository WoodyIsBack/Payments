import React from 'react';
import './InputBar.css';

export class InputBar extends React.Component {
    render() {
        return (
            <div className="InputBar">
                <p className="input-instructions">
                    Please select bill type, Fill info and hit Let's go to submit!
                </p>
                <div className="InputBar-sort-options">
                    <ul>
                        <li>Electricity</li>
                        <li>Tax</li>
                        <li>Water</li>
                        <li>Internet&TV</li>
                    </ul>
                </div>

                <div className="InputBar-fields">
                    <input placeholder="Who are you?" />
                    <input placeholder="When?" />
                    <input placeholder="Choose Period" />
                    <input placeholder="Enter Amount" />
                </div>

                <div className="InputBar-submit">
                    <a>Let's Go</a>
                </div>

            </div>
        );
            
        
    }
}
export default InputBar; 