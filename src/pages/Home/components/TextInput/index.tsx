import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  labelName?: string;
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ labelName, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!labelName && <label htmlFor={props.id}>{labelName}</label>}
        <Input ref={ref} {...props} id={props.id} name={props.name} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
