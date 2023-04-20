import { Button } from '@react-email/button';
import { Container } from '@react-email/container';

const Email = () => {
  return (
    <Container>
      <Button href="https://gmail.com" style={{ color: '#61dafb' }}>
        Click me
      </Button>
    </Container>
  );
};

export default Email;