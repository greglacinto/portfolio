import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
// import { Link as ReachLink } from "@reach/router"

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: greglacinto@gmail.com",
    id: 1
  },
  {
    icon: faGithub,
    url: "https://github.com/greglacinto",
    id: 2
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/dev-gregory-odiase/",
    id:3
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id:4
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id:5
  },
];

const listItems = socials.map(
  (element) => {
    return (
        <ListItem listStyleType = 'none' key={element.id} >
          <Link href={element.url}>
            <FontAwesomeIcon icon={element.icon} 
            size="2x"
            />
          </Link>
        </ListItem>
    )
  }
)


const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-around"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
              <UnorderedList>
                <HStack>
                  {listItems}
                </HStack>
              </UnorderedList>
          </nav>
          <nav>
            <UnorderedList>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                <ListItem listStyleType='none'>
                  <Link  
                  href="/#projects" 
                  onClick={handleClick('projects')}>
                    Projects
                  </Link>
                </ListItem>
                <ListItem listStyleType='none'>
                  <Link  href="/#contact-me"  
                  onClick={handleClick('contactme')}>Contact Me</Link>
                </ListItem>
              </HStack>
            </UnorderedList>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
