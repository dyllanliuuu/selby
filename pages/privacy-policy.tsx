import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    // <Page title="Privacy policy">
    <div style={{ margin: 50 }}>
      <PrivacyPolicyContainer>
        <RichText>
          <h1>Privacy Policy for Selby</h1>

          <p>
            <strong>Last updated:</strong> 08/18/2023
          </p>

          <p>
            Thank you for choosing Selby. This Privacy Policy is designed to explain how we collect, use, protect, and disclose information
            and data when you use Selby on your Shopify store.
          </p>

          <h2>1. Information We Collect</h2>

          <ul>
            <li>
              <strong>a. Shopify Store Data:</strong> When you install the extension, we access and collect information from your Shopify
              store including, but not limited to, product information, order details, and customer data.
            </li>
            <li>
              <strong>b. Usage Data:</strong> We collect data about how you use our extension and any feedback you provide.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <ul>
            <li>
              <strong>a. To Provide and Improve Our Services:</strong> The data allows us to provide cross-selling features, improve the
              functionality of our extension, and offer better user experience.
            </li>
            <li>
              <strong>b. Communication:</strong> We might use your contact information to communicate about updates, security, and other
              service-related issues.
            </li>
          </ul>

          <h2>3. Data Sharing</h2>

          <ul>
            <li>
              <strong>a. Cross-Selling:</strong> Our primary feature involves sharing selected product data with other Shopify stores for
              the purpose of cross-selling. This data does not include personal customer information.
            </li>
            <li>
              <strong>b. Third Parties:</strong> We do not sell or rent your data to third parties. However, we may disclose anonymized and
              aggregated data to third parties for analysis and other legitimate business purposes.
            </li>
          </ul>

          <h2>4. Data Protection</h2>

          <ul>
            <li>
              <strong>a. Security Measures:</strong> We implement various security measures to protect your data, including encryption and
              secure servers.
            </li>
            <li>
              <strong>b. Retention:</strong> We retain your data as long as your account is active or as needed to provide our services.
            </li>
          </ul>

          <h2>5. Your Choices</h2>

          <ul>
            <li>
              <strong>a. Access and Correction:</strong> You can access and correct any inaccuracies in the data we have about your Shopify
              store.
            </li>
            <li>
              <strong>b. Deletion:</strong> If you wish to delete your account and data associated with it, you can do so by uninstalling
              our extension.
            </li>
          </ul>

          <h2>6. Changes to This Privacy Policy</h2>

          <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <h2>7. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us at{' '}
            <a href="mailto:hugozhan0802@gmail.com">hugozhan0802@gmail.com</a>.
          </p>
        </RichText>
      </PrivacyPolicyContainer>
      </div>
    // </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
