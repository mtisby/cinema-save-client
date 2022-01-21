import React, { useState } from 'react';
import { ReactSession } from 'react-client-session';
import { Navigate } from 'react-router-dom';
import { routes } from '../api/routes';

export const BoardPopup = (props) => {
    const [boardname, setBoardName] = useState('');
    const [boarddescrip, setBoardDescrip] = useState('');
    const [boardID, setBoardID] = useState('');
    const [popupBool, setPopupBool] = useState(Boolean);
    const userid = ReactSession.get("userid");

    const handleSaveButton = () => { 
        console.log(boardname)
        console.log(routes['handleAddBoard'])
        const data = {
            'title': boardname,
            'description': boarddescrip,
            'userID': userid
        }

        fetch(routes['handleAddBoard'], {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": routes['handleBaseURL']           
            },
            body: JSON.stringify(data),
        }).then((response) => {
            return response.json()
        }).then((response) => { 
            setBoardID(response)
        }).then((response) => { 
            setPopupBool(true)
        })
    }

    if (popupBool) { 
        
        return <Navigate to={{
            pathname: `/profile/${userid}/board/${boardID}`
            }}
        />
    }

    if (props.value) {
        return (
            <div>
                <label htmlFor="boardname">Name your board</label>
                <br />
                <input
                    type="text"
                    id='boardname'
                    onChange={(e) => setBoardName(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="boarddescrip">Give your board a description</label>
                <br />
                <input
                    type="text"
                    id='boarddescrip'
                    onChange={(e) => setBoardDescrip(e.target.value)}
                />
                <br />
                <br />
                <button onClick={handleSaveButton}> save </button>
            </div>
        )
    }
    else { 
        return (
            <div></div>
        )
    }
}
// onChange={(e) => setPassword(e.target.value)