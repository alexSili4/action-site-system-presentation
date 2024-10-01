import styled from '@emotion/styled';
import firstBanner from '@/images/promotions/banners/first-banner.jpg';
import secondBanner from '@/images/promotions/banners/second-banner.jpg';
import thirdBanner from '@/images/promotions/banners/third-banner.jpg';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-top: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(8)};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ListItem = styled.li`
  &:nth-child(1) > a > div {
    background-image: url(${firstBanner});
  }

  &:nth-child(2) > a > div {
    background-image: url(${secondBanner});
  }

  &:nth-child(3) > a > div {
    background-image: url(${thirdBanner});
  }
`;

export const Card = styled.div`
  height: 492px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(6)}`};
  background-size: cover;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 485px;
    padding: ${({ theme }) => theme.spacing(14)};
  }
`;
