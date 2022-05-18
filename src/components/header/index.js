import styles from './styles.module.css'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const Header = () => {
    return (
      <AppBar position="fixed"
      className={styles.container}>
        <Container maxWidth="lg" disableGutters>
          <Toolbar>
            <IconButton
            disableRipple
            >
              <Avatar className={styles.avatar}>JD</Avatar>
              <div className={styles.userInfo}>
              <Typography className={styles.name}>Jane Doe</Typography>
              <Typography className={styles.irn}>IRN 123456789</Typography>
              </div>
            </IconButton>

            <div className={styles.myPhoenixLogo}>
              <Image
                src="/icons/uopx-logo.svg"
                alt="my phoenix link"
                width="30"
                height="36"
              />
              <Typography className={styles.myPhoenixText}>MyPhoenix</Typography>
            </div>
            
            <div className={styles.iconBar}>
              <IconButton 
                color="inherit"
                edge="end"
                disableRipple
                className={styles.iconFormat}
                >
                <Image
                  src="/icons/email.svg"
                  alt="my phoenix link"
                  width="33"
                  height="34"
                />
                <Typography
                className={styles.iconText}>Email Inbox</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                edge="end"
                disableRipple
                className={styles.iconFormat}
                >
                <NotificationAddIcon className={styles.icons}/>
                <Typography
                  className={styles.iconText}>Notifications</Typography>
              </IconButton>
              <IconButton
                color="inherit"
                edge="end"
                disableRipple
                className={styles.iconFormat}
              >
                <MenuIcon className={styles.icons} />
                <Typography className={styles.iconText}>Menu</Typography>
              </IconButton>
            </div> 
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  export default Header;