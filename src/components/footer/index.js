import { Typography, Button, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import styles from './styles.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@material-ui/core/styles';

const Footer = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));
  return (
    <div className={styles.container}>
      <Container maxWidth="lg" disableGutters>
        <Grid
        container xs={1} sm={12}
        direction={isMobile ? 'column' : 'row'}
        className={styles.buttonBox}>
            <Button 
            variant="text"
            size="medium"
            disableRipple
            className={styles.button}
            >
              <Image
                src="/icons/classroom.svg"
                alt="classroom"
                width="41"
                height="41"
                style={{marginLeft:"-10px"}}
              />
              <b>Go to Class
              <ArrowForwardIcon className={styles.arrow}/>
              </b>
            </Button>
          <Button
            variant="text"
            size="medium"
            disableRipple
            className={styles.button}
          >
            <Image
              src="/icons/office-365.svg"
              alt="office 365"
              width="38"
              height="42"
            />
            <b>Office 365
              <ArrowForwardIcon className={styles.arrow} />
            </b>
          </Button>
          <Button
            variant="text"
            size="medium"
            disableRipple
            className={styles.button}
          >
            <Image
              src="/icons/library.svg"
              alt="library"
              width="36"
              height="40"
            />
            <b>Library
              <ArrowForwardIcon className={styles.arrow} />
            </b>
          </Button>
          <Button
            variant="text"
            size="medium"
            disableRipple
            className={styles.button}
          >
            <Image
              src="/icons/phoenix-link.svg"
              alt="phoenix link"
              width="41"
              height="40"
            />
            <b>PhoenixLink
              <ArrowForwardIcon className={styles.arrow} />
            </b>
          </Button>
        </Grid>
      
        <Grid 
          container 
          direction={isMobile ? 'column' : 'row'}
          className={styles.resources}
        >
          <Grid item xs>
            <div className={styles.resourceTitle}> Library Resources</div>
            <div className={styles.resourceList}>
              <p>University Library</p>
              <p>Citation Generator</p>
              <p>Center for Writing Excellence</p>
              <p>Center for Math Excellence</p>
              <p>Grammar Checking Tools</p>
              <p>Voter Registration</p>
            </div>
          </Grid>
          <Grid item xs>
            <div className={styles.resourceTitle}>Career & Alumni</div>
            <div className={styles.resourceList}>
              <p>PhoenixLink</p>
              <p>Alumni Association</p>
              <p>Mentor Program</p>
              </div>
          </Grid>
          <Grid item xs>
            <div className={styles.resourceTitle}>Student Resources</div>
            <div className={styles.resourceList}>
              <p>University Store</p>
              <p>Transcripts</p>
              <p>Letter Center</p>
              <p>Scholarship Opportunites</p>
              <p>Military Resources</p>
            </div>
          </Grid>
          <Grid item xs>
            <div className={styles.resourceTitle}>Connect</div>
            <div className={styles.resourceList}>
              <p>University Contacts</p>
              <p>Refer a Friend</p>
            </div>
          </Grid>
        </Grid>
        <div className={styles.myPhoenixLogo}>
          <Image
            src="/icons/uopx-logo.svg"
            alt="my phoenix link"
            width="30"
            height="36"
          />
          <Typography className={styles.myPhoenixText}>MyPhoenix</Typography>
        </div>
        <div className={styles.footer}>
          <Typography className={styles.footerText}>Privacy Policy | Manage Cookie Preferences | Terms of Use | Policy and Compliance | Help | GoToAssist | Share Your Screen | CA: Do Not Sell</Typography>
          <Typography className={styles.footerText}>
            Copyright © 2022 University of Phoenix</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;