import { styled } from 'styled-components'

const Career = () => {
  return (
    <Container>
      <Name>
        <NameText>Career</NameText>
      </Name>
      <Title href="http://www.saladpet.com/" target="_blank">
        (주) 라이노박스 - 샐러드펫
      </Title>
      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2022.02 - 2023.03 (1년 2개월)</Td>
        </Tr>
        <Tr>
          <ContentTd>position</ContentTd>
          <Td>FE Developer</Td>
        </Tr>
        <Tr>
          <ContentTd>projects</ContentTd>
          <Td>온보딩 및 회원가입 / 스토어 런칭 / 큐레이션 </Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>
            React-Native, Code-Push, Redux, styled-component, Github, GA,
            Amplitude, Figma
          </Td>
        </Tr>
      </Table>

      <Title href="https://evmodu.kr/" target="_blank">
        (주) 스칼라데이터 - 모두의 충전
      </Title>
      <Table>
        <Tr>
          <ContentTd>period</ContentTd>
          <Td>2021.07 - 2021.12 (6개월)</Td>
        </Tr>
        <Tr>
          <ContentTd>position</ContentTd>
          <Td>FE Developer</Td>
        </Tr>
        <Tr>
          <ContentTd>projects</ContentTd>
          <Td>로그인 및 마이페이지, 대리 충전 런칭, 현대 Developer API 연동</Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>
            React-Native, Code-Push, Recoil, styled-component, Github, Figma
          </Td>
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

const Title = styled.a`
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
  font-size: 1.5rem;
`

const ContentTd = styled.td`
  width: 30%;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  text-align: center;
`

export default Career
