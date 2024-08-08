import { useForm, useFormContext } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  const { register, setValue } = useFormContext()

  const handleInputChange = (event) => {
    setValue('query', event.target.value);
  };

  return (
    <SearchFormContainer>
      <MagnifyingGlass weight='bold' size={16} />

      <input
        type="text"
        placeholder="Search"
        {...register('query', {
          onChange: handleInputChange,
        })}
      />
    </SearchFormContainer>
  )
}
