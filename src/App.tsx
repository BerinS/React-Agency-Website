import '@mantine/core/styles.css';
import Home from './pages/Home';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { MantineProvider, AppShell  } from '@mantine/core';
import {RemoveScrollBar} from 'react-remove-scroll-bar';




function App() {
  return (
    <MantineProvider>
       
      <AppShell>
        
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>

        
        <AppShell.Main>
          <Home />
        </AppShell.Main>

      </AppShell>
    </MantineProvider>
  );
}

export default App
