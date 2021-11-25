import * as React from 'react';
import { FunctionComponent } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse, Divider, ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListItemText from '@mui/material/ListItemText';
import PieChartIcon from '@mui/icons-material/PieChart';
import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import HouseIcon from '@mui/icons-material/House';
import Link from 'next/link';

const SideNav: FunctionComponent = () => {
    const [formsOpen, setFormsOpen] = React.useState(false);
    const [statisticsOpen, setStatisticsOpen] = React.useState(false);

    function handleOpenCloseForms() {
        setFormsOpen(!formsOpen);
    }

    function handleOpenCloseStatistics() {
        setStatisticsOpen(!statisticsOpen);
    }

    return (
        <List>
            <ListItem disablePadding>
                <Link href="/users" passHref>
                    <ListItemButton component="a">
                        <ListItemIcon>
                            <PeopleAltIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Benuzter"/>
                    </ListItemButton>
                </Link>
            </ListItem>

            <ListItem disablePadding>
                <Link href="/areas" passHref>
                    <ListItemButton component="a">
                        <ListItemIcon>
                            <HouseIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Bereiche"/>
                    </ListItemButton>
                </Link>
            </ListItem>


            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenCloseForms}>
                    <ListItemIcon>
                        <DynamicFormIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Formulare"/>
                    {formsOpen ? <IconExpandLess/> : <IconExpandMore/>}
                </ListItemButton>
            </ListItem>

            <Collapse in={formsOpen} timeout="auto" unmountOnExit>
                <Divider/>
                <List component="div" disablePadding>

                    <ListItem disablePadding>
                        <Link href="/forms/gtb-os" passHref>
                            <ListItemButton component="a">
                                <ListItemText inset primary="GTB OS"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link href="/forms/district-work" passHref>
                            <ListItemButton component="a">
                                <ListItemText inset primary="Stadtteilarbeit"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
                <Divider/>
            </Collapse>


            <ListItem disablePadding>
                <ListItemButton onClick={handleOpenCloseStatistics}>
                    <ListItemIcon>
                        <PieChartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Statistiken"/>
                    {statisticsOpen ? <IconExpandLess/> : <IconExpandMore/>}
                </ListItemButton>
            </ListItem>

            <Collapse in={statisticsOpen} timeout="auto" unmountOnExit>
                <Divider/>
                <List component="div" disablePadding>

                    <ListItem disablePadding>
                        <Link href="/statistics/first-statistic" passHref>
                            <ListItemButton component="a">
                                <ListItemText inset primary="Statistik 1"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link href="/statistics/2" passHref>
                            <ListItemButton component="a">
                                <ListItemText inset primary="Statistik 2"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>


                    <ListItem disablePadding>
                        <Link href="/statistics/3" passHref>
                            <ListItemButton component="a">
                                <ListItemText inset primary="Statistik 3"/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}

export default SideNav
