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
        'Kompletno preuzimamo vođenje finansijske evidencije u skladu sa Zakonom o računovodstvu i reviziji i međunarodnim računovodstvenim standardima. Naše usluge obuhvataju ažurno knjigovodstvo, evidentiranje svih poslovnih događaja, vođenje glavne knjige i pomoćnih evidencija. Osiguravamo tačne i pravovremene informacije koje vam pomažu u donošenju kvalitetnih poslovnih odluka i ispunjavanju svih zakonskih obaveza.',
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
        'Vođenje računovodstvenih evidencije PDV obveznika u skladu sa Zakonom o PDV-u BiH. Obračunavamo mjesečne PDV obaveze, pripremamo PDV prijave uz obavezne e-KIF i e-KUF evidencije i osiguravamo pravovremeno podnošenje obrazaca. Pratimo promjene u regulativi i osiguravamo usklađenost sa zakonskim propisima.',
      icon: IconFileAnalytics,
    },
    {
      id: 'izvjestaji',
      title: 'Finansijski izvještaji',
      description:
        'Izrada godišnjih finansijskih izvještaja. Obuhvata set finansijskih izvještaja koji uključuje bilans stanja, bilans uspjeha, izvještaj o tokovima gotovine, bilješke uz finansijske izvještaje i ostali izvještaji za Finansijsko–informatičku agenciju. Pripremamo izvještaje za potrebe uprave i vlasnika, kao i za ispunjenje svih zakonskih obaveza.',
      icon: IconClipboardData,
    },
    {
      id: 'registracija',
      title: 'Registracija djelatnosti',
      description:
        'Administrativna podrška pri osnivanju pravnih i fizičkih lica (samostalnih preduzetnika), te registraciji djelatnosti. Uključuje pripremu zahtjeva za registraciju, savjetovanje o optimalnom obliku poslovanja i pomoć pri prijavi u nadležne registre. Pružamo informacije o proceduralnim obavezama prema poreskim i općinskim uredima.',
      icon: IconGavel,
    },
    {
      id: 'place',
      title: 'Obračun plaća',
      description:
        'Obračun neto i bruto plaća uz poštovanje odredbi Zakona o radu i poreskog zakonodavstva FBiH i RS. Obuhvata obračun poreza i doprinosa, pripremu platnih lista i mjesečno podnošenje obaveznih obrazaca nadležnim poreskim nadležnim institucijama.',
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
    <div className={classes.wrapper}>
      <Container size={'lg'}>
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}          
        >          
          {features}
        </SimpleGrid>
      </Container>  
    </div>   
  )
}

export default Services;