import React, { useState } from 'react';
import { connect } from 'react-redux';

import SingleWorkRow from './SingleWorkRow';

import { updateWorkThunk, createWorkThunk } from '../store/work';

const Work = ({createWork, work, updateWork, selectedMinion}) => {
  const [editingNewWork, setEditingNewWork] = useState(false);
  
  toggleEdit = () => {
    setEditingNewWork(!editingNewWork);
  }

  saveNewWork = work => {
    createWork(work);
    setEditingNewWork(false);
  }

  const defaultWork = {
      title: 'New Work',
      description: '',
      hours: 0,
      minionId: selectedMinion.id,
    }
  const workRows = work.map((work, idx) => {
    return (
      <SingleWorkRow updateWork={updateWork} work={work} key={work.id} idx={idx} />
    )
  });

  const nextIdx = workRows.length + 1;
  
  return (
      <div id="work-container">
        <div id="work-label" className="label meetings-label">Work</div>
        <table className="work-table">
          <thead>
            <tr>
              <th className="work-x"></th>
              <th className="work-title">Title</th>
              <th className="work-desc">Descr.</th>
              <th className="work-hours">Hrs.</th>
              <th className="work-save"></th>
            </tr>
          </thead>
          <tbody>
            { workRows }
            {
              editingNewWork
              ? <SingleWorkRow saveNewWork={saveNewWork} newWork={true} editing={true} work={defaultWork} idx={nextIdx}/>
              : null
            }
            <tr>
              <td />
              <td />
              <td>
                <div onClick={toggleEdit} className="button add-work-button">
                  { editingNewWork ? 'Cancel' : 'Add Work' }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  
}

const mapState = ({ work, selectedMinion }) => ({ work, selectedMinion });

const mapDispatch = dispatch => ({
  updateWork: work => {
    dispatch(updateWorkThunk(work));
  },
  createWork: work => {
    dispatch(createWorkThunk(work));
  }
})

export default connect(mapState, mapDispatch)(Work);
