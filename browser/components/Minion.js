import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateMinionThunk, createMinionThunk } from '../store/minions';

import Work from './Work';
import MinionDescription from './MinionDescription';
import MinionEdit from './MinionEdit';

const Minion = ({newMinion, createMinion, updateMinion}) => {
  let isEditing = newMinion ? true : false;
  const [editing, setEditing] = useState(isEditing);
  const [minion, setMinion] = useState(newMinion);

  handleChange = e => {
    setMinion(Object.assign(minion, {
      [e.target.name]: e.target.value,
    }));
  }

  toggleEdit = e => {
    if (editing) {
      if (newMinion) {
        createMinion(minion);
      } else {
        updateMinion(minion);
      }
    }
    
    setEditing(!editing);
  }

  return (
      <div>
        <div id="single-minion-landing">
          <div className="minion-details">
            <div className="label meetings-label">
              { 
                newMinion
                ? `New Minion`
                : `Minion Id #${minion.id}`
              }
            </div>
            <div className="minion-description">
              { 
                editing
                ? <MinionEdit handleChange={handleChange} {...minion} />
                : <MinionDescription {...minion}/>
              }
            </div>
            <div className="button minion-save-button" onClick={toggleEdit}>
              { editing ? 'Save' : 'Edit' }
            </div>
          </div>
          <div className="work-details">
            <Work />
          </div>
        </div>
        <div className="button back-button">
          <Link to="/minions">
            <img className="button" src="public/img/arrow.svg" />
          </Link>
        </div>
      </div>
    )
  
}

const mapState = ({selectedMinion, appState}) => ({
  minion: selectedMinion,
  newMinion: appState.editingNewMinion,
});

const mapDispatch = dispatch => ({
  updateMinion: minion => {
    dispatch(updateMinionThunk(minion));
  },
  createMinion: minion => {
    dispatch(createMinionThunk(minion));
  },
});

export default connect(mapState, mapDispatch)(Minion);
