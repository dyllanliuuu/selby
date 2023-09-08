import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    // <Page title="Contact" description="We'd love to hear from you!">
    <div style={{ margin: 50 }}>
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </div>
    // </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
