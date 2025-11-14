import '@mantine/core/styles.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { MantineProvider, AppShell  } from '@mantine/core';
import {FooterCentered} from './components/FooterCentered';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <MantineProvider>
       
      <AppShell>
        
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>

        
        <AppShell.Main>
          
          

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Kontakt' element={<Contact />}></Route>
            <Route path='/Usluge' element={<Services />}></Route>
          </Routes>

          <FooterCentered />

        </AppShell.Main>
       
      </AppShell>
    </MantineProvider>
  );
}

export default App
