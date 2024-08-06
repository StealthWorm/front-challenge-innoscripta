import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch() {
    // e.preventDefault()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <MagnifyingGlass weight='bold' size={16} />

      <input
        type="text"
        placeholder="Search"
        {...register('query', {
          onChange: () => {
            // handleChange(e)
          },
        })}
      />
    </SearchFormContainer>
  )
}
