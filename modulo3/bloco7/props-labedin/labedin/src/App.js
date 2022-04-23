import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
// import styled from 'styled-components';
import {AppContainer, SectionContainer, TextoTitulo} from './AppStyles';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <SectionContainer>
        <TextoTitulo>Dados pessoais</TextoTitulo>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQH7EU7P0oQleA/profile-displayphoto-shrink_200_200/0/1650409389801?e=1655942400&v=beta&t=ewZbHXk6ZfnTigBCr1XavYnClmCnYQ6UBCUIADoT0Io" 
          nome="Ana Lívia" 
          descricao="Olá, sou estudante do curso Web Fullstack na Labenu. Sou curiosa, adoro solucionar problemas e inovar sempre que possível. Disposta a viver e aprender de tudo um pouco, tenho como propósito de vida deixar minha marca por onde passar."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/564x/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.jpg" 
          texto="Ver mais"
        />
      </SectionContainer>

      <SectionContainer>
        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/1769/PNG/512/4092561-email-envelope-mail-message-mobile-ui-ui-website_114031.png"
          nome="E-mail:"
          descricao="aalivii@gmail.com"
        />

        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/1480/PNG/512/location_101996.png"
          nome="Local:"
          descricao="Rua do fim, 39, Serrinha"
        />
      </SectionContainer>

      <SectionContainer>
        <TextoTitulo>Formação Acadêmica</TextoTitulo>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQEgu0NqBiA4RQ/company-logo_200_200/0/1640101539795?e=2147483647&v=beta&t=kRB3fAXQZ2rv2JXT3PE4X-sKTPo776m_4ymXRdDTTpU" 
          nome="Uniateneu" 
          descricao="Desenvolvimento e Análise de Sistemas.
          Período: Julho/2021 - Dezembro/2023" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=2147483647&v=beta&t=MMpHLjDuqe3Phl019qxj3n0AoEDlV0xH80A4sQJCv0Y" 
          nome="Labenu" 
          descricao="DDesenvolvedor Web Full Stack.
          Período: Janeiro/2022 - Fevereiro/2023" 
        />
      </SectionContainer>

      <SectionContainer>
        <TextoTitulo>Experiências profissionais</TextoTitulo>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGGSx166U23OA/company-logo_200_200/0/1648561798435?e=2147483647&v=beta&t=Xptu1zLt6O7xovpEQbSctNlMftJPkGExFDug4u3knM4" 
          nome="Multiplay Telecom" 
          descricao="Atendimento ao cliente, orientando planos e formas de negociar de acordo com suas necessidades. Tratado acordo com clientes pessoa física e pessoa jurídica." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFdG1CaH73HJw/company-logo_200_200/0/1519901095837?e=2147483647&v=beta&t=axu7jGZp5miQ35a6i6BOzfrqcICgu0-OnnmoBUXlXnA" 
          nome="BRIC Group" 
          descricao="Atendimento personalizado ao cliente, adequando o produto voltado a férias e bem estar à sua necessidade. Tratada as melhores formas de pagamento e melhores planos de acordo com o desejo do cliente e o orçamento disponível." 
        />
      </SectionContainer>

      <SectionContainer>
        <TextoTitulo>Minhas redes sociais</TextoTitulo>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="TLinkedin" 
        />        
      </SectionContainer>
    </AppContainer>
  );
}

export default App;
