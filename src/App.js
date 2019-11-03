import React from 'react';
import Header from './components/Header/index';
import FormSection from './components/FormSection';
import MainContainer from './components/MainContainer';
import ReviewSection from './components/ReviewSection';
import FeatureSection from './components/FeatureSection';
import PropertiesSection from './components/PropertiesSection';
import CallToAction from './components/Shared/CallToAction';
import AddDateSection from './components/AddDateSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <FormSection />
        <ReviewSection />
        <FeatureSection />
        <PropertiesSection />
        <CallToAction />
        <AddDateSection />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
