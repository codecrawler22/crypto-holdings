import React from 'react';

const CoinComponent = ({name, usd, nok}) => {


    return (
        <div>
        <hr/>
          <p>{name}</p>
          <p>{usd}</p>
          <p>{nok}</p>
          <hr/>
        </div>
    )
}
export default CoinComponent;