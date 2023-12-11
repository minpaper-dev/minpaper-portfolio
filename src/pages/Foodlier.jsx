import { styled } from 'styled-components'
import { Divider } from './MainPage'

const Foodlier = () => {
  return (
    <Container>
      <Name>
        <NameText>🍳 Foodlier</NameText>
      </Name>
      <FlexJustiBetween>
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/f05b1a3a-9653-41f3-abae-0a7bc12616ca" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/3279d99f-2452-4115-9cd4-9b423c176f99" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/5c0db9bc-4462-4f0b-a060-7119fea9ea25" />
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

      <Link href="https://zb-foodlier-iota.vercel.app/">
        <Title>🔗 사이트 바로가기 </Title>
        <Flex>
          <SubTitle>https://zb-foodlier-iota.vercel.app/</SubTitle>
        </Flex>
      </Link>
      <Link href="https://www.notion.so/Demo-Foodlier-836868d5f8a64a76abecf9deae597e5e">
        <TitleText>📃 Notion </TitleText>
        <Flex>
          <SubTitle>
            https://www.notion.so/Demo-Foodlier-836868d5f8a64a76abecf9deae597e5e
          </SubTitle>
        </Flex>
      </Link>
      <Link href="https://github.com/Foodlier">
        <TitleText>🐱 Github </TitleText>
        <Flex>
          <SubTitle>https://github.com/Foodlier</SubTitle>
        </Flex>
      </Link>

      <Divider />

      <Title>🛠️ 기술 스택 </Title>
      <FlexAlignCenter>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          TypeScript
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          React
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Recoil
        </FlexCol>
        <FlexCol>
          <Image src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/5e66ed7e-1ba8-4009-a428-dd623e5d1205" />
          axios
        </FlexCol>
        <FlexCol>
          <Image src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/233be6d2-759c-4caa-a4b7-3e8cbb5ac512" />
          MSW
        </FlexCol>
      </FlexAlignCenter>
      <FlexAlignCenter>
        <FlexCol>
          <Image src="data:image/jpeg;base64,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" />
          Styled-component
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Github
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Figma
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Notion
        </FlexCol>
      </FlexAlignCenter>

      <Divider />

      <Title>💡 주요 기능 </Title>

      <Title>1. 로그인, 회원가입 </Title>
      <Description>{`- 자체 로그인, 네이버, 카카오 로그인 연동
- JWT Access Token 기반의 Token 관리`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/1fffb0ca-1d1c-4baa-b7df-59ba5bf6e6b5" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/f05b1a3a-9653-41f3-abae-0a7bc12616ca" />
      </FlexAlignCenter>

      <Title>2. 냉장고를 부탁해</Title>
      <Description>{`- Kakao map API 연동을 통한 반경 1km 이내의 요리사 조회`}</Description>
      <Description>{`- 유효성 검사를 통한 견적서, 요청서 CRUD`}</Description>
      <Description>{`- 각 요청 완료 시 EventSourcePolyfill를 이용한 SSE 알림 노출`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/5c0db9bc-4462-4f0b-a060-7119fea9ea25" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/e671f127-f25c-4e84-bc83-c8114dcd94d0" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/5abce177-e64e-483b-bfd9-1aaefceb8265" />
      </FlexAlignCenter>

      <Title>3. 채팅 및 결제</Title>
      <Description>{`- Intersection Observer API를 통한 무한스크롤 구현
- SockJS를 사용하여 웹소켓을 지원하지 않는 브라우저에서도 웹소켓의 대안으로 Streaming, Long Polling 연결을 사용하여 실시간성 제공
`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/3279d99f-2452-4115-9cd4-9b423c176f99" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/3bcb4368-58c6-4c3b-b77d-cecbfedab251" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/da225ebf-bfb4-46fc-81fa-11948c4f5b04" />
      </FlexAlignCenter>

      <Title>4. 게시글 검색 및 관리</Title>
      <Description>{`- Custom Select Form을 이용하여 제목, 재료, 작성자 카테고리를 설정 및 정렬 기능 구현
- 유효성 검사를 통한 게시글, 댓글 CRUD
`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/762a8a44-18be-4e3f-b48d-ac024633cd1e" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/8d43ca6d-58b0-49bd-a120-36e2687d70ee" />
        <ProjectImage src="https://github.com/minpaper-dev/minpaper-portfolio/assets/137516352/ebefb02e-d55e-4923-9274-018c05426c8d" />
      </FlexAlignCenter>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 10rem;
`

const Name = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const NameText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`

const Title = styled.h2`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 3rem 0 1rem;
`

const TitleText = styled.h2`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
`

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`

const Description = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2;
  color: #333333;
  white-space: pre-wrap;
  margin-left: 2rem;
`

const Flex = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const FlexAlignCenter = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
  margin: 1rem 0;
`

const FlexJustiBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

const Link = styled.a``

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  border-radius: 2rem;
  margin-bottom: 1rem;
`

const ProjectImage = styled.img`
  width: 30%;
  border-radius: 1rem;
  border: 1px solid #eaeaea;
  margin-right: 1.5rem;
`

const FlexCol = styled.div`
  width: 10rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`

const Table = styled.table`
  margin-top: 2rem;
`

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

export default Foodlier
