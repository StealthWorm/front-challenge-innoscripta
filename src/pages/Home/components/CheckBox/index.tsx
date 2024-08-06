import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxIndicator, CheckboxRoot } from './style'

export type CheckboxProps = ComponentProps<typeof CheckboxRoot>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRoot {...props} aria-label="checkbox">
      <CheckboxIndicator asChild>
        <Check weight="bold" size={16} />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}

Checkbox.displayName = 'Checkbox'