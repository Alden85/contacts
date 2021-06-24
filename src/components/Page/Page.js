import React from 'react';
import { Button } from 'semantic-ui-react';

function Page({ setPage }) {
  return (
    <Button.Group>
      <Button color='grey' onClick={() => setPage(1)}>
        Page 1
      </Button>
      <Button.Or />
      <Button color='grey' onClick={() => setPage(2)}>
        Page 2
      </Button>
    </Button.Group>
  );
}

export default Page;
