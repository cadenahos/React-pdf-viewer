import React from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {
  Text,
  PersonaInitialsColor,
  PersonaSize,
  Persona,
  getTheme,
  mergeStyleSets,
  Stack,
} from '@fluentui/react';
import './App.css';
import { user } from './ourObjects';

function App() {
  const theme = getTheme();
  initializeIcons();
  const styles = mergeStyleSets({
    sectionContainer: {
      width: '500px',
      boxShadow:
        '0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108)',
    },
    sectionHeader: {
      backgroundColor: theme.palette.themePrimary,
      color: theme.palette.white,
      height: '25px',
    },
    sectionBody: {
      padding: '0 14px',
      height: '50px',
    },
  });
  return (
    <>
      <div>
        <h1>Document viewer with tools</h1>
      </div>
    </>
  );
}

export default App;
