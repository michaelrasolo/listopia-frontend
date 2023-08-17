import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import * as React from "react";

export function Email(
  // gifter, itemName
  ) {
  return (
    <Html>
      <Head />
      <Preview>Liste de naissance de Marie & Michaël: cadeau reservé !</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>Listopia </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hello
            {/* {gifter} */}
            ,</Text>
            <Text style={paragraph}>
              Nous te remercions pour ta participation à la liste de naissance
              de notre bébé ❤️
            </Text>
            <Text style={paragraph}>
              {/* {itemName} */}
               est désormais marqué comme reservé sur la liste. Il ne
              manque plus que l'achat à réaliser, si ce n'est déjà fait !
            </Text>
            {/* BOUTON Acheter */}
            <Text>
              Si tu dois annuler la réservation du cadeau, rendez-vous sur le
              site de{" "}
              <Link href="https://listopia-omega.vercel.app/" style={link}>
                Listopia
              </Link>
              . Retrouve l'article et rends le à nouveau disponible pour les
              autres utilisateurs. 🙏🏽
            </Text>
            <Text style={paragraph}>
              Passe une très belle journée,
              <br />
              Marie & Michaël
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              {/* <Img src={`${baseUrl}/static/twitch-icon-twitter.png`} /> */}
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              {/* <Img src={`${baseUrl}/static/twitch-icon-facebook.png`} /> */}
            </Column>
          </Row>
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            © 2023 Michaël Rasolonjatovo, Tous droits réservés
            <br />
            45 Boulevard de Montmorency, 75016 Paris
          </Text>
        </Section>
      </Body>
    </Html>
  );
}

export default Email;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid #335C67",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
