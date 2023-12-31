import React, { useEffect, useState } from "react";
import {
  Card,
  Flex,
  Text,
  Image,
  CardBody,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import UserSvg from "../../Assets/Svg/ProfileCardUser.svg";
import { ProfileMenuLinks } from "../Links/Links";
import { API_BASE_URL } from "../../Api/Constants";
import { useParams } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Card bg="#fff" minW="280px" maxW="300px" h="500px" p="30px 0px">
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Image src={UserSvg} />

        {/*---------------User giriş yaptiğinda Nicki gözükecek Unutmaa-------------- */}

        <Text pt="30px" fontSize="14px">
          Tekrar hoş geldiniz,{localStorage.getItem("userName")}
        </Text>
      </Flex>

      {/*------------------------------------Menu Links-------------------------------- */}

      <CardBody p="0px" mt="20px">
        {ProfileMenuLinks.map((cardLink, index) => (
          <UnorderedList key={index} listStyleType="none">
            <Link
              href={cardLink.href}
              borderTop="0.5px solid #c1c1c1"
              display="flex"
              alignItems="center"
              p="12px 4px"
              fontSize="14px"
              _hover={{
                borderLeft: "8px solid rgb(248, 179, 51)",
                color: "#FAC050",
              }}
            >
              <ListItem pr="10px"> {cardLink.icon}</ListItem>
              <ListItem fontWeight="300">{cardLink.name}</ListItem>
            </Link>
          </UnorderedList>
        ))}
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
