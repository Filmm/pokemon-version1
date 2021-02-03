import React from 'react';
import { Progress, Grid, Header, Image, Segment, Icon, Divider } from 'semantic-ui-react';
import { mockData } from "./mockData";

class CardComponent extends React.Component {
    state = {
        id: ''
    }

    renderProgressBar = (header, value) => {
        return <>
            {header}
            <div className="div--progress">
                <div className="progress" style={{ width: `${value}%`, height: '13px' }}>
                </div>
            </div>
        </>
    }

    render() {
        return (
            <>
                {mockData.data.map((item, index) =>
                    <Grid.Column>
                        <Segment className="segment--card">
                            <Icon name="close" className="close--icon cursor--pointer" />

                            <Grid className="remove--boxShadow">
                                <Grid.Column width={5} className="padding--0 remove--boxShadow">
                                    <Image src={`https://source.unsplash.com/random?sig=${index}`} />
                                </Grid.Column>

                                <Grid.Column >
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            hi
                                    </Grid.Row>

                                        <Grid.Row>

                                            {this.renderProgressBar('hi', '80')}
                                        </Grid.Row>
                                    </Grid>



                                </Grid.Column>



                            </Grid>
                        </Segment>
                    </Grid.Column>
                )}
            </>
        )
    }
}

export default CardComponent;