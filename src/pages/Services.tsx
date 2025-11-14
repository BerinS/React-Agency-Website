import { Card, Container, SimpleGrid, Text } from "@mantine/core";
import { IconCashRegister, IconClipboardData, IconFileAnalytics, IconGavel, IconNotebook, IconUserCheck } from "@tabler/icons-react";
import classes from '../css/FeaturesCards.module.css';
import { useEffect } from "react";

function Services(){
  useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); 
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, [location.hash]);
    
  const cardData = [
  {
    title: 'Računovodstvo i knjigovodstvo',
    description:
      'Kompletno vođenje finansijske evidencije u skladu sa Zakonom o računovodstvu i računovodstvenim standardima BiH. Obuhvata redovno knjigovodstvo, evidenciju poslovnih događaja, vođenje glavne knjige i pomoćnih evidencija. Osiguravamo tačnost i pravovremenost podataka za potrebe upravljanja i zakonske obaveze.',
    icon: IconNotebook,
  },
  {
    title: 'Poslovno savjetovanje',
    description:
      'Stručna analiza poslovnih procesa i finansijskih pokazatelja sa ciljem unapređenja poslovanja. Pružamo savjete o optimizaciji troškova, upravljanju likvidnošću i poboljšanju profitabilnosti. Fokusiramo se na praktična rješenja prilagođena specifičnostima vaše djelatnosti.',
    icon: IconUserCheck,
  },
  {
    title: 'PDV evidencija i obračun',
    description:
      'Vođenje evidencije PDV obveznika u skladu sa Zakonom o PDV-u BiH. Obračunavamo mjesečne PDV obaveze, pripremamo PDV prijave i osiguravamo pravovremeno podnošenje nadležnim poreskim organima. Vođenje Knjige ulaznih i izlaznih faktura (KUF/KIF). Pratimo promjene u regulativi i osiguravamo usklađenost sa zakonskim propisima.',
    icon: IconFileAnalytics,
  },
  {
    title: 'Finansijski izvještaji',
    description:
      'Izrada godišnjih finansijskih izvještaja. Obuhvata bilans stanja, bilans uspjeha, izvještaj o tokovima gotovine i bilješke uz finansijske izvještaje. Pripremamo izvještaje za potrebe uprave i vlasnika, kao i za ispunjenje svih zakonskih obaveza prema poreskim organima i regulatorima tržišta kapitala.',
    icon: IconClipboardData,
  },
  {
    title: 'Registracija djelatnosti',
    description:
      'Pravna i administrativna podrška pri osnivanju pravnih i fizičkih lica (samostalnih preduzetnika), te registraciji djelatnosti. Uključuje pripremu osnivačkih akata, savjetovanje o optimalnom obliku poslovanja i pomoć pri prijavi u nadležne registre. Pružamo informacije o proceduralnim obavezama prema privrednim i sudskim registrima BiH.',
    icon: IconGavel,
  },
  {
    title: 'Obračun plaća',
    description:
      'Obračun neto i bruto plaća uz poštovanje odredbi Zakona o radu i poreskog zakonodavstva BiH. Obuhvata obračun poreza i doprinosa, pripremu platnih listića i mjesečno podnošenje obaveznih izvještaja nadležnim institucijama.',
    icon: IconCashRegister,
  },
];

const features = cardData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color='#a6161a' />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return(
    <>
      <Container size={'lg'} my={120}>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {features}
        </SimpleGrid>
      </Container>      
    </>
  )
}

export default Services;