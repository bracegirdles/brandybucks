import React from 'react';
import {Link} from 'react-router';

const Settings = () => (
  <div>
    This will be the settings page!
    <Link to="/"><button type="text">Back to Dashboard</button></Link>
  </div>
);

export default Settings;
