import { Combobox } from '@qwik-ui/headless';

import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const names = ['Jim', 'Joanna', 'John', 'Jessica'];

  return (
    <Combobox.Root class="w-fit" defaultLabel={names[2]} options={names}>
      <Combobox.Label>Default Label</Combobox.Label>
      <Combobox.Control class="relative rounded-base border">
        <Combobox.Input class="px-d2 w-44 rounded-base bg-background px-2 pr-6 placeholder:text-muted-foreground" />
        <Combobox.Trigger class="group absolute right-0 h-6 w-6">
          <Combobox.Icon class="stroke-foreground transition-transform duration-500 group-aria-expanded:-rotate-180" />
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Popover gutter={8} hide="escaped">
        <Combobox.Listbox
          class="w-44 rounded-base border-[1px] border-slate-400 bg-slate-900 px-4 py-2"
          optionRenderer$={(option: ResolvedOption, index: number) => (
            <Combobox.Option
              key={option.key}
              class="group flex justify-between rounded-base border border-transparent px-2 hover:bg-accent aria-disabled:font-light aria-disabled:text-muted-foreground aria-disabled:hover:bg-muted aria-selected:cursor-pointer aria-selected:border-border aria-selected:bg-accent"
              index={index}
              resolved={option}
            >
              {option.label}
            </Combobox.Option>
          )}
        />
      </Combobox.Popover>
    </Combobox.Root>
  );
});
