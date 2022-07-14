// @flow

import { SET_MEETING_PARTICIPANT_DETAILS } from './actionTypes';

/**
 * .
 *
 * @param {Object} participantData - participant Details.
 * @returns {{
 *     type: SET_MEETING_PARTICIPANT_DETAILS,
 *     participantData: Object
 * }}
 */
// export function meetingParticipantData(participantData: Object) {
//     return {
//         type: SET_MEETING_PARTICIPANT_DETAILS,
//         participantData
//     };
// }

export const getMeetingParticipantDetails = id => {
    // return dispatch => {
    fetch(`https://dev.dhanushsamvaad.com/conference/conclave/nojwt/meeting/getMeetingDetails/${id}`, {
        method: 'GET', // or 'PUT'
        headers: { 'Content-Type': 'application/json', },
    })
        .then(response => response.json())
        .then(res => {
            if (res) {
                console.log(res);
                // dispatch(meetingParticipantData(res.data));
                dispatch({
                    type: SET_MEETING_PARTICIPANT_DETAILS,
                    participantData: res.data
                })
            }
        })
        .catch(e => {
            console.log(e);
        });
    // }
}
