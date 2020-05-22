import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import blue from '@material-ui/core/colors/blue'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { GameState } from '#app/constant-types'
import { incrementBetCredits } from '#store/game/actions'

// Styles
const useStyles = makeStyles({
  cardContent: {
    textAlign: 'center'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },

  cardHeader: {
    backgroundColor: blue[900],
    color: '#fff'
  }
})

// Component
function BetCredits ({ game, incrementBetCredits }) {
  const { cardHeader, cardContent, cardActions } = useStyles()
  const { gameState, betCredits, totalCredits } = game
  const hidden = (gameState === GameState.CONTINUE || gameState === GameState.END)
  const disabled = totalCredits < 5
  const inc10Disabled = totalCredits < 10
  const inc100Disabled = totalCredits < 100
  const inc1000Disabled = totalCredits < 1000

  return (
    <Card elevation={5}>
      <CardHeader className={cardHeader} title="Bet Credits" />
      <CardContent className={cardContent}>
        <Typography variant="h3" color="primary">${betCredits}</Typography>
      </CardContent>
      <CardActions className={cardActions}>
        <Button
          onClick={() => incrementBetCredits()}
          endIcon={<AddIcon />}
          disabled={disabled || hidden}
          variant="outlined"
          color="primary"
        >
          $5
        </Button>
        <Button
          onClick={() => incrementBetCredits(10)}
          endIcon={<AddIcon />}
          disabled={inc10Disabled || hidden}
          variant="outlined"
          color="primary"
        >
          $10
        </Button>
        <Button
          onClick={() => incrementBetCredits(100)}
          endIcon={<AddIcon />}
          disabled={inc100Disabled || hidden}
          variant="outlined"
          color="primary"
        >
          $100
        </Button>
        <Button
          onClick={() => incrementBetCredits(1000)}
          endIcon={<AddIcon />}
          disabled={inc1000Disabled || hidden}
          variant="outlined"
          color="primary"
        >
          $1000
        </Button>
      </CardActions>
    </Card>
  )
}

BetCredits.propTypes = {
  game: PropTypes.object,
  incrementBetCredits: PropTypes.func
}

// Store
const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = {
  incrementBetCredits
}

export default connect(mapStateToProps, mapDispatchToProps)(BetCredits)
