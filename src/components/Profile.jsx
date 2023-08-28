import { styled } from 'styled-components'
import profile from '../assets/IMG_0741.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <Container>
        <Name>
          <NameText>윤민지 (YUN MINJI)</NameText>
        </Name>
        <FlexRow>
          <ProfileImage src={profile} />
          <FlexCol>
            <Title>Contact.</Title>
            <Wrap>
              <SubTitle>📞 Phone</SubTitle>
              <Content>010-5232-0210</Content>
            </Wrap>
            <Wrap>
              <SubTitle>📨 E-mail</SubTitle>
              <Content>minpaper.dev@gmail.com</Content>
            </Wrap>
            <Wrap>
              <SubTitle>🐱 Github</SubTitle>
              <Content>https://github.com/minpaper-dev</Content>
            </Wrap>
            <Wrap>
              <SubTitle>📝 Blog</SubTitle>
              <Content>https://min-veloper.tistory.com/</Content>
            </Wrap>

            <Title>Skill.</Title>
          </FlexCol>
        </FlexRow>
        <p></p>

        <Description>
          <Strong>안녕하세요 🙇🏻‍♀️ 2년차 프론트엔드 개발자 윤민지입니다.</Strong>
          {`

저는 약 1년 8개월동안 스타트업에서 React-Native로 프론트엔드 개발을 담당하였으며 백엔드 개발자, 디자이너, PM 등 다양한 분야의 동료분들과 협업한 경험이 있습니다.
`}
          <Title>🙋🏻‍♀️ 저는 이런 사람입니다.</Title>
          {`1️⃣ 주변 사람들에게 긍정적 영향을 주는 일이 동기부여가 돼요.
2️⃣ 해결이 어려운 문제에 대한 집념이 있어요.
3️⃣ 서비스의 가치를 이해하고 개발하며 가치를 높이기 위해 노력해요.
4️⃣ 문제가 생기면 책임을 따지기보다 그 상황 안에서 할 수 있는 방안을 찾아요.
5️⃣ 목표 달성도 중요하지만 만들어나가는 과정에서 재미와 보람을 느껴요.
6️⃣ 새로 알게된 것은 기록하고 지나간 것은 회고해요.
7️⃣ 미스 커뮤니케이션을 줄이기 위해 더블체크하려고 노력해요.
8️⃣ 디자인 시안을 꼼꼼하게 확인하여 오차 없이 개발하는 것을 좋아해요.
          `}
          <Link to={'/review'}>
            <Title>🤔 같이 일한 동료들은 저를 이렇게 생각해요. (Click)</Title>
          </Link>
        </Description>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 3rem;
`

const Name = styled.div`
  display: flex;
  padding: 0 1rem;
  border-left: 1rem solid #bdb1a6;
  margin-bottom: 5rem;
`

const NameText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`

const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  background-color: black;
  margin-right: 10rem;
  object-fit: contain;
`
const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  color: black;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
`

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  width: 8rem;
`

const Content = styled.span`
  font-size: 1.2rem;
  color: #979797;
`

const Wrap = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const Description = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  white-space: pre-wrap;
  line-height: 1.7;
  color: #333333;
`

const Strong = styled.strong`
  font-size: 1.5rem;
`

export default Profile
