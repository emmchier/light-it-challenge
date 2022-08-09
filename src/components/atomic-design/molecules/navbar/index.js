import React from 'react';
import { dropdownList } from '../../../../domain/dropdown-list';

import Container from '../../atoms/container';
import Image from '../../atoms/image';
import DropdownButton from '../dropdown-button';
import Brand from '../../../../assets/brand-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <Container display="flex" alignItems="items-center" justifyContent="justify-between">
      <Link to="/">
        <Image src={Brand} alt="logo de Light-It" onError={`/assets/brand-logo.svg` || Brand} />
      </Link>
      <DropdownButton options={dropdownList} />
    </Container>
  </header>
);

export default Navbar;
