import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import { BoxDefault } from '../../common/BoxDefault';
import { BrandDefault } from '../../common/BrandDefault';
import { ContentDefault } from '../../common/ContentDefault';
import { LinkDefault } from '../../common/LinkDefault';

const HeaderDefault: React.FC<TypeDefault> = ({ ...props }) => {
  const params = useParams();
  return (
    <ContentDefault
      flexDefault={{
        flexDefault: 'flex',
        flexDirectionDefault: 'row',
        flexJustifyContentDefault: 'space-between',
        flexAlignItemsDefault: 'center',
      }}
      as="header"
    >
      <BoxDefault>
        {props.children}
        <BrandDefault />
      </BoxDefault>
      <BoxDefault
        flexDefault={{
          flexDefault: 'flex',
          flexAlignItemsDefault: 'center',
          flexJustifyContentDefault: 'flex-end',
          flexGapDefault: { column: 1, row: 2, unit: 'rem' },
        }}
        heightDefault={{ heightDefault: { value: 1, unit: 'rem' } }}
      >
        {params && (
          <LinkDefault
            fontDefault={{ fontSizeStatic: { value: 0.18, unit: 'rem' } }}
          >
            <FaChevronLeft />
            Voltar
          </LinkDefault>
        )}
      </BoxDefault>
    </ContentDefault>
  );
};

export { HeaderDefault };
