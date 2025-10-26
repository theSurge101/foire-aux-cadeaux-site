import React from 'react';
import useSEO from '../Hooks/useSEO';

const ExhibitorInfo: React.FC = () => {

  useSEO({
    title: "Devenez Exposant - La Foire Aux Cadeaux 2025",
    description: "Exposez votre marque devant +3,000 visiteurs...",
    url: "https://foireauxcadeaux.tg/exposants",
    image: "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AUTHENTIC_EPSIGATE_001.jpg?w=800&h=600&fit=crop"
  });

  return (
    <div>
      <h1>Infos Exposants</h1>
    </div>
  );
};

export default ExhibitorInfo;
