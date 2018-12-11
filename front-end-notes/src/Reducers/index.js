/*
  Be sure to import in all of the action types from `../actions`
*/
import {
    FETCH_NOTES_REQUEST,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    ADD_NOTES_REQUEST,
    ADD_NOTES_SUCCESS,
    ADD_NOTES_FAILURE,
    DELETE_NOTES_REQUEST,
    DELETE_NOTES_SUCCESS,
    DELETE_NOTES_FAILURE,
    UPDATE_NOTES_REQUEST,
    UPDATE_FORM
  } from "../Actions";
  /*
   Your initial/default state for this project could *Although does not have to* look a lot like this
   // Yeah, that's fine, I'll use that!
  */
  const initialState = {
    notes: [],

    fetchingNotes: false,
    //addingSmurf: false    -> I don't use the use of any of these. I mean, they only confuse the logic until we get to updating.
    //updatingSmurf: false
    //deletingSmurf: false
    error: null,
    currentNote: null
  };
  
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTES_REQUEST:
        return {
          ...state,
          fetchingNotes: true
        };
      case FETCH_NOTES_SUCCESS:
        return {
          ...state,
          fetchingNotes: false,
          notes: action.payload
        };
      case FETCH_NOTES_FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload
        };
        // without this default state, the app crashes! that's a little dumb!
        case ADD_NOTES_REQUEST:
        return {
          ...state,
          fetchingNotes: true
        };
        case ADD_NOTES_SUCCESS:
        return {
          ...state,
          fetchingNotes: false,
          notes: action.payload
        };
      case ADD_NOTES_FAILURE:
        return {
          ...state,
          fetchingNotes: false,
          error: action.payload
        };
        case DELETE_NOTES_REQUEST:
        return {
          ...state,
          fetchingNotes: true
        };
        case DELETE_NOTES_SUCCESS:
        return {
          ...state,
          fetchingNotes: false,
          notes: action.payload
        };
      case DELETE_NOTES_FAILURE:
        return {
          ...state,
          fetchingNotes: false,
          error: action.payload
        };
      case UPDATE_NOTES_REQUEST:
        return {
          ...state,
          fetchingNotes: true,
          currentNote: null
        };
      
      case UPDATE_FORM:
      return {
        ...state,
        currentNote: action.payload
      };
      default:
        return state;
    }
  };
  
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  export default notesReducer;
  