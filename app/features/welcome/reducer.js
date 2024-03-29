// @flow

import {
    SET_MEETING_PARTICIPANT_DETAILS, SET_USER_DETAILS, SET_MEETING_URL, SET_JOINED_USING_MEETING_LINK, SET_MEDIA_DATA
} from './actionTypes';

type State = {
    participantData: Object,
    userDetails: Object,
    meetingURL: String,
    isJoinedUsingMeetLink: Boolean,
    mediaData: Object,
};

const DEFAULT_STATE = {
    participantData: {},
    userDetails: {},
    meetingURL: '',
    isJoinedUsingMeetLink: false,
    mediaData: {
        startWithAudioMuted: true,
        startWithVideoMuted: true,
    }
};

/**
 * Reduces redux actions for features/settings.
 *
 * @param {State} state - Current reduced redux state.
 * @param {Object} action - Action which was dispatched.
 * @returns {State} - Updated reduced redux state.
 */
export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case SET_MEETING_PARTICIPANT_DETAILS:
            return {
                ...state,
                participantData: action.participantData
            };
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails
            };
        case SET_MEETING_URL:
            return {
                ...state,
                meetingURL: action.meetingURL
            };
        case SET_JOINED_USING_MEETING_LINK:
            return {
                ...state,
                isJoinedUsingMeetLink: action.isJoinedUsingMeetLink
            };
        case SET_MEDIA_DATA:
            return {
                ...state,
                mediaData: action.mediaData
            };

        default:
            return state;
    }
};
