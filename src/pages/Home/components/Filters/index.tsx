
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
// import * as Checkbox from '@radix-ui/react-checkbox'
import { CaretDown } from 'phosphor-react'
import { NavigationContainer, NavigationList, NavigationMenuIndicator, NavigationMenuTrigger, NavigationMenuViewport } from './styles'

export function Filters() {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Category <CaretDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenu.Content>
            {/* List of categories */}
            <ul className="List one">
              <li>
                teste 1
                {/* <CheckboxRoot defaultChecked id="c1">
                  <CheckboxIndicator>
                    <CheckIcon />
                  </CheckboxIndicator>
                </CheckboxRoot>
                <Label css={{ paddingLeft: 15 }} htmlFor="c1">
                  Accept terms and conditions.
                </Label> */}
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Date <CaretDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenu.Content>
            {/* Date Picker */}
            <input type="date" id="from" name="from"></input>
            <input type="date" id="to" name="to"></input>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Source <CaretDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenu.Content>
            {/* Input to search source of News */}
            <input type="text" id="source" name="source"></input>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenuIndicator />
      </NavigationList>

      <NavigationMenuViewport />
    </NavigationContainer>
  )
}