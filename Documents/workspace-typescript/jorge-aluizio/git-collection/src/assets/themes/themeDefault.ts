import { css } from 'styled-components';
import { TypeBackgroundImgDefault } from './functions/backgroundImgDefault';
import {
  TypeBorderPropsDefault,
  TypeBorderRadiusPropsDefault,
} from './functions/borderDefault';
import {
  colorDefault,
  TypeVariant,
  VariantObjDefault,
} from './functions/colorDefault';
import { TypeEffectPropsDefault } from './functions/effectDefaults';
import { TypeFlexDefaultProps } from './functions/flexDefault';
import { TypeFontDefault } from './functions/fontDefault';
import { TypeGridDefault } from './functions/gridDefault';
import { TypeHeightPropsDefault } from './functions/heightDefault';
import { TypeMarginDefaultProps } from './functions/marginDefault';
import { TypePaddingDefaultProps } from './functions/paddingDefault';
import { TypeTextDefault } from './functions/textDefault';
import { TypeUtilsPropsDefault } from './functions/utilsDefault';
import { TypeWidthPropsDefault } from './functions/widthDefault';

export const ThemeDefault = {
  title: 'theme-proxul',
  colorDefault: ({
    activeColorDefalut,
    backgroundColorDefalut,
    borderColorDefalut,
    colorDefalut,
    disabledColorDefalut,
    focusColorDefalut,
    hoverColorDefalut,
    iconColorDefalut,
    outlineColorDefalut,
    placeholderColorDefalut,
    hasErrorDefalut,
    buttomColorDefalut,
    inputColorDefalut,
    linkColorDefalut,
  }: TypeVariant) => css`
    ${
      activeColorDefalut &&
      css`
      background-color: ${
        VariantObjDefault[activeColorDefalut.background.index][
          activeColorDefalut.background.value
        ]
      };
      color: ${
        VariantObjDefault[activeColorDefalut.color.index][
          activeColorDefalut.color.value
        ]
      };
    `
    };
    ${
      backgroundColorDefalut &&
      css`
    background-color: ${
      VariantObjDefault[backgroundColorDefalut.index][
        backgroundColorDefalut.value
      ]
    };

    `
    };
    ${
      buttomColorDefalut &&
      css`
      :hover {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      :disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      :not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
      }
    `
    };
    ${
      borderColorDefalut &&
      css`
        /* border: 1px solid red !important; */
        border-color: ${
          VariantObjDefault[borderColorDefalut.color.index][
            borderColorDefalut.color.value
          ]
        };
        `
    };
    ${
      hasErrorDefalut &&
      css`
        /* border: 1px solid red; */
        border-color: ${
          VariantObjDefault[hasErrorDefalut.index][hasErrorDefalut.value]
        };
        `
    };

    ${
      colorDefalut &&
      css`
      color: ${VariantObjDefault[colorDefalut.index][colorDefalut?.value]};
    `
    };
    ${
      disabledColorDefalut &&
      css`
       :disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[disabledColorDefalut.background.index][
            disabledColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[disabledColorDefalut.color.index][
            disabledColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      :not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[disabledColorDefalut.background.index][
            disabledColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[disabledColorDefalut.color.index][
            disabledColorDefalut.color.value
          ]
        };
      }
    };
    `
    };
     ${
       focusColorDefalut &&
       css`
        &:focus {
          border-color: ${
            VariantObjDefault[focusColorDefalut.color.index][
              focusColorDefalut.color.value
            ]
          };
        `
     };
    ${
      hoverColorDefalut &&
      css`
        &:hover {
          filter: brightness(0.6);
          background-color: ${
            VariantObjDefault[hoverColorDefalut.background.index][
              hoverColorDefalut.background.value
            ]
          };
          color: ${
            VariantObjDefault[hoverColorDefalut.color.index][
              hoverColorDefalut.color.value
            ]
          };
        }
      `
    };
      ${
        iconColorDefalut &&
        css`
        & svg {
          background-color: ${
            VariantObjDefault[iconColorDefalut.background.index][
              iconColorDefalut.background.value
            ]
          };
          color: ${
            VariantObjDefault[iconColorDefalut.color.index][
              iconColorDefalut.color.value
            ]
          };
        }
      `
      };
    ${
      outlineColorDefalut &&
      css`
      &:focus {
        outline-color: ${
          VariantObjDefault[outlineColorDefalut.color.index][
            outlineColorDefalut.color.value
          ]
        };
      `
    }
    ${
      placeholderColorDefalut &&
      css`
      &::placeholder {
        background-color: ${
          VariantObjDefault[placeholderColorDefalut.background.index][
            placeholderColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[placeholderColorDefalut.color.index][
            placeholderColorDefalut.color.value
          ]
        };
      `
    };
    ${
      inputColorDefalut &&
      css`
      background-color: ${
        VariantObjDefault[inputColorDefalut.background.index][
          inputColorDefalut.background.value
        ]
      };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
      input:hover {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
       }
      input:disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      input:not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
      }
    `
    };
    ${
      linkColorDefalut &&
      css`
      a {
        background-color: ${
          VariantObjDefault[linkColorDefalut.background.index][
            linkColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[linkColorDefalut.color.index][
            linkColorDefalut.color.value
          ]
        };
        &:hover {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[linkColorDefalut.background.index][
            linkColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[linkColorDefalut.color.index][
            linkColorDefalut.color.value
          ]
        };
       }
       &:disabled {
         filter: brightness(0.9);
         background-color: ${
           VariantObjDefault[linkColorDefalut.background.index][
             linkColorDefalut.background.value
           ]
         };
         color: ${
           VariantObjDefault[linkColorDefalut.color.index][
             linkColorDefalut.color.value
           ]
         };
         cursor: not-allowed;
         opacity: 0.7;
        }
       &:not(:disabled):hover {
         /* opacity: 1; */
         filter: brightness(0.9);
         background-color: ${
           VariantObjDefault[linkColorDefalut.background.index][
             linkColorDefalut.background.value
           ]
         };
         color: ${
           VariantObjDefault[linkColorDefalut.color.index][
             linkColorDefalut.color.value
           ]
         };
       }
      }

    `
    };
  `,
  effectDefault: ({ effectDefault }: TypeEffectPropsDefault) => css`
  ${
    effectDefault &&
    css`
      transition: ${effectDefault.transitionProperty}${
      effectDefault.transitionDuration
    }${effectDefault.secondsDuration}${effectDefault.transitionTimingFunction}${
      effectDefault.transitionDuration
    }${effectDefault.secondsDelay};
      &:hover {
        transform: translateX(${effectDefault.translateValueX}${
      effectDefault.transformUnit
    });
        transform: translateY(${effectDefault.translateValueY}${
      effectDefault.transformUnit
    });
        transform: rotate(${effectDefault.rotateDefault}deg);
        transform-origin: ${effectDefault.transformOrigin};
        ${
          effectDefault.colorDefault?.backgroundColorDefalut &&
          css`
        background-color: ${
          VariantObjDefault[
            effectDefault.colorDefault.backgroundColorDefalut.index
          ][effectDefault.colorDefault.backgroundColorDefalut.value]
        };
        `
        }
        ${
          effectDefault.colorDefault?.colorDefalut &&
          css`
        color: ${
          VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
            effectDefault.colorDefault.colorDefalut.value
          ]
        };
        `
        }
      };
      &:hover::after {
        transform: translateX(${effectDefault.translateValueX}${
      effectDefault.transformUnit
    });
        transform: translateY(${effectDefault.translateValueY}${
      effectDefault.transformUnit
    });
        transform: rotate(${effectDefault.rotateDefault}deg);
        transform-origin: ${effectDefault.transformOrigin};
        ${
          effectDefault.colorDefault?.backgroundColorDefalut &&
          css`
        background-color: ${
          VariantObjDefault[
            effectDefault.colorDefault.backgroundColorDefalut.index
          ][effectDefault.colorDefault.backgroundColorDefalut.value]
        };
        `
        }
        ${
          effectDefault.colorDefault?.colorDefalut &&
          css`
        color: ${
          VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
            effectDefault.colorDefault.colorDefalut.value
          ]
        };
        `
        }
      };
      &:hover::before {
        background-color: red;
        transform: translateX(${effectDefault.translateValueX}${
      effectDefault.transformUnit
    });
        transform: translateY(${effectDefault.translateValueY}${
      effectDefault.transformUnit
    });
        transform: rotate(${effectDefault.rotateDefault}deg);
        transform-origin: ${effectDefault.transformOrigin};
        ${
          effectDefault.colorDefault?.backgroundColorDefalut &&
          css`
        background-color: ${
          VariantObjDefault[
            effectDefault.colorDefault.backgroundColorDefalut.index
          ][effectDefault.colorDefault.backgroundColorDefalut.value]
        };
        `
        }
        ${
          effectDefault.colorDefault?.colorDefalut &&
          css`
        color: ${
          VariantObjDefault[effectDefault.colorDefault.colorDefalut.index][
            effectDefault.colorDefault.colorDefalut.value
          ]
        };
        `
        }
      };
    `
  };
`,
  paddingDefault: ({
    paddingStaticDefault,
    paddingDynamicDefault,
    paddingBottomStaticDefault,
    paddingLeftStaticDefault,
    paddingRightStaticDefault,
    paddingTopStaticDefault,
    paddingXStaticDefault,
    paddingYStaticDefault,
  }: TypePaddingDefaultProps) => css`
    ${
      paddingStaticDefault &&
      css`
      padding: ${paddingStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingTopStaticDefault &&
      css`
      padding-top: ${paddingTopStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingRightStaticDefault &&
      css`
      padding-right: ${paddingRightStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingLeftStaticDefault &&
      css`
      padding-left: ${paddingLeftStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingBottomStaticDefault &&
      css`
      padding-bottom: ${paddingBottomStaticDefault.vstatic}rem;
    `
    };
    ${
      paddingXStaticDefault &&
      css`
      padding-right: calc(10 * ${paddingXStaticDefault.vstatic}${paddingXStaticDefault.unit});
      padding-left: calc(10 * ${paddingXStaticDefault.vstatic}${paddingXStaticDefault.unit});
    `
    };
    ${
      paddingYStaticDefault &&
      css`
      padding-top: calc(10 * ${paddingYStaticDefault.vstatic}${paddingYStaticDefault.unit});
      padding-bottom: calc(10 * ${paddingYStaticDefault.vstatic}${paddingYStaticDefault.unit});
    `
    };
    ${
      paddingDynamicDefault &&
      css`
      padding: calc(${paddingDynamicDefault.vstatic}rem + ${paddingDynamicDefault.vdynamic}vw);
    `
    };
  `,
  marginDefault: ({
    marginStaticDefault,
    marginDynamicDefault,
    marginBottomStaticDefault,
    marginLeftStaticDefault,
    marginRightStaticDefault,
    marginTopStaticDefault,
    marginXStaticDefault,
    marginYStaticDefault,
  }: TypeMarginDefaultProps) => css`
    ${
      marginStaticDefault &&
      css`
      margin: ${marginStaticDefault.vstatic}rem;
    `
    };
    ${
      marginTopStaticDefault &&
      css`
      margin-top: ${marginTopStaticDefault.vstatic}rem;
    `
    };
    ${
      marginRightStaticDefault &&
      css`
      margin-right: ${marginRightStaticDefault.vstatic}rem;
    `
    };
    ${
      marginLeftStaticDefault &&
      css`
      margin-left: ${marginLeftStaticDefault.vstatic}rem;
    `
    };
    ${
      marginBottomStaticDefault &&
      css`
      margin-bottom: ${marginBottomStaticDefault.vstatic}rem;
    `
    };
    ${
      marginXStaticDefault &&
      css`
      margin-right: ${marginXStaticDefault.vstatic}rem;
      margin-left: ${marginXStaticDefault.vstatic}rem;
    `
    };
    ${
      marginYStaticDefault &&
      css`
      margin-top: ${marginYStaticDefault.vstatic}rem;
      margin-bottom: ${marginYStaticDefault.vstatic}rem;
    `
    };
    ${
      marginDynamicDefault &&
      css`
      margin: calc(${marginDynamicDefault.vstatic}rem + ${marginDynamicDefault.vdynamic}vw);
    `
    };
  `,
  textDefault: ({
    textTransform,
    textAlign,
    textLineThrough,
  }: TypeTextDefault) => css`
    ${
      textTransform &&
      css`
      text-transform: ${textTransform};
    `
    };
    ${
      textAlign &&
      css`
      text-align: ${textAlign};
    `
    };
    ${
      textLineThrough &&
      css`
      text-decoration: ${textLineThrough};
    `
    }

  `,
  fontDefault: ({
    fontFamily,
    value,
    unit,
    fontSizeStatic,
    fontSizeDynamic,
    fontStyle,
    fontLineHeight,
    fontWeigh,
    fontSizeIcon,
  }: TypeFontDefault) => css`
    ${
      fontFamily &&
      css`
      font-family: ${fontFamily};
    `
    };
    ${
      fontSizeStatic &&
      css`
      font-size: calc(10 * ${value}${unit});
    `
    };
    ${
      fontSizeIcon?.value &&
      css`
      font-size: calc(10 * ${fontSizeIcon.value}${(fontSizeIcon.unit = 'rem')});
    `
    };
    ${
      fontSizeDynamic &&
      css`
      font-size: calc(10 * ${value}${(unit = 'vw')});
    `
    };
     ${
       fontStyle &&
       css`
      font-style: ${fontStyle};
    `
     };
     ${
       fontLineHeight &&
       css`
      line-height: ${fontLineHeight};
    `
     };
     ${
       fontWeigh &&
       css`
      font-weight: ${fontWeigh};
    `
     };
  `,
  utilsDefault: ({
    boxShadowDefault,
    displayDefault,
    overflowDefault,
    positionDefault,
    visibilityDefault,
    zIndexDefault,
  }: TypeUtilsPropsDefault) =>
    css`
    ${
      zIndexDefault &&
      css`
      z-index: ${zIndexDefault};
    `
    };
    ${
      boxShadowDefault &&
      css`
      box-shadow: ${boxShadowDefault.offsetX}px ${boxShadowDefault.offsetY}px ${
        boxShadowDefault.blurRadius
      }px ${boxShadowDefault.spreadRadius}px
        ${
          boxShadowDefault.colorDefault?.colorDefalut &&
          VariantObjDefault[boxShadowDefault.colorDefault.colorDefalut?.index][
            boxShadowDefault.colorDefault.colorDefalut?.value
          ]
        };
    `
    };
    ${
      positionDefault &&
      css`
      position: ${positionDefault};
    `
    };
    ${
      visibilityDefault &&
      css`
      visibility: ${visibilityDefault};
      display: none;
      display: flex;
    `
    };
    ${
      overflowDefault &&
      css`
      overflow: ${overflowDefault};
    `
    };
    ${
      displayDefault &&
      css`
      display: ${displayDefault};
    `
    };
  `,
  widthDefault: ({
    widthDefault,
    maxWidthDefault,
    minWidthDefault,
  }: TypeWidthPropsDefault) => css`
  ${
    widthDefault &&
    css`
  width: calc(10 * ${widthDefault.value}${widthDefault.unit});
  `
  }
  ${
    maxWidthDefault &&
    css`
  max-width: calc(10 * ${maxWidthDefault.value}${maxWidthDefault.unit});
  `
  }
  ${
    minWidthDefault &&
    css`
  min-width: calc(10 * ${minWidthDefault.value}${minWidthDefault.unit});
  `
  }
  `,
  heightDefault: ({
    heightDefault,
    maxHeightDefault,
    minHeightDefault,
  }: TypeHeightPropsDefault) => css`
  ${
    heightDefault &&
    css`
  height: calc(10 * ${heightDefault.value}${heightDefault.unit});
  `
  }
  ${
    maxHeightDefault &&
    css`
  max-height: calc(10 * ${maxHeightDefault.value}${maxHeightDefault.unit});
  `
  }
  ${
    minHeightDefault &&
    css`
  min-height: calc(10 * ${minHeightDefault.value}${minHeightDefault.unit});
  `
  }
  `,
  backgroundImgDefault: ({
    position,
    backgroundAttachment,
    zIndex,
    top,
    bottom,
    left,
    right,
    width,
    height,
    defaultColor,
    url,
    translate,
    clipPath,
    backgroundSize,
    backgroundPosition,
  }: TypeBackgroundImgDefault) => css`

      ${position && css`position: ${position};`};
      ${zIndex && css`z-index: ${zIndex};`};
      ${top && css`top: calc(10 * ${top}%);`};
      ${bottom && css`bottom: calc(10 * ${bottom}%);`};
      ${left && css`left: calc(10 * ${left}%);`};
      ${right && css`right: calc(10 * ${right}%);`};
      ${width && css`width: calc(10 * ${width}%);`};
      ${height && css`height: calc(10 * ${height}%);`};
      ${url && css`background-image: url(${url});`};
      ${
        defaultColor?.backgroundColorDefalut &&
        css`
      background-color: ${
        VariantObjDefault[defaultColor.backgroundColorDefalut.index][
          defaultColor.backgroundColorDefalut.value
        ]
      };
      `
      }
      ${
        backgroundAttachment &&
        css`background-attachment: ${backgroundAttachment};`
      };
      ${backgroundSize && css`background-size: ${backgroundSize};`};
      ${backgroundPosition && css`background-position: ${backgroundPosition};`};

      background-repeat: no-repeat;


      ${
        clipPath &&
        css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
      `
      }
      ${
        translate &&
        css`
      transform: translateX(${translate}0);
      transform: translateX(${translate}0);

      `
      };
  `,
  borderDefault: {
    borderDefault: ({
      borderDefault,
      borderTopDefault,
      borderRightDefault,
      borderLeftDefault,
      borderBottomDefault,
    }: TypeBorderPropsDefault) => css`
      ${
        borderDefault &&
        css`
      /* border: 2px solid red; */
    border: ${borderDefault.width}${borderDefault.unit} ${
          borderDefault.style
        } ${
          borderDefault.colorDefault &&
          colorDefault.colorDefault(borderDefault.colorDefault)
        };

    `
      };
      ${
        borderTopDefault &&
        css`
      border-top: ${borderTopDefault.width}${borderTopDefault.unit} ${borderTopDefault.style};

      `
      };
      ${
        borderRightDefault &&
        css`
      border-right: ${borderRightDefault.width}${borderRightDefault.unit} ${borderRightDefault.style};

      `
      };
      ${
        borderLeftDefault &&
        css`
      border-left: ${borderLeftDefault.width}${borderLeftDefault.unit} ${borderLeftDefault.style};

      `
      };
      ${
        borderBottomDefault &&
        css`
      border-bottom: ${borderBottomDefault.width}${borderBottomDefault.unit} ${borderBottomDefault.style};

      `
      };
    `,
  },
  borderRadiusDefault: {
    borderRadiusDefault: ({
      borderRadiusDefault,
      borderTopRightRadiusDefault,
      borderTopLeftRadiusDefault,
      borderBottomRightRadiusDefault,
      borderBottomLeftRadiusDefault,
    }: TypeBorderRadiusPropsDefault) => css`
      ${
        borderRadiusDefault &&
        css`
      border-radius: ${borderRadiusDefault.width}${borderRadiusDefault.unit} ${borderRadiusDefault.style};

      `
      };
      ${
        borderTopRightRadiusDefault &&
        css`
      border-top-right-radius: ${borderTopRightRadiusDefault.width}${borderTopRightRadiusDefault.unit} ${borderTopRightRadiusDefault.style};

      `
      };
      ${
        borderTopLeftRadiusDefault &&
        css`
     border-top-left-radius: ${borderTopLeftRadiusDefault.width}${borderTopLeftRadiusDefault.unit} ${borderTopLeftRadiusDefault.style};

      `
      };
      ${
        borderBottomRightRadiusDefault &&
        css`
      border-bottom-right-radius: ${borderBottomRightRadiusDefault.width}${borderBottomRightRadiusDefault.unit} ${borderBottomRightRadiusDefault.style};

      `
      };
      ${
        borderBottomLeftRadiusDefault &&
        css`
      border-bottom-left-radius: ${borderBottomLeftRadiusDefault.width}${borderBottomLeftRadiusDefault.unit} ${borderBottomLeftRadiusDefault.style};

      `
      };
    `,
  },
  flexDefault: ({
    flexDefault,
    flexGapDefault,
    flexAlignItemsDefault,
    flexAlignSelfDefault,
    flexBasisDefault,
    flexDirectionDefault,
    flexGrowDefault,
    flexJustifyContentDefault,
    flexWrapDefault,
  }: TypeFlexDefaultProps) => css`
    ${
      flexDefault &&
      css`
      display: ${flexDefault};
    `
    };
    ${
      flexGapDefault &&
      css`
      gap: ${flexGapDefault.row}${flexGapDefault.unit} ${flexGapDefault.column}${flexGapDefault.unit};
    `
    };
    ${
      flexAlignItemsDefault &&
      css`
      align-items: ${flexAlignItemsDefault};
    `
    };
    ${
      flexAlignSelfDefault &&
      css`
      align-self: ${flexAlignSelfDefault};
    `
    };
    ${
      flexBasisDefault &&
      css`
      flex-basis: calc(10 * ${flexBasisDefault}%);
    `
    };
    ${
      flexDirectionDefault &&
      css`
      flex-direction: ${flexDirectionDefault};
    `
    };
    ${
      flexGrowDefault &&
      css`
      flex-grow: ${flexGrowDefault};
    `
    };
    ${
      flexJustifyContentDefault &&
      css`
      justify-content: ${flexJustifyContentDefault};
    `
    };
    ${
      flexWrapDefault &&
      css`
      flex-wrap: ${flexWrapDefault};
    `
    };
   `,
  gridDefault: ({
    gridDefault,
    gridTemplateColumnsDefault,
    gridColumnDefault,
    gridRowDefault,
    gridTemplateColumnsStaticDefault,
    gridTemplateRowsDefault,
    overallDefault,
  }: TypeGridDefault) =>
    css`
      ${
        gridDefault &&
        css`
        display: ${gridDefault};
      `
      };
      ${
        gridTemplateColumnsDefault &&
        css`
      display: grid;
      grid-template-columns:
      [container-start] repeat(${gridTemplateColumnsDefault.repeatColumns}, minmax(min-content, 1fr))
      [container-end];
      `
      };
      ${
        gridColumnDefault &&
        css`
      ${
        gridColumnDefault.span === 'span' &&
        css`
      grid-column: ${gridColumnDefault.start} / ${gridColumnDefault.span} ${gridColumnDefault.end};
    `
      }
    ${
      gridColumnDefault.span === '' &&
      css`
      grid-column: ${gridColumnDefault.start} / ${gridColumnDefault.end};
    `
    }
      `
      };
      ${
        gridRowDefault &&
        css`
      ${
        gridRowDefault.span === 'span' &&
        css`
      grid-row: ${gridRowDefault.start} / ${gridRowDefault.span} ${gridRowDefault.end};

    `
      }
    ${
      gridRowDefault.span === '' &&
      css`
      grid-row: ${gridRowDefault.start} / ${gridRowDefault.end};
    `
    }
      `
      };
      ${
        gridTemplateColumnsStaticDefault &&
        css`
      grid-template-columns: repeat(
      ${gridTemplateColumnsStaticDefault.repeatColumns},
      minmax(${gridTemplateColumnsStaticDefault.minMax} 0rem, 1fr)
    );
      `
      };
      ${gridTemplateRowsDefault && css``};
      ${
        overallDefault &&
        css`
      grid-column: container-start / container-end;
      `
      };
    `,
};
