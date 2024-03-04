import React from 'react';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <ProfileHeader>
        <ProfilePhoto
          loading="lazy"
          srcSet="./image/background.png?width=100 100w, ./image/background.png?width=200 200w ./image/background.png?width=400 400w, ./image/background.png?width=800 800w, ./image/background.png?width=1200 1200w, ./image/background.png?width=1600 1600w, ./image/background.png"
        />
        <BankDetails>
          <Div4>
            <Name>葉大雄</Name>
            <PhoneNumber>0925001002</PhoneNumber>
            <Div7>
              <Div8>
                銀行後五碼 04556
                {/* <MaintenanceImg
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7efd83484435e355443d23c998b90a65c3f4f8958ca9359d6c32bf39882d025c?apiKey=bfc4e1f6ccd94a29849746508f52afcb&"
                /> */}
              </Div8>           
            </Div7>
          </Div4>
        </BankDetails>
      </ProfileHeader>

      <Card>

        <RentSection>
          <Div13>
            <Div14>
              <HouseSvg
                loading="lazy"
                src="./image/house.svg"
              />
              <DateRent>11月房租(第六期)</DateRent>
            </Div14>
            <RentAmount>＄12600</RentAmount>
            <GreyText>請於12/05前繳費</GreyText>
          </Div13>
          <ArrowSvg
            loading="lazy"
            src="./image/arrow.svg"
          />
        </RentSection>

        <MaintenanceCard>
          <ShortCard>
            <HousefixSection>
              <UpperText>
                <MaintenanceImg
                  loading="lazy"
                  src="./image/housefix.svg"
                />
                <Div22>維修</Div22>
              </UpperText>
              <MaintenanceImg
                loading="lazy"
                src="./image/arrow.svg"
              />
            </HousefixSection>
            <NormalText>目前無維修項目</NormalText>
          </ShortCard>

          <ShortCard>
            <ContractSection>
              <UpperText>
                <MaintenanceImg
                  loading="lazy"
                  src="./image/painter.svg"
                />
                <Div27>目前租約</Div27>
              </UpperText>
              <MaintenanceImg
                loading="lazy"
                src="./image/arrow.svg"
              />
            </ContractSection>
            <NormalText>租約狀態</NormalText>
          </ShortCard>
        </MaintenanceCard>



        <MaintenanceCard>
          <ShortCard>
            <CreditScoreSection>
              <UpperText>
                <MaintenanceImg
                  loading="lazy"
                  src="./image/star.svg"
                />
                <Div22>信用評分</Div22>
              </UpperText>
              <MaintenanceImg
                loading="lazy"
                src="./image/arrow.svg"              />
            </CreditScoreSection>
            <Div33>
            <ScoreText>9.8</ScoreText>
            <Div35>優良</Div35>
            </Div33>
          </ShortCard>

          <ShortCard>  
          </ShortCard>
        </MaintenanceCard>

        


      </Card>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--b5, #f4f4f4);
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  white-space: nowrap;
  margin: 0 auto;
  padding: 44px 0;
`;

const ProfileHeader = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 2.1;
  width: 100%;
  padding-top: 50px;
  font-size: 15px;
  color: var(--w100, #fff);
  font-weight: 400;
`;

const ProfilePhoto = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px 0 20px 0;
`;

const BankDetails = styled.div`
  position: relative;
  border-radius: 0px 0px 20px 0px;
  background: linear-gradient(
    86deg,
    rgba(157, 123, 80, 0.5) 11.26%,
    rgba(132, 108, 77, 0.5) 99.6%
  );
  box-shadow: 0px 1px 4px 0px rgba(34, 34, 34, 0.1);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 34px 0;
`;

const Div4 = styled.div`
  display: flex;
  width: 100%;
  padding-left: 29px;
  flex-direction: column;
`;

const Name = styled.div`
  letter-spacing: 0.85px;
  font: 17px PingFang TC, sans-serif;
`;

const PhoneNumber = styled.div`
  font-family: PingFang TC, sans-serif;
`;

const Div7 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Div8 = styled.div`
  font-family: PingFang TC, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;


const Card = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  padding: 0 24px;
`;

const RentSection = styled.div`
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid var(--b10, #e9e9e9);
  background-color: var(--w100, #fff);
  display: flex;
  gap: 20px;
  font-weight: 400;
  padding: 8px 16px;
`;

const Div13 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div14 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  font-size: 15px;
  color: var(--b100, #222);
`;

const HouseSvg = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;
const ArrowSvg = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
`;

const DateRent = styled.div`
  font-family: PingFang TC, sans-serif;
  flex-grow: 1;
`;

const RentAmount = styled.div`
  color: var(--R500, #eb4d3d);
  letter-spacing: 0.85px;
  margin-top: 8px;
  font: 500 17px PingFang TC, sans-serif;
`;

const GreyText = styled.div`
  color: var(--b50, #909090);
  font: 14px PingFang TC, sans-serif;
`;



const MaintenanceCard = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
  gap: 8px;
  font-size: 15px;
  color: var(--b100, #222);
  font-weight: 400;
`;



const HousefixSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

const CreditScoreSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

const ContractSection = styled.div`
  display: flex;
  padding-right: 7px;
  justify-content: space-between;
  gap: 12px;
`;



const MaintenanceImg = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const Div22 = styled.div`
  font-family: PingFang TC, sans-serif;
`;



const NormalText = styled.div`
  font-family: PingFang TC, sans-serif;
  margin-top: 37px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const ShortCard = styled.div`
  border-radius: 5px;
  border: 1px solid var(--b10, #e9e9e9);
  background-color: var(--w100, #fff);
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 8px 16px;
`;



const UpperText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;


const Div27 = styled.div`
  font-family: PingFang TC, sans-serif;
  flex-grow: 1;
`;





const Div33 = styled.div`
  display: flex;
  margin-top: 38px;
  justify-content: space-between;
  gap: 4px;
`;

const ScoreText = styled.div`
  color: var(--G500, #67cc72);
  letter-spacing: 0.85px;
  font: 500 17px PingFang TC, sans-serif;
`;

const Div35 = styled.div`
  color: var(--b100, #222);
  flex-grow: 1;
  flex-basis: auto;
  font: 400 15px PingFang TC, sans-serif;
`;



export default App;