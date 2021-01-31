import React from "react";
import { Grid, Header } from "semantic-ui-react";
import LayoutComponent from "./component/layout/LayoutComponent";

function App() {
  return (
    <>
      <div>
        <Header textAlign="center">My Pokedex</Header>
        <Grid>
          <Grid.Column width={1} />

          <Grid.Column width={14}>
            <LayoutComponent />
          </Grid.Column>

          <Grid.Column width={1} />
        </Grid>
      </div>
      {/* <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "30px",
          background: "pink",
        }}
      /> */}
    </>
  );
}

export default App;
