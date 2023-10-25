import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Meeting from './Meeting';

import { createMeetingThunk } from '../store/meetings';

const AllMeetings = ({meetings, createMeeting}) => {
  const [timeoutId,setTimeoutId] = useState(null);
  const [timeoutTime, setTimeoutTime] = useState(5000);

  useEffect(() => {
    const addMeeting = () => {
      createMeeting();
      let curTimeoutId = window.setTimeout(addMeeting, timeoutTime);
      setTimeoutId(curTimeoutId);
      setTimeoutTime(Math.random() * 10000 + 3000);
    }
    addMeeting();

    return () => {
      window.clearTimeout(timeoutId);
    }
  }, []);

  const allMeetings = meetings.map(meeting => {
    return <Meeting key={meeting.date} day={meeting.day} time={meeting.time} note={meeting.note} />
  });
  
  return (
      <div id="meetings-landing">
        <div className="label meetings-label">
          Meetings
        </div>
        <div id="meetings-table">
          <table>
            <thead>
              <tr>
                <th id="th-time">Time</th>
                <th id="th-location">Date</th>
                <th id="th-note">Note</th>
              </tr>
            </thead>
            <tbody>
              { allMeetings }
            </tbody>
          </table>
        </div>
      </div>
    )
  
}

const mapState = ({ meetings }) => ({ meetings });

const mapDispatch = dispatch => ({
  createMeeting: () => {
    dispatch(createMeetingThunk());
  }
});

export default connect(mapState, mapDispatch)(AllMeetings);

