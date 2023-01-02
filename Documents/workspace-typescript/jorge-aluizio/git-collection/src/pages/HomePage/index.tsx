import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ImgBg from '../../assets/images/background.svg';
import { AlertDefault } from '../../components/common/AlertDefault';
import { BoxDefault } from '../../components/common/BoxDefault';
import { ButtonDefault } from '../../components/common/ButtonDefault';
import { ContainerDefault } from '../../components/common/ContainerDefault';
import { ContentDefault } from '../../components/common/ContentDefault';
import { FormDefault } from '../../components/common/FormDefault';
import { HeadingDefault } from '../../components/common/HeadingDefault';
import { ImgDefault } from '../../components/common/ImgDefault';
import { InputDefault } from '../../components/common/InputDefault';
import { LinkDefault } from '../../components/common/LinkDefault';
import { ListDefault } from '../../components/common/ListDefault';
import { TextDefault } from '../../components/common/TextDefault';
import { HeaderDefault } from '../../components/layout/HeaderDefault';
import { api } from '../../services/api';

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

const HomePage: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(() => {
    const storegeRepos = localStorage.getItem('@gitcolection:repositories');
    if (storegeRepos) {
      return JSON.parse(storegeRepos);
    }
    return [];
  });
  const [inputRepo, setInputRepo] = useState<string>('');
  const [alertDefault, setAlertDefault] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('@gitcolection:repositories', JSON.stringify(repos));
  }, [repos]);

  function handleInputRepo(event: ChangeEvent<HTMLInputElement>): void {
    setInputRepo(event.target.value);
    // console.log(inputRepo);
  }

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!inputRepo) {
      setAlertDefault('Informe o username/repositório');
      setInputRepo('');
      // setAlertDefault('');
      return;
    }

    const repoExist = repos.findIndex((index) => index.full_name === inputRepo);
    console.log('Repo', repoExist);

    if (repoExist !== -1) {
      setAlertDefault('Repositório já existe!');
      setInputRepo('');
      // setAlertDefault('');
      return;
    }

    try {
      const response = await api.get<GitHubRepo>(`/repos/${inputRepo}`);
      const repository = response.data;
      console.log(repository);
      setRepos([...repos, repository]);
      setInputRepo('');
      setAlertDefault('');
    } catch {
      setAlertDefault('Reposiório não encontrado no Github');
    }
  }

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

      <ContainerDefault
        as="main"
        heightDefault={{ heightDefault: { value: 10, unit: 'vh' } }}
      >
        <ContentDefault>
          <HeadingDefault
            as="h1"
            colorDefault={{
              colorDefalut: { index: 'gray', value: 'v300' },
            }}
            textDefault={{ textTransform: 'none' }}
            widthDefault={{ maxWidthDefault: { value: 4.5, unit: 'vw' } }}
          >
            Catálogo de repositórios do Github
          </HeadingDefault>
        </ContentDefault>

        <ContentDefault>
          <BoxDefault>
            <FormDefault
              onSubmit={handleAddRepo}
              flexDefault={{ flexDefault: 'flex', flexDirectionDefault: 'row' }}
              paddingDefault={{
                paddingYStaticDefault: { vstatic: 0.2, unit: 'rem' },
              }}
            >
              <InputDefault
                hasError={Boolean(alertDefault)}
                type={'text'}
                placeholder="username/repostory_name"
                borderRadiusDefault={{
                  borderTopLeftRadiusDefault: {
                    width: 0.5,
                    unit: 'rem',
                  },
                  borderTopRightRadiusDefault: {
                    width: 0,
                    unit: 'rem',
                  },
                  borderBottomLeftRadiusDefault: {
                    width: 0.5,
                    unit: 'rem',
                  },
                  borderBottomRightRadiusDefault: {
                    width: 0,
                    unit: 'rem',
                  },
                }}
                onChange={handleInputRepo}
              />
              <ButtonDefault
                type="submit"
                title="Buscar"
                colorDefault={{
                  // focusColorDefalut: { color: { index: 'red', value: 'v500' } },
                  buttomColorDefalut: {
                    background: { index: 'green', value: 'v400' },
                    color: { index: 'default', value: 'white' },
                  },
                }}
                borderRadiusDefault={{
                  borderTopRightRadiusDefault: {
                    width: 0.5,
                    unit: 'rem',
                    colorDefault: {
                      borderColorDefalut: {
                        color: { index: 'red', value: 'v500' },
                      },
                    },
                  },
                  borderBottomRightRadiusDefault: {
                    width: 0.5,
                    unit: 'rem',
                    colorDefault: {
                      borderColorDefalut: {
                        color: { index: 'red', value: 'v500' },
                      },
                    },
                  },
                }}
              />
            </FormDefault>
            {alertDefault && <AlertDefault>{alertDefault}</AlertDefault>}
          </BoxDefault>

          <BoxDefault>
            <ListDefault>
              {repos.map((repo) => (
                <LinkDefault
                  key={repo.id}
                  href={`/repositories/${repo.owner.login}/${repo.name}`}
                  flexDefault={{
                    flexDefault: 'flex',
                    flexAlignItemsDefault: 'center',
                    flexGapDefault: { column: 2, row: 0, unit: 'rem' },
                  }}
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
                  <ImgDefault
                    borderRadiusDefault={{
                      borderRadiusDefault: {
                        width: 50,
                        unit: '%',
                      },
                    }}
                    widthDefault={{ widthDefault: { value: 0.6, unit: 'rem' } }}
                    src={repo.owner.avatar_url}
                    alt={repo.owner.login}
                  />
                  <BoxDefault>
                    <TextDefault
                      as="strong"
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v300' },
                      }}
                      fontDefault={{
                        fontSizeStatic: { value: 0.2, unit: 'rem' },
                      }}
                    >
                      {repo.full_name}
                    </TextDefault>
                    <TextDefault
                      as="p"
                      colorDefault={{
                        colorDefalut: { index: 'gray', value: 'v300' },
                      }}
                    >
                      {repo.description}
                    </TextDefault>
                  </BoxDefault>
                  <FaChevronRight />
                </LinkDefault>
              ))}
            </ListDefault>
          </BoxDefault>
        </ContentDefault>
      </ContainerDefault>
    </ContainerDefault>
  );
};

export default HomePage;
