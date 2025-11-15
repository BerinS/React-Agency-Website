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
                <Accordion.Control>Kako započeti saradnju sa nama?</Accordion.Control>
                <Accordion.Panel>
                  Saradnju možete započeti kontaktiranjem putem emaila ili telefona kako bismo zakazali uvodni sastanak. 
                  Potrebni su vam osnovni podaci o kompaniji, vrsti djelatnosti i dosadašnjoj finansijskoj dokumentaciji. 
                  Nakon analize vaših potreba, pripremamo ponudu usluga prilagođenu specifičnostima vašeg poslovanja.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="potrebna-dokumentacija">
                <Accordion.Control>Koju dokumentaciju trebam dostaviti za računovodstvene usluge?</Accordion.Control>
                <Accordion.Panel>
                  Osnovna dokumentacija uključuje: osnivački akt, rješenje o registraciji, PDV identifikacioni broj (ako ste obveznik), 
                  ugovore s dobavljačima i klijentima, bankovne izvode, fakture (ulazne i izlazne), te ostale finansijske dokumente. 
                  Precizan spisak dostavljamo nakon upoznavanja sa specifičnostima vašeg poslovanja.
                </Accordion.Panel>
              </Accordion.Item>
            
              <Accordion.Item className={classes.item} value="rokovi-prijava">
                <Accordion.Control>Koji su rokovi za podnošenje poreskih prijava?</Accordion.Control>
                <Accordion.Panel>
                  PDV prijave se podnose do 15. u mjesecu za prethodni mjesec. Godišnji porez na dobit prijavljuje se do 31. marta za prethodnu godinu. 
                  Obračun poreza po odbitku podnosi se do kraja narednog mjeseca. Mi osiguravamo pravovremenu pripremu i podnošenje svih prijava, 
                  uz prethodno odobrenje od vas.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="cjenovnik-usluga">
                <Accordion.Control>Kako se formira cijena vaših usluga?</Accordion.Control>
                <Accordion.Panel>
                  Cijena ovisi o obimu poslovanja, broju zaposlenih, kompleksnosti djelatnosti i opsegu traženih usluga. 
                  Nakon analize vaših potreba, dajemo preciznu ponudu s fiksnom mjesečnom tarifom koja uključuje sve dogovorene usluge. 
                  Nema skrivenih troškova - sve je transparentno definirano u ugovoru o saradnji.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="finansijski-izvjestaji">
                <Accordion.Control>Kada se moraju sastaviti godišnji finansijski izvještaji?</Accordion.Control>
                <Accordion.Panel>
                  Godišnji finansijski izvještaji moraju biti sastavljeni u roku od 4 mjeseca od završetka finansijske godine, 
                  odnosno do 30. aprila za prethodnu kalendarsku godinu. Izvještaji se dostavljaju nadležnoj instituciji za statistiku 
                  i poreskoj upravi. Mi osiguravamo pravovremenu pripremu izvještaja u skladu sa važećim računovodstvenim standardima BiH.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
           <Image 
                src={image}
                h={{ base: 350, sm: 350, md: 400, lg: 440 }}
                w={{ base: 350, sm: 350, md: 400, lg: 440 }}
                style={{paddingLeft: '30px' , paddingTop: '10px'}}
            />            
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default FaqWithImage;