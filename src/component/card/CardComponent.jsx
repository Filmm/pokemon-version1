import React from 'react';
import { Progress, Grid, Header, Image, Segment, Icon } from 'semantic-ui-react';

class CardComponent extends React.Component {
    state = {
        id: ''
    }

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={4}>
                        {/* <Segment> */}
                        <Image src={`https://source.unsplash.com/random?sig=${1}`} />
                        {/* </Segment> */}
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Header floated="left">Pokemon</Header>
                        <Header> HP  </Header>
                        <Header> STR </Header>
                        <Header> WEAK </Header>

                    </Grid.Column>

                    <Grid.Column width={6}>
                        <br />
                        <Progress percent={11} style={{ marginBottom: '1.5rem' }} />
                        <Progress percent={11} style={{ marginBottom: '1.5rem' }} />
                        <Progress percent={11} style={{ marginBottom: '1.5rem' }} />
                    </Grid.Column>

                </Grid>
            </Segment>
        )
    }
}

export default CardComponent;