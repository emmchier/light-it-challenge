import React from 'react';
import { dropdownList } from '../../../../domain/dropdown-list';

import Container from '../../atoms/container';
import Image from '../../atoms/image';
import DropdownButton from '../dropdown-button';
import Brand from '../../../../assets/brand-logo.svg';

const Navbar = () => (
  <header className="navbar">
    <Container display="flex" alignItems="items-center" justifyContent="justify-between">
      <Image src={Brand} alt="logo de Light-It" />
      <DropdownButton options={dropdownList} onChange={(e) => console.log(e.target.value)} />
    </Container>
  </header>
);

export default Navbar;
