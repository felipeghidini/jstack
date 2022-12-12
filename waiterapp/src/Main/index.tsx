import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { CatergoriesContainer, Container, Footer, MenuContainer, FooterContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CatergoriesContainer>
          <Categories />
        </CatergoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>

    </>
  );
}
