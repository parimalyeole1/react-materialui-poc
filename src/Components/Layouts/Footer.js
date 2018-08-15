import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
export default ({ muscles, category, onSelect }) => {
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelect = (e, i) => {
        onSelect(i === 0 ? null : muscles[i - 1])
    }
    return (
        <Paper>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={onIndexSelect}
            >
                <Tab label="All" />
                {muscles.map(muscle => (
                    <Tab label={muscle} key={muscle} />
                ))}
            </Tabs>
        </Paper>
    )
}
