import { Card, Container, SimpleGrid, Text } from "@mantine/core";
import { IconCashRegister, IconClipboardData, IconFileAnalytics, IconGavel, IconNotebook, IconUserCheck } from "@tabler/icons-react";
import classes from '../css/FeaturesCards2.module.css';
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

function Services(){
  const location = useLocation();
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const cardData = [
    {
      id: 'racunovodstvo',
      title: 'Računovodstvo i knjigovodstvo',
      description:
        'Kompletno vođenje finansijske evidencije u skladu sa Zakonom o računovodstvu i računovodstvenim standardima BiH. Obuhvata redovno knjigovodstvo, evidenciju poslovnih događaja, vođenje glavne knjige i pomoćnih evidencija. Osiguravamo tačnost i pravovremenost podataka za potrebe upravljanja i zakonske obaveze.',
      icon: IconNotebook,
    },
    {
      id: 'savjetovanje',
      title: 'Poslovno savjetovanje',
      description:
        'Stručna analiza poslovnih procesa i finansijskih pokazatelja sa ciljem unapređenja poslovanja. Pružamo savjete o optimizaciji troškova, upravljanju likvidnošću i poboljšanju profitabilnosti. Fokusiramo se na praktična rješenja prilagođena specifičnostima vaše djelatnosti.',
      icon: IconUserCheck,
    },
    {
      id: 'pdv',
      title: 'PDV evidencija i obračun',
      description:
        'Vođenje evidencije PDV obveznika u skladu sa Zakonom o PDV-u BiH. Obračunavamo mjesečne PDV obaveze, pripremamo PDV prijave i osiguravamo pravovremeno podnošenje nadležnim poreskim organima. Vođenje Knjige ulaznih i izlaznih faktura (KUF/KIF). Pratimo promjene u regulativi i osiguravamo usklađenost sa zakonskim propisima.',
      icon: IconFileAnalytics,
    },
    {
      id: 'izvjestaji',
      title: 'Finansijski izvještaji',
      description:
        'Izrada godišnjih finansijskih izvještaja. Obuhvata bilans stanja, bilans uspjeha, izvještaj o tokovima gotovine i bilješke uz finansijske izvještaje. Pripremamo izvještaje za potrebe uprave i vlasnika, kao i za ispunjenje svih zakonskih obaveza prema poreskim organima i regulatorima tržišta kapitala.',
      icon: IconClipboardData,
    },
    {
      id: 'registracija',
      title: 'Registracija djelatnosti',
      description:
        'Pravna i administrativna podrška pri osnivanju pravnih i fizičkih lica (samostalnih preduzetnika), te registraciji djelatnosti. Uključuje pripremu osnivačkih akata, savjetovanje o optimalnom obliku poslovanja i pomoć pri prijavi u nadležne registre. Pružamo informacije o proceduralnim obavezama prema privrednim i sudskim registrima BiH.',
      icon: IconGavel,
    },
    {
      id: 'place',
      title: 'Obračun plaća',
      description:
        'Obračun neto i bruto plaća uz poštovanje odredbi Zakona o radu i poreskog zakonodavstva BiH. Obuhvata obračun poreza i doprinosa, pripremu platnih listića i mjesečno podnošenje obaveznih izvještaja nadležnim institucijama.',
      icon: IconCashRegister,
    },
  ];

  const setCardRef = (id: string) => (el: HTMLDivElement | null) => {
    cardRefs.current[id] = el;
  };

  useEffect(() => {
    const hash = location.hash.substring(1);
    
    if (hash && cardData.some(card => card.id === hash)) {
      setHighlightedCard(hash);
      
      const element = cardRefs.current[hash];
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }

      const timer = setTimeout(() => {
        setHighlightedCard(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const features = cardData.map((feature) => (
    <Card 
      key={feature.title} 
      shadow="md" 
      radius="md" 
      className={classes.card} 
      padding="xl"
      ref={setCardRef(feature.id)}
      style={{
        border: highlightedCard === feature.id ? '1px solid #a6161a' : '1px solid #e0e0e0',
        transition: 'border 0.3s ease',
      }}
    >
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