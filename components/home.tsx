import { Grid, Switch, Button } from '@material-ui/core'
import Typist from 'react-typist';

export default function () {
  return (
    <div id="main">
      <Grid justify="center" alignItems="center" container>
        <img id="bg" src="/bg.jpg" />
          <span id="bg">
            <Typist cursor={{blink: true}}>
              <span>Welcome to my website guest :)</span>
              <Typist.Delay ms={500} />
              <Typist.Backspace count={30} />
              <span>Fede1132</span>
            </Typist>
            <hr />
            <Switch checked={this.state.checked} onChange={this.toggleChecked} />
            <Button>test</Button>
            <p>Toggle dark mode</p>
          </span>
        </Grid>
      <img id="waves" src="/waves.svg" />
    </div>
  )
}