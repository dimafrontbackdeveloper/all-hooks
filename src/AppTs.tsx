import React, { FC, useState } from 'react';
import ExampleUseStateTS from './basesReactHooksTS/ExampleUseStateTS';
import ExampleUseActions from './customHooks/ts/ExampleUseActions';
import ExampleUseTypedSelector from './customHooks/ts/ExampleUseTypedSelector';
import UseInputEx from './customHooks/ts/ExInput';
import ExLocalStorage from './customHooks/ts/ExLocalStoarage';
import ExOutside from './customHooks/ts/ExOutside';

const AppTs: FC = () => {
  return (
    <div>
      <h2>TypeScript version</h2>
      <ExampleUseStateTS />
      <ExampleUseTypedSelector />
      <ExampleUseActions />
      <ExLocalStorage />
      <ExOutside />
      <UseInputEx />
    </div>
  );
};

export default AppTs;
