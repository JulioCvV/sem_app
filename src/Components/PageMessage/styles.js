import styled from "styled-components";

export const SummaryPageContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SummaryContainer = styled.div`
  padding: 10px 30px;
  width: 100%;
  max-width: 1000px;
  position: relative;
`;
export const SummaryTitle = styled.div`
  width: 100%;
  margin: 20px 0;
`;
export const SummaryText = styled.div`
  max-height: 120px;
  overflow-y: auto;
`;
export const SummaryResult = styled.div`
  margin: 10px 0;
`;

export const SummaryImage = styled.div`
  background-image: url(${({ url }) => url && url});
  width: 50%;
  height: 100%;
  background-size: 100%;
  background-position: right bottom;
  background-repeat: no-repeat;
`;

export const SummaryAction = styled.div`
  position: absolute;
  bottom: 20px;
  margin-top: 20px;
`;
