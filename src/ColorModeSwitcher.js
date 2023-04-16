import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      zIndex={'overlay'}
      fontSize="lg"      
      borderRadius={'50%'}
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="black"      
      pos={'fixed'}
      top={['2', '4']}
      right={['0', '4']}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;

