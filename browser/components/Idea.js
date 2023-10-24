import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateIdeaThunk, createIdeaThunk } from '../store/ideas'

import IdeaDescription from './IdeaDescription';
import IdeaEdit from './IdeaEdit';

import { isMillionDollarIdea } from '../utils';

const Idea = ({newIdea, idea, createIdea, updateIdea}) => {
  let canEditing = newIdea ? true : false;
  const [editing, setEditing] = useState(canEditing);
  const [ideaEd, setIdeaEd] = useState(newIdea);
  
  handleChange = e => {
    setIdeaEd(Object.assign(idea, {
      [e.target.name]: e.target.value,
    }));
  }

  toggleEdit = e => {
    if (editing) {
      if (newIdea) {
        createIdea(ideaEd);
      } else {
        updateIdea(ideaEd);
      }
    }

    setEditing(!editing);
  }

  const isValid = isMillionDollarIdea(ideaEd.weeklyRevenue, ideaEd.numWeeks);
  const buttonText = editing ? ( isValid ? 'Save' : 'Not A Valid $1000000 Idea!') : 'Edit';
  return (
      <div>
        <div id="single-idea-landing">
          { editing
            ? <IdeaEdit idea={idea} handleChange={handleChange} />
            : <IdeaDescription idea={idea} />
          }
          <div id="save-idea"
               className={isValid ? "button save-button" : "button save-button disabled"}
               onClick={isValid ? toggleEdit : () => {}} >
            { buttonText }
          </div>
        </div>
        <div className="button back-button">
          <Link to="/ideas">
            <img className="button" src="public/img/arrow.svg" />
          </Link>
        </div>
      </div>
    )
  
}

const mapState = ({selectedIdea, appState}) =>({
  idea: selectedIdea,
  newIdea: appState.editingNewIdea,
});

const mapDispatch = dispatch => ({
  updateIdea: idea => {
    dispatch(updateIdeaThunk(idea));
  },
  createIdea: idea => {
    dispatch(createIdeaThunk(idea));
  }
});

export default connect(mapState, mapDispatch)(Idea);
