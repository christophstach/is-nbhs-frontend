import * as React from 'react';
import { FunctionComponent, useEffect, useLayoutEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse, Divider, ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListItemText from '@mui/material/ListItemText';
import PieChartIcon from '@mui/icons-material/PieChart';
import IconExpandLess from '@mui/icons-material/ExpandLess'
import IconExpandMore from '@mui/icons-material/ExpandMore'
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import HouseIcon from '@mui/icons-material/House';

const SideNav: FunctionComponent = () => {
    const [formsOpen, setFormsOpen] = React.useState(false);
    const [statisticsOpen, setStatisticsOpen] = React.useState(false);


    useLayoutEffect(() => {
        const sessionFormsOpen = sessionStorage.getItem('SideNav.formsOpen');
        const sessionStatisticsOpen = sessionStorage.getItem('SideNav.statisticsOpen');

        if (sessionFormsOpen) {
            setFormsOpen(JSON.parse(sessionFormsOpen));
        }

        if (sessionStatisticsOpen) {
            setStatisticsOpen(JSON.parse(sessionStatisticsOpen));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('SideNav.formsOpen', JSON.stringify(formsOpen));
    }, [formsOpen]);

    useLayoutEffect(() => {
        sessionStorage.setItem('SideNav.statisticsOpen', JSON.stringify(statisticsOpen));
    }, [statisticsOpen]);
    
    function handleOpenCloseForms() {
        setFormsOpen(!formsOpen);
    }

    function handleOpenCloseStatistics() {
        setStatisticsOpen(!statisticsOpen);
    }

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="/users">
                    <ListItemIcon>
                        <PeopleAltIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Benuzter"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="/areas">
                    <ListItemIcon>
                        <HouseIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Bereiche"/>
                </ListItemButton>
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
                        <ListItemButton component="a" href="/forms/gtb-os">
                            <ListItemText inset primary="GTB OS"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/forms/district-work">
                            <ListItemText inset primary="Stadtteilarbeit"/>
                        </ListItemButton>
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
                        <ListItemButton component="a" href="/statistics/1">
                            <ListItemText inset primary="Statistik 1"/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/statistics/2">
                            <ListItemText inset primary="Statistik 2"/>
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/statistics/3">
                            <ListItemText inset primary="Statistik 3"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}

export default SideNav
