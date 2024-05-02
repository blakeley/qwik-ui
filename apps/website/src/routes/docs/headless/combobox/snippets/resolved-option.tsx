import { component$ } from '@builder.io/qwik';
import { ComboboxOption, ComboboxListbox, type ResolvedOption } from '@qwik-ui/headless';

export default component$(() => {
  return (
    <Combobox.Listbox
      optionRenderer$={(option: ResolvedOption, index: number) => (
        <Combobox.Option key={option.key} index={index} resolved={option}>
          {option.label}
        </Combobox.Option>
      )}
    />
  );
});
