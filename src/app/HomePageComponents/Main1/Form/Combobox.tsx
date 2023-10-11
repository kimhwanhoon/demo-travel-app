import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { uniqueLocation, uniqueCities } from '@/types/mainTourPlaces';

export default function ComboBox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldCitiesFilterOptions = !uniqueCities.some(
    (item) => item === value
  );
  const shouldLocationFilterOptions = !uniqueLocation.some(
    (item) => item === value
  );

  const filteredCitiesOptions = shouldCitiesFilterOptions
    ? uniqueCities.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase().trim())
      )
    : uniqueCities;

  const filteredPlacesOptions = shouldLocationFilterOptions
    ? uniqueLocation.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase().trim())
      )
    : uniqueLocation;

  const citiesOptions = filteredCitiesOptions.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
    >
      {item}
    </Combobox.Option>
  ));

  const placesOptions = filteredPlacesOptions.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
    >
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      transitionProps={{ transition: 'fade' }}
      // offset={0}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          required
          classNames={{ input: 'h-[40px]' }}
          leftSection={<IconMapPin size={22} />}
          placeholder="Location"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options
          mah={200}
          style={{ overflowY: 'auto' }}
        >
          <Combobox.Group label="Cities">
            {citiesOptions.length === 0 ? (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            ) : (
              citiesOptions
            )}
          </Combobox.Group>
          <Combobox.Group label="Tour places">
            {placesOptions.length === 0 ? (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            ) : (
              placesOptions
            )}
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
