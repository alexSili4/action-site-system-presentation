import { PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { StyledLink } from './PromotionGoBackLink.styled';
import { IProps } from './PromotionGoBackLink.types';
import { FaChevronLeft } from 'react-icons/fa';

const PromotionGoBackLink: FC<IProps> = ({ from }) => {
  const goBackLink = from ? from : PagePaths.root;

  return (
    <StyledLink to={goBackLink}>
      <FaChevronLeft size={theme.iconSizes.goBackLink} />
    </StyledLink>
  );
};

export default PromotionGoBackLink;
