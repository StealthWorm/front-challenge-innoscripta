
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDown, MagnifyingGlass } from 'phosphor-react'
import { CategoryItem, NavigationContainer, NavigationFormContainer, NavigationList, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuTrigger, NavigationMenuViewport } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '../CheckBox'

const filterFormSchema = z.object({
  categories: z
    .array(z.object({
      // name: z.string(),
      // category: z.string(),
      enabled: z.boolean(),
    }
    ))
    .transform((categories) => categories.filter((category) => category.enabled)),
  period: z.object({
    initialDate: z.string({ message: "Initial date is required" }),
    finalDate: z.string({ message: "Final date is required" })
  }),
  source: z.string().nullable(),
})


const sources = [
  {
    id: "abc-news",
    name: "ABC News",
    category: "pop",
    language: "en",
    country: "us",
    enabled: false,
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    category: "general",
    language: "en",
    country: "au",
    enabled: false,
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    category: "health",
    language: "no",
    country: "no",
    enabled: true,
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    category: "sports",
    language: "en",
    country: "us",
    enabled: true,
  },
];

// const categories = [...new Set(sources.map(source => source.category))];
type FilterFormInput = z.input<typeof filterFormSchema>
type FilterFormOutput = z.output<typeof filterFormSchema>

export function Filters() {
  const currentDate = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<FilterFormInput>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      categories: sources.map((source) => ({ ...source, enabled: false })),
      // categories: [],
      period: {
        initialDate: currentDate,
        finalDate: currentDate,
      },
      source: '',
    }
  })

  const handleOnSubmit = (data: FilterFormOutput) => {
    // const { period, source } = data as FilterFormOutput
    console.log(data);
  }

  return (
    <NavigationFormContainer onSubmit={handleSubmit(handleOnSubmit)} >
      <NavigationContainer>
        <NavigationList>
          <NavigationMenu.Item>
            <NavigationMenuTrigger>
              Categories <CaretDown size={16} />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              {sources.map((source, index) => {
                return (
                  <CategoryItem key={source.id}>
                    <Controller
                      control={control}
                      name={`categories.${index}.enabled`}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true);
                              setValue(`categories.${index}.enabled`, true)
                            }
                            }
                          // onCheckedChange={(checked) => field.onChange(checked === true)}
                          />
                        )
                      }}
                    />
                    <span>{source.category}</span>
                  </CategoryItem>
                )
              })}
            </NavigationMenuContent>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenuTrigger>
              Period <CaretDown size={16} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Controller
                name="period.initialDate"
                control={control}
                render={({ field }) => (
                  <div>
                    <label>Initial Date</label>
                    <input type="date" {...field} />
                  </div>
                )}
              />
              <Controller
                name="period.finalDate"
                control={control}
                render={({ field }) => (
                  <div>
                    <label>Final Date</label>
                    <input type="date" {...field} />
                  </div>
                )}
              />
            </NavigationMenuContent>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenuTrigger>
              Source <CaretDown size={16} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Controller
                name="source"
                control={control}
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Select a source</option>
                    {sources.map((source) => (
                      <option key={source.id} value={source.id}>
                        {source.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </NavigationMenuContent>
          </NavigationMenu.Item>
        </NavigationList>

        <NavigationMenuViewport />
      </NavigationContainer>

      <button type="submit" disabled={isSubmitting}>
        Filter
        <MagnifyingGlass size={20} weight='bold' />
      </button>
    </NavigationFormContainer >
  )
}
