import styled from 'styled-components';

const Center = styled.div`
display: flex;
justify-content: center;
allign-item: center;

`;

export const StyledComponents = ()=>{
  return(
    <>
    <Center>
      <div id="box" style={{backgroundColor: 'blue', height: '50px', width: '50px'}} ></div>
    </Center>
    </>
  )
}