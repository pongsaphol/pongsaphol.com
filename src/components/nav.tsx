import React from 'react'

import { Box, Flex, Link, Slide } from '@chakra-ui/core'

export const Nav = props => {
  const { transition, from, items, response } = props
  return (
    <Slide in={transition} from={from} items={[true]} duration={1000}>
      {(styles: any) => {
        const component = (
          <Flex
            opacity={styles.opacity}
            transform={styles.transform}
            width={'100%'}
            direction={'row'}
            justify="center"
            px={12}
            display={response ? ['flex', 'none'] : ['none', 'flex']}
          >
            {items.map((item, i) => {
              return (
                <Box px={5} py={5} key={`nav-item-${item.name}-${i}`}>
                  <Link href={item.href} aria-label={item.name} isExternal>
                    <Box as={item.icon} size="32px" />
                  </Link>
                </Box>
              )
            })}
          </Flex>
        ) as any

        return component
      }}
    </Slide>
  )
}
