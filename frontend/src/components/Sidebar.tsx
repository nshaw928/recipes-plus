import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      height="100%"
      width={isOpen ? '250px' : '64px'}
      background='tomato'
    >
        <h1>Content</h1>
    </Box>
  );
};

export default Sidebar;