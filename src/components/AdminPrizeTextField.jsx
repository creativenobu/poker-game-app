import React from 'react'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

function AdminPrizeTextField ({ className, value, name, onChange, label }) {
  return (
    <Box data-testid='admin-prize-textfield' width='100%' display='flex' justifyContent='space-between'>
      <Box flex={1} display='flex' justifyContent='center' alignItems='center'>
        <Typography component='span'>{label}</Typography>
      </Box>
      <Box flex={1}>
        <TextField
          className={className}
          value={value}
          name={name}
          onChange={onChange}
          variant='outlined'
          type='number'
          fullWidth
          required
        />
      </Box>
    </Box>
  )
}

AdminPrizeTextField.propTypes = {
  className: PropTypes.any,
  label: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default AdminPrizeTextField
