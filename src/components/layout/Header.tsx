import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, Button, Menu, Image, UnstyledButton, Avatar } from '@mantine/core';
import { IconChevronDown, IconPlus } from '@tabler/icons-react';
import { useRecoilState } from 'recoil';
import { openedState } from '../../states/navState';
import { ReactSVG } from 'react-svg';
import userAvatar from './../../assets/Header/user.svg'
import secondUser from './../../assets/Header/user2avif.avif'
import notifications from './../../assets/Header/notifications.svg'
import { useState } from 'react';

const useStyles = createStyles((theme, { openedList }: { openedList: boolean }) => ({

  control: {
    width: rem(150),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    transition: 'background-color 150ms ease',
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: openedList ? 'rotate(180deg)' : 'rotate(0deg)',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: rem(56),
    maxWidth: '100%',
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
    [theme.fn.smallerThan('md')]: {
      gap: '15px',
    },
    [theme.fn.largerThan('sm')]: {
      marginInlineStart: '250px',
    },
  },

  leftAction: {
    gap: "7px",
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
      width: '100%'
    },
  },

  actionWrabber: {
    gap: "7px",
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
      width: '100%'
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  select: {
    paddingRight: "0"
  }

}));



const data = [
  { label: 'مدير', image: userAvatar },
  { label: 'مستخدم', image: secondUser },
];



interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

const HeaderMiddle = ({ links }: HeaderMiddleProps) => {
  const [openedList, setOpenedList] = useState(false)
  const [opened, setOpened] = useRecoilState(openedState);
  const { classes } = useStyles({ openedList });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Header height={{ base: 130, md: 70, sm: 130 }}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)}
          size="sm" className={classes.burger} />
        <Group className={classes.actionWrabber}
          
        >
          <Button leftIcon={<IconPlus size="24px" />}
            styles={(theme) => ({
              root: {
                background: "#422077",
                gap: '8px',
                padding: '4px 0px 4px 16px',
                lineHeight: '32px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                fontSize:'14px',
                fontWeight:500,
                height: '32px',
                minWidth: '130px',
                '&:not([data-disabled])': theme.fn.hover({
                  backgroundColor: theme.fn.darken('#00acee', 0.05),
                }),
              },

              leftIcon: {
                marginLeft: '8px',
              },
            })}
          >
            اضافة موعد
          </Button>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button rightIcon={<IconChevronDown size="20px" />}
                styles={(theme) => ({
                  root: {
                    flexDirection: 'row-reverse',
                    background: "#3FA99E",
                    gap: '8px',
                    padding: '4px 16px 4px 0px',
                    lineHeight: '32px',
                    border: ' 1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    fontWeight:500,
                    height: '32px',
                    minWidth: '118px',
                    '&:not([data-disabled])': theme.fn.hover({
                      backgroundColor: theme.fn.darken('#00acee', 0.05),
                    }),
                  },
                  rightIcon: {
                    marginRight: '8px',
                  },
                })}
              >حجب فترة</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item >فرع 1</Menu.Item>
              <Menu.Item >فرع 2</Menu.Item>
              <Menu.Item >فرع 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Group spacing={0} className={classes.leftAction} position="right" noWrap>
          <ActionIcon>
            <ReactSVG src={notifications} />
          </ActionIcon>
          <Menu
            onOpen={() => setOpenedList(true)}
            onClose={() => setOpenedList(false)}
            radius="md"
            width="target"
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton className={classes.control} >
                <Group spacing="xs">
                  <Avatar src={selected.image} size={32} />
                  <span className={classes.label}>{selected.label}</span>
                </Group>
                <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </Header>
  );
}
export default HeaderMiddle