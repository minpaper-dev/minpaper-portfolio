import { styled } from 'styled-components'
import { Divider } from './MainPage'

const VueShop = () => {
  return (
    <Container>
      <Name>
        <NameText>🛍️ Vue Shop</NameText>
      </Name>
      <FlexJustiBetween>
        {/* <ProjectImage src="https://user-images.githubusercontent.com/137516352/263533101-f4a1f21b-96ee-40ad-a3d1-37f7ce953d8b.jpeg" />
        <ProjectImage src="https://user-images.githubusercontent.com/137516352/263533374-f244c1f3-5992-4112-baa8-650f332d7f78.jpeg" />
        <ProjectImage src="https://user-images.githubusercontent.com/137516352/263533438-53d306f6-e5ba-4c32-9d93-ec085e34df1d.jpeg" /> */}
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

      <Link
        href="https://vue-shop-py7p01lec-minpaper-dev.vercel.app/"
        //    target="_blank"
      >
        <Title>🔗 사이트 바로가기 </Title>
        <Flex>
          <SubTitle>
            https://vue-shop-py7p01lec-minpaper-dev.vercel.app/
          </SubTitle>
        </Flex>
      </Link>

      <Link
        href="https://github.com/minpaper-dev/vue-shop"
        //    target="_blank"
      >
        <TitleText>🐱 Github </TitleText>
        <Flex>
          <SubTitle>https://github.com/minpaper-dev/vue-shop</SubTitle>
        </Flex>
      </Link>

      <Divider />

      <Title>🛠️ 기술 스택 </Title>
      <FlexAlignCenter>
        <FlexCol>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUxeMb///8mc8QWbsOIqtmXtd7c5vPT3/AQbMLx9foqdcXZ4/IdcMMweccAasEicsS3y+dBgMl0ntTC0+t7otb4+v3q8Phql9K9z+lgkdCgu+BZjc6sw+Q7fchwm9ORsNxMhstSic2eueABkwlWAAAFwUlEQVR4nO2da3ejKhRAERIlhPp+xLw7//9HXmzvTDttUQwc0MzZq12dL6J7kPcBSTSQlwV5Nooyf3Mj6reSUoR+HgCElNW74TEN/SxgpMfBsHpeQaVYKUMZ+ilAkRHJn9wwJ+UzVjIfiJI8XzPxN8/uhyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDIPwNzjOFtBaVSMvl+jfpHllEKc2RnFrulfZm8JZWMi1O9PR+qZK8u2e+TqsqPt7p/4Yxlrj1l5JhxQyrTS33eN7qr2+p4FTyjKzUUTNaH3XQSbV5L5iwr/Rlm/FqZJ5NsXOWjL8NMbg1y7zOxo9OQ/RhSvp2d0N60Wl6CIb/OzL+VGYpsRvlbo6E8aduGUVZjyOoHE1qLIbs9mtBKDOXm4YTWYUi7xxNahaG4WCS0CsM0tkhoDYZyfkfmE2swJFYJrcBQ5lYJuTKk+0RP+/O945FL4g9DMaGwq451f7+QS3HqNsfqa5l1ZUiknlTTWtfpyEV/Es6OY3rttuAyo+JtoCsEzSTjp+3nDqwzwxGopqYwG5ymmjdgIO7SH+ZjBGW8y3/3YhdvKAq94DbVzlEIyev9Ogx1Fyu68dE75fdqDYZSOyisJ6cnBLsnyzdkumKYmHxQTKRl4uGrVXaGuizszeYJqY/PclkZ6jrdzZK+CWdjKE4aw9hD8TLGylA3MvRRgRhjZVhqDFsO/+DG2BhSneGiPl1olYdXneEtg39yU6wMe51hs6CCCNJaREv6hihMix9F58UowvTaFPlSFIF63oo9WUZ1Yzd6Gp/O3+iHiB4BGwEPxK/uluofxm4Wg48UxDeqIrijnWE2PR9cvfKwjnaGJJs0VFVOx13GzszF0tBsRri9sXCfgbc0nJwS/s05WIG0NTRfmUm6NMjLams4Z3WtrUM4WhvOWiHdbfw7WhvOXOVuS9+Nh73h3EgF1dEB9PmOA8PZ0SYH6fNVdWFI2Mx4k+bqMRudGBI5N+Ik91ca3RgSWkz1wb/QEl+KjgyJ4DNX9Ju7p8LoylAVxn5mgOnJj6I7QyLS0VX9UIoODVWFIw6zFC8+yqJTQ+V4meO489FoODYkgpGzuWLlYQnHtaEiYxvjpuMKXxQBDFWi6ckwsH0Hn4kghkPIDDkaBbffwDMRyJAMO4RMXtYd+OQ/nOEQFtTtJxVr6EyENBw6Af3UJEcC3WLAGg6O9UR5hF4RhzZUd2DjDWQJ/JrCGw598rFsPANnog9DQslIrQod2+bFUPXl9IrQjb4fQyKo/kUFrkw9GRKqjUyJ3N7o+509GRKe6AzvsKNEb4b6AKrXJzHU72s5Ldlwzn8D101ULTkP6XbGyEDbYBQPP7wRVoa8ScyXIFJdewEcWGRnuIua3rA508feLLk9fCtaOTMLTNFNpraLN4ya2iS6i+qyEHqA6MAwiuJ+cvE61Tb454WXw/+Jr+nYgwq9YHQFnvh2ZKiGCL8I05wCJdhpZPS06DH+l0Z8P+yo/GpJs7TXZyD88NCp4ZCT1a2XnDGZSfXDWErKfHzRbdlzbZqOWBMnh/x8zg9VPDkrDB/VD2E4h1/godKBDT1szAhsCF4KQxsa7TW1JKhh42MhP6gh8Nj3nZCGVy9bTgIaln52KYYz7DxtGgpl2F58RWAGMjyvJDZxbHfeGPv7auJLZ0TOfBB3Xve00Vuz+4HGsDtF09O8ULao6n3v2aP8R4zrASF5l5vmZHKj4bYHWSAyftnkU0EX8bmUZhOPy0RIxu/18ZC03wa9u7g61nfOvEbowzCcdaVE+cu978paUXangqbKLQM6qTwYQgg6oP4+mRmCIAiCIMhMgINQglOQ8rk7fKIk+ZKORHOPzMmiDn1zj4zIks4Lc09aKcPo+LyKw2bU4Sj0Sq5yVmcKId+OEHs/7D0vn6/RKMr3TeH/AU/TVm5Z0N+aAAAAAElFTkSuQmCC" />
          TypeScript
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Vue
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9PwI01SV4xRlxMXG1hxZZ9h5OK0rBIvorr7O4sQljt+PK74c9IpYFRx5A1R10zPVo5u4I5XGUgOlJBvYa6vsQRMUyLlJ5FVmhRYHEHLUlGoH9ExIpOwo1xx58qNlUcSlVzwZ6X1rcgBt2gAAAEzklEQVR4nO3ax27kMBBF0ZY945xzHIf//8hpdZTEWFKFJ6DutmwSxAEXRGux8DzP8zzP8zzP8zzP8zzP8zzPm0HPL3+IvTLs+krd9OV59F6nb4fE7h8nH/Dxnrrp2+n43Y7ODmgdHkw+4XINWmdHE3Y7fSLudjAZ8fGeuuXTBEILRF1CA0RtQn1EbUJ1RH1CbUR9QmVEC0JdRAtCVUQbQk1EG0JFRCtCPUQrwvaJQdx5HCKdcMqjop8Ooh2h0k20u4VtGoiWhCqItoQaiLaECojWhPKI1oTiiPaE0oj2hMKICISyiAiEoogYhJKIGISCiCiEcogohGKIOIRSiDiEQo99y6d9GBnx5r245vsNcU1BQvpNvL77uCgsefFxd01bVO4WthERby4/m8KKzeclDVGUkIp4fXfVPOQRLx6aKxqiLCERsSVs8ojLOQ1RmJCG2BI2ecQlYUNDlCYkIa4Js4irOQVRnJCCuCbMIq4ISYjyhATELWEGcTOvR1QgrEfcEmYQN4QERA3CasQ9YRJxN69FVCGsRdwTJhF3hNWIOoSViF3CBGJnXoeoRFiH2CVMIHYIKxG1CKsQ+4RRxN68BlGNsAaxTxhF7BFWIeoRViAOCSOIg3kZUZGw/NgfEkYQB4QViJJP+7ACYkgYIAbzEqIqYekmhoQBYkBYRNS8hW1ZxBjhADEyzyMqE+YRY4QDxAhhAVGbMIsYJ+whRuc5RHXCHGKcsIcYJcwi6hNmEFOEHcTEPI1oQJhGTBF2EBOEGUQLwiRimnCHmJynEE0IU4hpwh1ikjCJaEOYQMwRbhAz8ziiEWEcMUe4QcwQJhCtCKOIecIVYnYeQzQjjCHmCVeIWcIooh1hBLFEuEQszENEQ8IQsUTYNCf/Tgp/ESBaEgaIZcKmdMAA0ZRw+NgvE9Y0QNR92of1ECsIK+ojGhP2byIP4QDR9ha2dRB5CPuI5oRdRC7CHqI9YQeRi7CLCEC4R+Qj7CAiEO4Q+Qj3iBCEW0ROwh0iBuEGkZNwiwhCuEbkJdwgohCuEHkJ14gwhC0iN+EKEYdwifjFTNgifuEQLhG/uQmXiN9AhIvFDzfhEvHH+lDdzm/ZD9g0t+fWx+p0XHy5j+jk2PpY+0QIoRBFCJEQhQiBEIUIcRDFCGEQxQhREAUJQRAFCTEQRQkhEEUJERCFCQEQhQntEcUJzRHphPR/MEWkE5Z/Aw4yRRxxC0u/44dZItIJy99iRDJEHENY+J4mlh3iKMLCN1HRzBDHEc4IcSThjBDHEs4GcTThbBDHE84EcQLhTBCnEM4CcRLhLBCnEc4AcSLhDBCnEsIjTiaER5xOCI7IQAiOyEEIjchCCI3IQwiMyEQIjMhFCIvIRgiLyEcIishICIrISQiJyEoIichLCIjITAiIyE0Ih8hOCIfITwiGKEAIhihBCIUoQgiFKEMIhChECIQoRQiDKEYIgyhHCIIoSAiCKEkIgShKCIEoSwiAKEwIgChNaI4oTmiOKE9ojKhAaIyoQWiKqEJoiqhDaIioRGiIqEVohqhGaIaoR2iEqEhohKhJaIKoSmiCqEtogKhMaICoTaiOqE6ojqhPqIxoQKiM+PuX3OQDLhb0TX8ZdvU8z/M8z/M8z/M8z/M8z/M8zxPvP8+nm2iCjK3LAAAAAElFTkSuQmCC" />
          Vuex
        </FlexCol>

        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Vue Query
        </FlexCol>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          tailwind css
        </FlexCol>
      </FlexAlignCenter>
      <FlexAlignCenter>
        <FlexCol>
          <Image src="data:image/png;base64,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" />
          axios
        </FlexCol>

        <FlexCol>
          <Image src="data:image/png;base64,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" />
          Github
        </FlexCol>
      </FlexAlignCenter>

      <Divider />

      <Title>💡 주요 기능 </Title>

      <Title>1. Main </Title>
      <Description>{`- Carousel 구현
- category 별 상품 분류`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/ScentSation/assets/137516352/99fdb0c7-6fd7-433f-97ab-4d6e0d75983c" />
      </FlexAlignCenter>

      <Title>2. 검색</Title>
      <Description>{`- 검색 키워드 자동 완성`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/ScentSation/assets/137516352/b7419acf-b436-45b1-90a3-c29c57967bf9" />
      </FlexAlignCenter>

      <Title>3. 상품 상세 페이지</Title>
      <Description>{`- localStorage를 이용한 장바구니 담기 기능 구현`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/ScentSation/assets/137516352/4c848658-309a-4ac4-9500-8835f1336add" />
      </FlexAlignCenter>

      <Title>4. 장바구니</Title>
      <Description>{`- 상품의 가격, 수량에 따른 전체 가격 계산
- 구매하기 버튼 클릭 시 장바구니 아이템 삭제`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/ScentSation/assets/137516352/42f5ebde-c60e-4175-b48a-8c0932fc2559" />
      </FlexAlignCenter>

      <Title>5. Dark / Light Theme</Title>
      <Description>{`- 전역 관리를 통해 dark / light 테마 변경 가능
`}</Description>
      <FlexAlignCenter>
        <ProjectImage src="https://github.com/minpaper-dev/ScentSation/assets/137516352/68845e0c-0c18-4ed5-a498-3fc44a1ffb3c" />
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
  width: 100%;
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

export default VueShop
