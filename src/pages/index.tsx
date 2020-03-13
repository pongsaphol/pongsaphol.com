import React, { useEffect, useState } from 'react'
import {
  FaAddressCard,
  FaRegEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaInstagram
} from 'react-icons/fa'
import { Flex as FlexBox, Heading, Box, Text, Slide } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { Nav } from '../components/nav'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Flex = styled(FlexBox)`
  animation: ${fadeIn} 1s;
`

const IndexPage = () => {
  const { 0: showMenu, 1: setShowMenu } = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setShowMenu(true)
    }, 800)
  }, [])

  const navTop = [
    {
      name: 'github',
      href: 'https://github.com/win11905',
      icon: FaGithub
    },
    {
      name: 'gitlab',
      href: 'https://gitlab.com/win11905',
      icon: FaGitlab
    },
    {
      name: 'email',
      href: 'mailto:contact@pongsaphol.com',
      icon: FaRegEnvelope
    }
  ]

  const navBottom = [
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/pongsaphol-pongsawakul-14b26817b/',
      icon: FaLinkedin
    },
    {
      name: 'facebook',
      href: 'https://facebook.com/win11905',
      icon: FaFacebook
    },
    {
      name: 'instagram',
      href: 'https://instagram.com/win11905',
      icon: FaInstagram
    }
  ]

  return (
    <Flex
      justify="center"
      align="center"
      overflow="hidden"
      height="100%"
      direction="column"
      boxShadow="inset 0px 0px 0px 8px black"
    >
      <Nav transition={showMenu} from="right" items={navTop} response={true} />
      <Slide in={true} items={[true]} duration={1000} from="top">
        {(styles: any) => {
          const component = (
            <Box
              px={12}
              py={6}
              opacity={styles.opacity}
              transform={styles.transform}
            >
              <Heading
                size="md"
                letterSpacing="0.1em"
                color="gray.500"
                textAlign={['left', 'right']}
                py={3}
              >
                Competitive Programmer
              </Heading>
              <Heading size="xl">Pongsaphol Pongsawakul</Heading>
              <Heading size="md" letterSpacing="0.1em" color="gray.500" py={3}>
                TU80 | NOI'19 | APIO'19 | IOI'19
              </Heading>
            </Box>
          ) as any
          return component
        }}
      </Slide>

      <Nav
        transition={showMenu}
        from="left"
        items={navBottom}
        response={true}
      />
      <Box height="72px" display={['none', showMenu ? 'none' : 'flex']} />
      <Nav
        transition={showMenu}
        from="bottom"
        items={[...navTop, ...navBottom]}
        response={false}
      />
    </Flex>
  )
}

export default IndexPage
