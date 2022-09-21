import * as React from 'react';

import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <div className="centerTable">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Lebron the James</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Cristiano the Ronaldo</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Steph the Curry</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StripedRowExample;
