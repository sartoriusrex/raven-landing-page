import React from 'react';

import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import RangeSection from './sections/Range';
import ProjectSection from './sections/Projects';
import OpinionSection from './sections/Opinions';
import ContactSection from './sections/Contact';

const App = () => {

    return(
      <>
        <HeroSection />
        <AboutSection />
        <RangeSection />
        <ProjectSection />
        <OpinionSection />
        <ContactSection />
      </>
    )
}

export default App;