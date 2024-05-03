import { component$ } from '@builder.io/qwik';
import { Install } from '@qwik-ui/headless';

export default component$(() => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>Title</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
});
