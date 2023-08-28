import { styled } from 'styled-components'
import review from '../assets/review.png'

const ReviewPage = () => {
  return (
    <>
      <Text>
        🗣️ 재직 당시 진행하였던 익명 동료 리뷰를 가감없이 첨부하였습니다.
      </Text>
      <Image src={review} />
    </>
  )
}

const Text = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 4rem 0;
  color: #333333;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

export default ReviewPage
