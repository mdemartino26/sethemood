import { useAuth } from "lib/useUser";
import { useProtected } from "lib/useProtected";
import { Container } from './styled'

const Perfil = () => {
  const auth = useProtected();
  if (!auth.user) return null;
  return (
    <Container>
      <h2>Ingresaste con el mail: {auth.user.email}</h2>
      <p></p>
      
    </Container>
  );
};

export default Perfil;
