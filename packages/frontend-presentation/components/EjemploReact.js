import React, {Component} from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: #09f;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin-right: 8px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.75;
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  border-radius: 50%;
`

const Small = styled.small`
  margin-left: 8px;
  font-size: 14px;
`

function Avatar({seed}) {
  // eslint-disable-line
  const url = 'https://api.adorable.io/avatars/' + seed
  return <Img alt="" src={url} />
}

export class EjemploReact extends Component {
  state = {vecesCambiado: 0, random: Math.random()}

  render() {
    return (
      <Container>
        <Button
          onClick={_ =>
            this.setState({
              seed: Math.random(),
              vecesCambiado: this.state.vecesCambiado + 1
            })
          }
        >
          Cambiar avatar!
        </Button>
        <Avatar seed={this.state.seed} />
        <Small>Cambiado {this.state.vecesCambiado} veces!</Small>
      </Container>
    )
  }
}
