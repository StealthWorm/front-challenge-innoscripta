import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDown, MagnifyingGlass } from 'phosphor-react'
import {
  CategoryItem,
  NavigationContainer,
  NavigationFormContainer,
  NavigationList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from './styles'
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '../CheckBox'
import { TextInput } from '../TextInput'
import { SearchForm } from '../../../../components/SearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../../../store/news-slice'
import { RootState } from '../../../../store'

const filterFormSchema = z.object({
  query: z.string().min(1, { message: "Must be 1 or more characters long" }),
  categories: z
    .array(z.object({
      id: z.string(),
      name: z.string(),
      enabled: z.boolean()
    }
    ))
    .transform((categories) =>
      categories.filter((category) => category.enabled)
    ),
  period: z.object({
    initialDate: z.string({ message: "Initial date is required" }),
    finalDate: z.string({ message: "Final date is required" })
  }),
  source: z.string().optional(),
})

type FilterFormInput = z.input<typeof filterFormSchema>
type FilterFormOutput = z.output<typeof filterFormSchema>

const initialDate = new Date();
initialDate.setDate(1);
const initialDateString = initialDate.toISOString().split('T')[0];
const currentDate = new Date().toISOString().split('T')[0];

export function Filters() {
  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.news);

  const newsForm = useForm<FilterFormInput>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      categories: [
        { id: '1', name: 'business', enabled: false },
        { id: '2', name: 'entertainment', enabled: false },
        { id: '3', name: 'general', enabled: false },
        { id: '4', name: 'health', enabled: false },
        { id: '5', name: 'science', enabled: false },
        { id: '6', name: 'sport', enabled: false },
        { id: '7', name: 'technology', enabled: false },
        { id: '8', name: 'news', enabled: false },
        { id: '9', name: 'lifestyle', enabled: false },
        { id: '10', name: 'opinion', enabled: false },
        { id: '11', name: 'society', enabled: false },
        { id: '12', name: 'wellness', enabled: false },
        { id: '13', name: 'film', enabled: false },
      ],
      period: {
        initialDate: initialDateString,
        finalDate: currentDate,
      },
      query: '',
      source: '',
    }
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = newsForm

  const { fields } = useFieldArray({
    control,
    name: 'categories',
  })

  const handleOnSubmit = async (data: FilterFormOutput) => {
    dispatch(fetchNews({ ...data, page: formData.page }));
  };

  return (
    <FormProvider {...newsForm}>
      <NavigationFormContainer onSubmit={handleSubmit(handleOnSubmit)} >
        <NavigationContainer>
          <NavigationList>
            <NavigationMenu.Item>
              <SearchForm name='query' placeholder='Search Keyword' />
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <SearchForm name='source' placeholder='Search Source' icon={false} />
            </NavigationMenu.Item>
          </NavigationList>

          <NavigationList>
            <NavigationMenu.Item>
              <NavigationMenuTrigger
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
                name='period'
              >
                Period <CaretDown size={16} />
              </NavigationMenuTrigger>
              <NavigationMenuContent orientation="row" data-test-id="dateList">
                <Controller
                  name="period.initialDate"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="initialDate"
                      labelName='From'
                      type='date'
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="period.finalDate"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="finalDate"
                      labelName='To'
                      type='date'
                      {...field}
                    />
                  )}
                />
              </NavigationMenuContent>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenuTrigger
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
                name='categories'
              >
                Categories <CaretDown size={16} />
              </NavigationMenuTrigger>

              <NavigationMenuContent data-test-id="categoriesList">
                {fields.map((category, index) => {
                  return (
                    <CategoryItem key={category.id}>
                      <Controller
                        control={control}
                        name={`categories.${index}.enabled`}
                        render={({ field }) => {
                          return (
                            <Checkbox
                              id={`category-${index}`}
                              name={`categories.${index}.name`}
                              checked={field.value}
                              onCheckedChange={(checked) =>
                                field.onChange(checked === true)
                              }
                            />
                          )
                        }}
                      />
                      <span data-test-id="category-name">{category.name}</span>
                    </CategoryItem>
                  )
                })}
              </NavigationMenuContent>
            </NavigationMenu.Item>
            {/* 
            <NavigationMenu.Item>
              <NavigationMenuTrigger
                onPointerMove={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                Source <CaretDown size={16} />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Controller
                  name="source"
                  control={control}
                  render={({ field }) => (
                    <SelectionInput
                      id="source"
                      name="source"
                      value={field.value ?? ''}
                      onChange={field.onChange}
                    >
                      <option value="">Select a source</option>

                      {fontSources.map((source) => (
                        <option key={source.id} value={source.name}>
                          {source.name}
                        </option>
                      ))}
                    </SelectionInput>
                  )}
                />
              </NavigationMenuContent>
            </NavigationMenu.Item> */}
          </NavigationList>

          <NavigationMenuViewport />
        </NavigationContainer>

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} weight='bold' />
        </button>
      </NavigationFormContainer>
    </FormProvider>
  )
}