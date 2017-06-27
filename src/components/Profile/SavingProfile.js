import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import colors from '~/utils/colors';

const SavingProfile = () => {
  return (
    <div>
      <p style={{textAlign: 'center', color: colors.primary1Color, marginTop: '70px', fontSize: '1.3em'}}>Profile updated!</p>
      <RefreshIndicator
      size={100}
      left={640}
      top={200}
      status="loading"
      style={{background: 'none', boxShadow: 'none'}}
      />
    </div>
  );
};

export default SavingProfile;
