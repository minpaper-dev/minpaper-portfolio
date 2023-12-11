import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Project = () => {
  return (
    <Container>
      <Name>
        <NameText>Project</NameText>
      </Name>

      <Link to={'/foodlier'}>
        <Flex>
          <Title>Foodlier</Title>
          <Detail>자세히 보기</Detail>
        </Flex>
      </Link>
      <FlexJustiBetween>
        <Image src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/f05b1a3a-9653-41f3-abae-0a7bc12616ca" />
        <Image src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/3279d99f-2452-4115-9cd4-9b423c176f99" />
        <Image src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/5c0db9bc-4462-4f0b-a060-7119fea9ea25" />
      </FlexJustiBetween>

      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2023.09.07 - 2023.10.26 (약 2개월)</Td>
        </Tr>
        <Tr>
          <ContentTd>Personal / Team</ContentTd>
          <Td>Team</Td>
        </Tr>
        <Tr>
          <ContentTd>features</ContentTd>
          <Td>
            토큰 기반의 로그인 및 회원가입 / Kakao map API 연동 / 실시간 알림
            -SSE / 1:1 채팅 - SockJS / 게시물 검색 및 CRUD
          </Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>
            TypeScript, React, Recoil, styled-component, axios, MSW, StompJS,
            sockJS, WebSocket, SSE, Github, Figma, Notion
          </Td>
        </Tr>
      </Table>

      <Link to={'/scentsation'}>
        <Flex>
          <Title>ScentSation</Title>
          <Detail>자세히 보기</Detail>
        </Flex>
      </Link>
      <FlexJustiBetween>
        <Image src="https://user-images.githubusercontent.com/137516352/263533101-f4a1f21b-96ee-40ad-a3d1-37f7ce953d8b.jpeg" />
        <Image src="https://user-images.githubusercontent.com/137516352/263533374-f244c1f3-5992-4112-baa8-650f332d7f78.jpeg" />
        <Image src="https://user-images.githubusercontent.com/137516352/263533438-53d306f6-e5ba-4c32-9d93-ec085e34df1d.jpeg" />
      </FlexJustiBetween>

      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2023.08.01 - 2023.08.27 (약 1개월)</Td>
        </Tr>
        <Tr>
          <ContentTd>Personal / Team</ContentTd>
          <Td>Personal</Td>
        </Tr>
        <Tr>
          <ContentTd>features</ContentTd>
          <Td>
            Google로 로그인 / Firebase 및 FireStore 연동 / 투표 등 커뮤니티 /
            검색 및 필터링
          </Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>
            TypeScript, React, Recoil, React Query, styled-component, Firebase,
            Github, Figma, Notion
          </Td>
        </Tr>
      </Table>

      <Link to={'/vueshop'}>
        <Flex>
          <Title>Vue Shop</Title>
          <Detail>자세히 보기</Detail>
        </Flex>
      </Link>
      <FlexJustiBetween>
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/bb71a5dd-68a0-4d45-b4d8-f804dea89a38" />
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/fc6bafbb-8590-4a7e-8735-b8bcf7e49277" />
      </FlexJustiBetween>
      <FlexJustiBetween>
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/ccc1bb46-f0a2-497a-b41d-41d71fef2979" />
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/7e7e1d71-5d5f-41eb-9859-7bab67aa6c47" />
      </FlexJustiBetween>
      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2023.07.04 - 2023.07.19 (약 2주)</Td>
        </Tr>
        <Tr>
          <ContentTd>Personal / Team</ContentTd>
          <Td>Personal</Td>
        </Tr>
        <Tr>
          <ContentTd>projects</ContentTd>
          <Td>테마 변경(다크 모드 / 라이트 모드) / Carousel / Fake API 연동</Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>TypeScript, React, Recoil, React Query, tailwind, Github</Td>
        </Tr>
      </Table>

      <Flex>
        <Title>Lodics Web Refactoring</Title>
      </Flex>
      <FlexJustiBetween>
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/8de86eab-0bf9-42c2-9148-59a8769b075f" />
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/c6ece8cb-7529-4fc3-a3b1-d36050a65d11" />
      </FlexJustiBetween>
      <FlexJustiBetween>
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/eabb5428-ae28-405e-859b-ef4a9dd64411" />
        <WebImage src="https://github.com/minpaper-dev/vue-shop/assets/137516352/60850a21-0170-4244-889f-23f38efa71b3" />
      </FlexJustiBetween>
      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2021.12.28 - 2022.01.28 (약 1개월)</Td>
        </Tr>
        <Tr>
          <ContentTd>Personal / Team</ContentTd>
          <Td>Team (FE : 2)</Td>
        </Tr>
        <Tr>
          <ContentTd>projects</ContentTd>
          <Td>언어 변경(한국어 / English) / useContext </Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>JavaScript, React, Next.js, styled-component, Github</Td>
        </Tr>
      </Table>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`

const Name = styled.div`
  display: flex;
  padding: 0 1rem;
  border-left: 1rem solid #bdb1a6;
`

const NameText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`

const Title = styled.span`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 4rem 0;
`

const Table = styled.table``

const Tr = styled.tr`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`
const Td = styled.td`
  padding: 1rem 0;
  font-size: 1.4rem;
  color: #333333;
`

const ContentTd = styled.td`
  width: 30%;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  text-align: center;
`

const Detail = styled.span`
  margin: 4rem 1rem;
  text-decoration: underline;
`

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
`

const FlexJustiBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`

const Image = styled.img`
  width: 30%;
  border-radius: 1rem;
  border: 1px solid #eaeaea;
`

const WebImage = styled.img`
  width: 50%;
  border-radius: 1rem;
  border: 1px solid #eaeaea;
`

export default Project
