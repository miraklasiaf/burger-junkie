import styled from '@emotion/styled'

export const BreadTop = styled.div`
  height: 25%;
  width: 65%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`

export const Seed1 = styled.div`
  & {
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 30%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #c9c9c9;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`

export const Seed2 = styled.div`
  &{
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9c9c9;
  }
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`

export const BreadBottom = styled.div`
  height: 17%;
  width: 65%;
  background: linear-gradient(#F08E4A, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`

export const Meat = styled.div`
  width: 65%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 1% auto;
  border-radius: 15px;
`

export const Salad = styled.div`
  width: 70%;
  height: 7%;
  margin: 1% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`

export const Cheese = styled.div`
  width: 75%;
  height: 4.5%;
  margin: 1% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`

export const Bacon = styled.div`
  width: 65%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 1% auto;
`