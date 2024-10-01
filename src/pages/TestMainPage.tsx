import { FC } from 'react';
import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import AppInfoMain from '@/components/AppInfoMain';

const TestMainPage: FC = () => (
  <HeroSection>
    <Container>
      <AppInfoMain />
    </Container>
  </HeroSection>
);

export default TestMainPage;
