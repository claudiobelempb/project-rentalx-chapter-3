import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ImgBg from '../../assets/images/background.svg';
import { BoxDefault } from '../../components/common/BoxDefault';
import { ContainerDefault } from '../../components/common/ContainerDefault';
import { ContentDefault } from '../../components/common/ContentDefault';
import { ImgDefault } from '../../components/common/ImgDefault';
import { LinkDefault } from '../../components/common/LinkDefault';
import {
  ItenListDefault,
  ListDefault,
} from '../../components/common/ListDefault';
import { TextDefault } from '../../components/common/TextDefault';
import { HeaderDefault } from '../../components/layout/HeaderDefault';
import { api } from '../../services/api';

type TypeParam = {
  name: string;
  login: string;
};

type TypeRepoProps = {
  id: number;
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
};

type TypeIssuesProps = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
};

const RepoPage: React.FC = () => {
  const [repoInfor, setRepoInfo] = useState<TypeRepoProps | null>(() => {
    const storageRepoInfo = localStorage.getItem(
      '@gitcolection:repositoriesinfo',
    );
    if (storageRepoInfo) return JSON.parse(storageRepoInfo);
    return null;
  });

  const [issuesInfor, setIssuesInfor] = useState<TypeIssuesProps[]>([]);

  const params = useParams<TypeParam>();

  useEffect(() => {
    api.get(`repos/${params.login}/${params.name}`).then((response) => {
      // console.log(response.data);
      setRepoInfo(response.data);
    });
    api.get(`repos/${params.login}/${params.name}/issues`).then((response) => {
      // console.log(response.data);
      setIssuesInfor(response.data);
    });
    localStorage.setItem(
      '@gitcolection:repositoriesinfo',
      JSON.stringify(repoInfor),
    );
  }, [params.login, params.name]);

  return (
    <ContainerDefault
      heightDefault={{ heightDefault: { value: 10, unit: 'vh' } }}
      backgroundImgDefault={{
        url: ImgBg,
        backgroundPosition: 'top',
        backgroundSize: 'contain',
        defaultColor: {
          backgroundColorDefalut: { index: 'gray', value: 'v200' },
        },
      }}
    >
      <HeaderDefault />
      {/* <h1>Repositorios Page {`${params.login}/${params.name}`}</h1> */}
      <ContainerDefault
        as="main"
        heightDefault={{ heightDefault: { value: 10, unit: 'vh' } }}
      >
        <ContainerDefault
          as="section"
          marginDefault={{
            marginTopStaticDefault: { vstatic: 10, unit: 'rem' },
          }}
        >
          {repoInfor && (
            <ContentDefault
              flexDefault={{
                flexDirectionDefault: 'row',
                flexAlignItemsDefault: 'center',
                flexGapDefault: { column: 1, row: 2, unit: 'rem' },
              }}
            >
              <BoxDefault
                widthDefault={{
                  maxWidthDefault: { value: 1.2, unit: 'rem' },
                }}
              >
                <ImgDefault
                  src={repoInfor?.owner.avatar_url}
                  alt={repoInfor.owner.login}
                  widthDefault={{ widthDefault: { value: 1.2, unit: 'rem' } }}
                  heightDefault={{
                    heightDefault: { value: 1.2, unit: 'rem' },
                  }}
                  borderRadiusDefault={{
                    borderRadiusDefault: { width: 50, unit: '%' },
                  }}
                />
              </BoxDefault>
              <BoxDefault>
                <TextDefault
                  as="strong"
                  fontDefault={{
                    fontSizeStatic: { value: 0.36, unit: 'rem' },
                  }}
                  colorDefault={{
                    colorDefalut: { index: 'gray', value: 'v700' },
                  }}
                >
                  {repoInfor?.full_name}
                </TextDefault>
                <TextDefault
                  as="p"
                  fontDefault={{
                    fontSizeStatic: { value: 0.16, unit: 'rem' },
                  }}
                  colorDefault={{
                    colorDefalut: { index: 'gray', value: 'v500' },
                  }}
                >
                  {repoInfor?.description}
                </TextDefault>
              </BoxDefault>
            </ContentDefault>
          )}
        </ContainerDefault>
        <ContainerDefault
          as="section"
          marginDefault={{
            marginTopStaticDefault: { vstatic: 10, unit: 'rem' },
          }}
        >
          {repoInfor && (
            <ContentDefault>
              <BoxDefault>
                <ListDefault
                  flexDefault={{
                    flexDefault: 'flex',
                    flexDirectionDefault: 'row',
                  }}
                >
                  <ItenListDefault
                    widthDefault={{ widthDefault: { value: 2.5, unit: 'rem' } }}
                  >
                    <TextDefault
                      as="strong"
                      fontDefault={{
                        fontSizeStatic: { value: 0.36, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v700' },
                      }}
                    >
                      {repoInfor?.stargazers_count}
                    </TextDefault>
                    <TextDefault
                      as="span"
                      fontDefault={{
                        fontSizeStatic: { value: 0.16, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v500' },
                      }}
                    >
                      Stars
                    </TextDefault>
                  </ItenListDefault>
                  <ItenListDefault
                    widthDefault={{ widthDefault: { value: 2.5, unit: 'rem' } }}
                  >
                    <TextDefault
                      as="strong"
                      fontDefault={{
                        fontSizeStatic: { value: 0.36, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v700' },
                      }}
                    >
                      {repoInfor?.forks_count}
                    </TextDefault>
                    <TextDefault
                      as="span"
                      fontDefault={{
                        fontSizeStatic: { value: 0.16, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v500' },
                      }}
                    >
                      Forks
                    </TextDefault>
                  </ItenListDefault>
                  <ItenListDefault
                    widthDefault={{ widthDefault: { value: 2.5, unit: 'rem' } }}
                  >
                    <TextDefault
                      as="strong"
                      fontDefault={{
                        fontSizeStatic: { value: 0.36, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v700' },
                      }}
                    >
                      {repoInfor?.forks_count}
                    </TextDefault>
                    <TextDefault
                      as="span"
                      fontDefault={{
                        fontSizeStatic: { value: 0.16, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v500' },
                      }}
                    >
                      Issues abertas
                    </TextDefault>
                  </ItenListDefault>
                </ListDefault>
              </BoxDefault>
            </ContentDefault>
          )}
        </ContainerDefault>
        <ContainerDefault
          as="section"
          marginDefault={{
            marginTopStaticDefault: { vstatic: 10, unit: 'rem' },
          }}
        >
          <ContentDefault
            flexDefault={{ flexGapDefault: { column: 1, row: 2, unit: 'rem' } }}
          >
            {issuesInfor &&
              issuesInfor.map((issueInfo) => (
                <LinkDefault
                  target="_blank"
                  key={issueInfo.id}
                  href={issueInfo.html_url}
                  effectDefault={{
                    effectDefault: {
                      transitionProperty: 'transform',
                      transitionDuration: 0.2,
                      translateValueX: [0.6],
                      transformUnit: 'rem',
                    },
                  }}
                  colorDefault={{
                    backgroundColorDefalut: {
                      index: 'default',
                      value: 'white',
                    },
                  }}
                >
                  <BoxDefault>
                    <TextDefault
                      as="strong"
                      fontDefault={{
                        fontSizeStatic: { value: 0.2, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v700' },
                      }}
                    >
                      {issueInfo.title}
                    </TextDefault>
                    <TextDefault
                      as="span"
                      fontDefault={{
                        fontSizeStatic: { value: 0.18, unit: 'rem' },
                      }}
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v500' },
                      }}
                    >
                      {issueInfo.user.login}
                    </TextDefault>
                  </BoxDefault>
                  <FaChevronRight />
                </LinkDefault>
              ))}
          </ContentDefault>
        </ContainerDefault>
      </ContainerDefault>
    </ContainerDefault>
  );
};

export default RepoPage;
