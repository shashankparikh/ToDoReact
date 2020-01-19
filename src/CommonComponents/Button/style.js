import styled from 'styled-components'
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  color:  ${props => props.theme.colors.layoutDark};
  margin: 30px auto
`
