import { Text } from '@mantine/core';
import classes from '../css/StatsGroup.module.css';
import NumberFlow from '@number-flow/react';
import { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const data = [
  {
    title: 'Godina iskusta',
    stats: '20',
    description: 'Preko dvije decenije iskustva u pružanju vrhunskih računovodstvenih usluga',
  },
  {
    title: 'Zadovoljnih klijenata',
    stats: '200',
    description: 'Stotine zadovoljnih klijenata koji nam vjeruju',
  },
  {
    title: 'Ušteđenih sati',
    stats: '50,000',
    description: 'Klijentima smo omogućili da se posvete suštini svog poslovanja',
  },
];

const extractNumber = (formattedString: string): number => {
  return parseInt(formattedString.replace(/,/g, ''), 10);
};

export function StatsGroup() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = data.map((stat) => {
    const numericValue = extractNumber(stat.stats);

    return (   
      <div key={stat.title} className={classes.stat} >
        <Text className={classes.count}>
          <NumberFlow
            spinTiming={{ duration: 900 , easing: 'ease'}}
            transformTiming={{ duration: 900, easing: 'ease' }}
            opacityTiming={{ duration: 900, easing: 'ease' }}
            value={isInView ? numericValue : 0}
            format={{ 
              useGrouping: true,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }} 
          />
          +
        </Text>
        <div data-aos="fade-up">
          <Text className={classes.title}>{stat.title}</Text>
          <Text className={classes.description}>{stat.description}</Text>
        </div>        
      </div>
    );
  });

  return (
    <div ref={ref} className={classes.root}>
      {stats}
    </div>
  );
}

export default StatsGroup;