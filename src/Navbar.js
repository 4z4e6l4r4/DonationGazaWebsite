import React from   'react';

import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 15px;
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <ul>
        <li>Ana Sayfa</li>
        <li>Hakkımızda</li>
        <li>İletişim</li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;