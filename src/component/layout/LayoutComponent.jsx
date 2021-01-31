import React from 'react';
import { Card, Grid, Icon, Segment } from 'semantic-ui-react';
import CardComponent from "../card/CardComponent";

class LayoutComponent extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Grid columns={2} doubling>
                    <Grid.Column>
                        <CardComponent />
                    </Grid.Column>
                    <Grid.Column>
                        <CardComponent />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LayoutComponent;