import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import image from '../assets/FAQ_Image.png';
import classes from '../css/FaqWithImage.module.css';

export function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" >
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Često postavljena pitanja
            </Title>
             <Accordion chevronPosition="right" defaultValue="pocetak-saradnje" variant="separated">
              <Accordion.Item className={classes.item} value="pocetak-saradnje">
                <Accordion.Control>
                  Šta je osnovica za obračun doprinosa za radni odnos na pola radnog vremena?
                </Accordion.Control>
                <Accordion.Panel>
                  Najniža osnovica je najniža bruto plaća za pola radnog vremena (ili stvarna bruto plaća ako je ona veća).
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="potrebna-dokumentacija">
                <Accordion.Control>
                  Koji je maksimalan broj sati koji radnik može imati u toku jednog mjeseca?
                </Accordion.Control>
                <Accordion.Panel>
                  Broj radnih dana u mjesecu × broj sati na koje je dnevno radnik prijavljen u Poreznoj upravi.
                </Accordion.Panel>
              </Accordion.Item>
            
              <Accordion.Item className={classes.item} value="rokovi-prijava">
                <Accordion.Control>
                  Koja je mogućnost korištenja neiskorištenog godišnjeg odmora prelaskom kod drugog poslodavca?
                </Accordion.Control>
                <Accordion.Panel>
                  Ako će se radnik zaposliti kod drugog poslodavca u roku od 15 dana od dana prekida
                  rada kod bivšeg poslodavca, na osnovu potvrde o iskorištenim danima godišnjeg odmora isti
                  može ostatak dana koristiti kod novog poslodavca.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="cjenovnik-usluga">
                <Accordion.Control>
                  Ako primimo račun za godišnji obračun hostinga od firme iz Hrvatske, da li treba obračunati PDV? Može li se taj PDV odbiti?
                </Accordion.Control>
                <Accordion.Panel>
                  Da, mora se obračunati izlazni PDV po stopi od 17%, jer je to usluga oporeziva u
                  mjestu primaoca. Ako se hosting koristi za oporezivu djelatnost, PDV je odbitni i ide u polje 41
                  PDV prijave.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="finansijski-izvjestaji">
                <Accordion.Control>Poduzeće ulaže u iznajmljeni prostor koji je u vlasništvu drugog pravnog lica.
                  Kako ispravno knjižiti ovo ulaganje i koje uvjete treba zadovoljiti da bi imali pravo na odbitak
                  ulaznog PDV-a?
                </Accordion.Control>
                <Accordion.Panel>
                  Ulaganje se iskazuje kao ulaganje na tuđim objektima (konto 0211) i imate pravo na
                  odbitak ulaznog poreza ako unajmljeni prostor koristite za oporezive svrhe.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
           <Image 
                src={image}
                h={{ base: 350, sm: 350, md: 400, lg: 440 }}
                w={{ base: 350, sm: 350, md: 400, lg: 440 }}
                style={{paddingLeft: '30px' , paddingTop: '20px'}}
            />            
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default FaqWithImage;