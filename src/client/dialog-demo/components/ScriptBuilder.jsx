import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FormInput from './FormInput';
import Header from './Header';
import DeckLoadConfig from './DeckLoadConfig';

// This is a wrapper for google.script.run that lets us use promises.
import { serverFunctions } from '../../utils/serverFunctions';

const ScriptBuilder = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        // Call a server global function here and handle the response with .then() and .catch()
        serverFunctions
            .getSheetsData()
            .then(setNames)
            .catch(alert);
    }, []);

    const deleteSheet = sheetIndex => {
        serverFunctions
            .deleteSheet(sheetIndex)
            .then(setNames)
            .catch(alert);
    };

    const setActiveSheet = sheetName => {
        serverFunctions
            .setActiveSheet(sheetName)
            .then(setNames)
            .catch(alert);
    };

    // You can also use async/await notation for server calls with our server wrapper.
    // (This does the same thing as .then().catch() in the above handlers.)
    const submitNewSheet = async newSheetName => {
        try {
            const response = await serverFunctions.addSheet(newSheetName);
            setNames(response);
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error);
        }
    };

    return (
        <div>
            <Header title="PEAPOD Internal" />
            <p>
                This is a sample page that demonstrates a simple React app. Enter a name
                for a new sheet, hit enter and the new sheet will be created. Click the
                red &times; next to the sheet name to delete it.
            </p>
            <DeckLoadConfig />
        </div>
    );
};

export default ScriptBuilder;