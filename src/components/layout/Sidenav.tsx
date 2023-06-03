import { useState, useEffect } from 'react';
import { createStyles, Navbar, Group, Image, Text, getStylesRef } from '@mantine/core';
import { ReactSVG } from 'react-svg';
import { useRecoilState } from 'recoil';
import { openedState } from '../../states/navState';
import { Link } from 'react-router-dom';
import Logo from './../../assets/SideBar/logo.svg';
import shareIcon from './../../assets/SideBar/icons/shareIcon.svg';
import upcomming from './../../assets/SideBar/icons/upcoming.svg';
import uncertain from './../../assets/SideBar/icons/uncertain.svg';
import previous from './../../assets/SideBar/icons/previous.svg';
import canceled from './../../assets/SideBar/icons/canceled.svg';
import clients from './../../assets/SideBar/icons/clients.svg';
import shareLinks from './../../assets/SideBar/icons/shareLinks.svg';
import settings from './../../assets/SideBar/icons/settings.svg';
import help from './../../assets/SideBar/icons/help.svg';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: '#422077',
    [theme.fn.largerThan('sm')]: {
      position: 'sticky',
      height: '100vh',
      top: '0',
    },
  },

  header: {
    paddingTop: '15px',
    marginBottom: '20px',
    borderBottom: `1px solid #D6DDEB`,
  },

  text: {
    padding: "18px 0",
    width: '160px',
    margin: '0 auto',
  },

  visitContainer: {
    width: '160px',
    alignTtems: 'center',
    paddingBottom:"29px",
    margin: ' 0 auto',
    gap: '0'
  },

  visitText: {
    border: ' 1px solid #D6DDEB',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '0 8px',
    width: '128px',
    height: '29px',
  },

  visitIconContainer: {
    border: ' 1px solid #D6DDEB',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    padding: '0 8px',
    width: '32px',
    height: '29px',
    background: 'rgba(255, 255, 255, 0.45)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: '6px 16px 6px 0px',
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    marginBottom: '14px',
    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  icon: {
    width: '18px',
    height: '15px',
  },

  linkActive: {
    color: "#3FA99E",
    '&, &:hover': {
      color: "#3FA99E",
      backgroundColor: 'transparent',
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
      '& svg path': {
        fill: '#3FA99E',
      },
    },
  },

  footer: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '50px',
    padding: '0px 16px 0px 0px',
  },

}));

const data = [
  { link: '/upcoming-appointments', label: 'المواعيد القادمة', icon: upcomming },
  { link: '/uncertain-appointments', label: 'المواعيد الغير مؤكدة', icon: uncertain },
  { link: '', label: 'المواعيد السابقة', icon: previous },
  { link: '', label: 'المواعيد الملغية', icon: canceled },
  { link: '', label: 'العملاء', icon: clients },
  { link: '', label: 'مشاركة الروابط', icon: shareLinks },
  { link: '', label: 'الإعدادات', icon: settings },
];

const NavbarSimpleColored = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('المواعيد القادمة');
  const [opened, setOpen] = useRecoilState(openedState);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLogoWidth = () => {
    if (screenWidth >= 1200) {
      return 190;
    } else if (screenWidth >= 768) {
      return 160;
    } else {
      return 190;
    }
  };

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setOpen((o) => !o)
        setActive(item.label);
      }}
    >
      <ReactSVG src={item.icon} className={classes.icon} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 250 }}
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Image src={Logo} mx="auto" width={getLogoWidth()} height={38} fit="contain" alt="logo" />
        </Group>
        <Text className={classes.text} fz="md" fw={500} c="white" ta="right">
          صالون حلاقة
        </Text>
        <Group className={classes.visitContainer}>
          <Text className={classes.visitText} fz="sm" fw={500} c="white" ta="right">
            زيارة صفحة الحجز
          </Text>
          <div className={classes.visitIconContainer}>
            <ReactSVG src={shareIcon} />
          </div>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section>
        <Link className={classes.footer} to="/">
          <ReactSVG src={help} className={classes.icon} />
          <Text fw={500} fz="md" c="white" ta="center">
            مركز مساعدة
          </Text>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarSimpleColored;
