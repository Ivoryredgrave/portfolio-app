import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import LinkIcon from '@mui/icons-material/Link';

import crudapp from '../multimedia/images/crudapp.png';
import menuUE4 from '../multimedia/videos/videoMenuUE4.mp4';
import menuPreview from '../multimedia/images/menu_ue4.jpg';

import portfolio from '../multimedia/images/portfolio-preview.jpg';

import ivorybot from '../multimedia/images/ivorybot.jpg';
import ivorybot2 from '../multimedia/images/ivorybot2.jpg';
import ivorybot3 from '../multimedia/images/ivorybot3.jpg';
import ivorybot4 from '../multimedia/images/ivorybot4.jpg';

import Chip from '@mui/material/Chip';

const itemData = [
    {
        img: ivorybot,
    },
    {
        img: ivorybot2,
    },
    {
        img: ivorybot3,
    },
    {
        img: ivorybot4
    }
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function Projects() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const buttons = [
        <Button href="https://github.com/Ivoryredgrave/crudAPP-Frontend"
            target="_blank" rel="noopener noreferrer"><LinkIcon />&nbsp;Frontend</Button>,
        <Button href="https://github.com/Ivoryredgrave/crudAPP-Backend"
            target="_blank" rel="noopener noreferrer"><LinkIcon />&nbsp;Backend</Button>,
    ];

    return (
        <div id='projects'>

            <Container sx={{ py: 5 }} maxWidth="md">

                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Proyectos
                </Typography>

                <Box style={{
                    display: 'block',
                    margin: 'auto'
                }} >
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="crudAPP" {...a11yProps(0)} />
                            <Tab label="Menu Template" {...a11yProps(1)} />
                            <Tab label="Portfolio APP" {...a11yProps(2)} />
                            <Tab label="Ivorybot" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>

                            <Typography variant="body1" gutterBottom>
                                Plantilla responsiva en base a las funciones de un CRUD.
                            </Typography>

                            <Chip label="ReactJS" color="primary" variant="outlined" />
                            <Chip label="Ant Design" color="info" variant="outlined" />
                            <Chip label="NodeJS" color="success" variant="outlined" />
                            <Chip label="MySQL" color="warning" variant="outlined" />

                            <br />
                            <br />

                            <Typography variant="body1" gutterBottom>
                                ☑️ Ventana de iniciar sesión.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Roles de usuario.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Menú lateral.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Resúmenes estadísticos de usuarios.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Añadir y modificar usuarios.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Emisión de reportes en formato PDF, CSV y XLSX.
                            </Typography>

                            <br />

                            <ImageList style={{
                                display: 'block',
                                margin: 'auto'
                            }}>
                                <ImageListItem>
                                    <img
                                        src={crudapp}
                                        srcSet={crudapp}
                                        alt={'crudAPP'}
                                        loading="lazy"
                                        style={{
                                            height: '650px',
                                            width: '650px'
                                        }}
                                    />
                                    <ImageListItemBar
                                        subtitle={
                                            <Stack
                                                sx={{ pt: 1 }}
                                                direction="row"
                                                spacing={2}

                                            >
                                                <ButtonGroup color="primary" aria-label="medium secondary button group">
                                                    {buttons}
                                                </ButtonGroup>

                                            </Stack>
                                        }
                                        position="below"
                                    />
                                </ImageListItem>
                            </ImageList>

                        </TabPanel>

                        <TabPanel value={value} index={1} dir={theme.direction}>

                            <Typography variant="body1" gutterBottom>
                                Menú responsivo.&nbsp;<Chip label="Unreal Engine 4.27.2" color="default" variant="outlined" />
                            </Typography>

                            <br />

                            <Typography variant="body1" gutterBottom>
                                ☑️ Menú de pausa al presionar la tecla ESC.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Ventana de carga (loading...).
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Ventana de créditos.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Pantalla completa y modo ventana.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Controlar volumen de música y efectos.
                            </Typography>

                            <Typography variant="body1" gutterBottom>
                                ☑️ Guardado automático de la ventana de ajustes.
                            </Typography>

                            <br />

                            <video src={menuUE4}
                                poster={menuPreview}
                                width="640" height="480"
                                controls loop
                            />

                            <Stack
                                sx={{ pt: 1 }}
                                direction="row"
                                spacing={2}>

                                <ButtonGroup color="primary" aria-label="medium secondary button group">
                                    <Button href="https://github.com/Ivoryredgrave/PlantillaMenuUE4"
                                        target="_blank" rel="noopener noreferrer"><LinkIcon />&nbsp;Menu Template</Button>
                                </ButtonGroup>

                            </Stack>

                        </TabPanel>

                        <TabPanel value={value} index={2} dir={theme.direction}>

                            <Typography variant="body1" gutterBottom>
                                Portafolio personal.&nbsp;

                                <Chip label="ReactJS" color="primary" variant="outlined" />
                                <Chip label="MUI" color="info" variant="outlined" />
                                <Chip label="SCSS" color="secondary" variant="outlined" />

                            </Typography>

                            <br />

                            <img
                                src={portfolio}
                                srcSet={portfolio}
                                alt={'portfolio'}
                                loading="lazy"
                                style={{
                                    height: '650px',
                                    width: '650px'
                                }}
                            />

                            <Stack
                                sx={{ pt: 1 }}
                                direction="row"
                                spacing={2}>

                                <ButtonGroup color="primary" aria-label="medium secondary button group">
                                    <Button href="https://github.com/Ivoryredgrave/portfolio-app"
                                        target="_blank" rel="noopener noreferrer"><LinkIcon />&nbsp;Portfolio APP</Button>
                                </ButtonGroup>

                            </Stack>

                        </TabPanel>

                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <Typography variant="body1" gutterBottom>
                                Bot para Discord con comandos básicos.&nbsp;<Chip label="Discord.js v12" color="primary" variant="outlined" />
                            </Typography>

                            <ImageList sx={{ width: 512, height: 512 }} cols={1}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            alt={'ivorybot'}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>

                            <ButtonGroup color="primary" aria-label="medium secondary button group">
                                <Button href="https://github.com/Ivoryredgrave/ivorybot"
                                    target="_blank" rel="noopener noreferrer"><LinkIcon />&nbsp;Ivorybot</Button>
                            </ButtonGroup>

                        </TabPanel>

                    </SwipeableViews>
                </Box>

            </Container>

        </div>
    );
}