import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Career = () => {
  return (
    <Container>
      <Name>
        <NameText>Career</NameText>
      </Name>
      <Link to={'/saladpet'}>
        <Flex>
          <Title>(주) 라이노박스 - 샐러드펫</Title>
          <Detail>자세히 보기</Detail>
        </Flex>
      </Link>
      <FlexJustiBetween>
        <Image src="https://play-lh.googleusercontent.com/EMjeQeKUGAR0G7nsPyguGV_QOvdLGq6XMx7gI80DJta31soC0ONRCgFuURbTZ9qWx2s=w1052-h592-rw" />
        <Image src="https://play-lh.googleusercontent.com/2SCGSYziz_8-YUy1mLZEz0vlJduPV-WHaO5f5SVNBLb3R-PVjI3T0qy23nhduBzli4CS=w1052-h592-rw" />
        <Image src="https://play-lh.googleusercontent.com/E7u6ivQdRHH8EQ-2N5pg4jlPAhSnQSXne-q7rOPLnup3kWAseGp2TLIg_sbC4UOwCnc=w1052-h592-rw" />
      </FlexJustiBetween>

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

      <Link to={'/everycharge'}>
        <Flex>
          <Title>(주) 스칼라데이터 - 모두의 충전</Title>
          <Detail>자세히 보기</Detail>
        </Flex>
      </Link>

      <FlexJustiBetween>
        <Image src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/25/18/7a/25187ab2-e1e7-af48-d1e6-aa1995c64fa6/ef7a74c4-7a8b-48f5-8080-9b8cc9735d53_01.png/460x0w.webp" />
        <Image src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/01/50/3e/01503e0b-67a0-8aed-41e6-d037a04e3029/c0a8cc1a-519c-48a2-a6d6-9b09772d024e_ios_6.5_U110b_U1175_U11ab_U110e_U117502.png/460x0w.webp" />
        <Image src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/90/a5/34/90a5349e-fa70-236c-b506-47989e6cf00b/58f33820-ebd6-42cf-a66c-e97e9eedd19c_ios_6.5_U1112_U1167_U11bc_3.png/460x0w.webp" />
      </FlexJustiBetween>
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
          <Td>
            로그인 및 마이페이지 / 대리 충전 런칭 / 현대 Developer API 연동
          </Td>
        </Tr>
        <Tr>
          <ContentTd>tech</ContentTd>
          <Td>
            React-Native, Code-Push, Redux, styled-component, Github, Figma
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

export default Career
