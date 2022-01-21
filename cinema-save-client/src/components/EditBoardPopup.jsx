import React, { useState } from 'react';
import { ReactSession } from 'react-client-session';
import { routes } from '../api/routes';

export const EditBoardPopup = (props) => {
    const [boardname, setBoardName] = useState('');
    const [boarddescrip, setBoardDescrip] = useState('');
    const boardID = window.location.pathname.split('/board/')[1];
    const userid = ReactSession.get("userid");

    let showPopup = props.value;
    let data = props.data;

    if (showPopup) {
        const handleSave = () => { 
            const data = {
                'userID': userid,
                'boardID': boardID,
                'title': boardname,
                'description': boarddescrip
            }
    
            fetch(routes['handleEditBoard'], {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": routes['handleBaseURL']           
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json()
            })
        }

        const handleDelete = () => { 
            const data = {
                'userID': userid,
                'boardID': boardID,
            }
    
            fetch(routes['handleDeleteBoard'], {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": routes['handleBaseURL']           
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json()
            })
        }
    
        return (
            <div>
                <div><button onClick={handleDelete}>delete board</button></div>
                <div>
                    <label htmlFor="boardname">Change your board's name</label>
                    <br />
                    <input
                        type="text"
                        id='boardname'
                        onChange={(e) => setBoardName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="boarddescrip">Change your board's a description</label>
                    <br />
                    <input
                        type="text"
                        id='boarddescrip'
                        onChange={(e) => setBoardDescrip(e.target.value)}
                    />
                    <br />
                    <br />
                    <button onClick={handleSave}> save </button>
                </div>
            </div>
        )
    } else { 
        return (
            <div>
            </div>
        )
    }
}
