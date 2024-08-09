import { useFormContext } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent } from 'react';

interface SearchFormProps {
  name: string;
  placeholder: string;
  icon?: boolean;
}

export function SearchForm({ name, placeholder, icon = true }: SearchFormProps) {
  const { register, setValue } = useFormContext()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(name, event.target.value);
  };

  return (
    <SearchFormContainer data-test-id="form-input">
      {icon && <MagnifyingGlass weight='bold' size={16} />}
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, {
          onChange: handleInputChange,
        })}
      />
    </SearchFormContainer>
  )
}
