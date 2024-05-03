import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Tabs } from '@qwik-ui/headless';
import styles from '.././index.css?inline';

export default component$(() => {
  useStyles$(styles);
  const selectedTabIdSig = useSignal<string | undefined>();
  return (
    <>
      <div class="tabs-example mr-auto">
        <h3>Danish Composers</h3>
        <Tabs.Root bind:selectedTabId={selectedTabIdSig}>
          <TabList>
            <Tab tabId="Maria">Maria</Tab>
            <Tab tabId="Carl">Carl</Tab>
            <Tab tabId="Ida">Ida</Tab>
          </TabList>
          <TabPanel>
            <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) ...</p>
          </TabPanel>
          <TabPanel>
            <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) ...</p>
          </TabPanel>
          <TabPanel>
            <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) ...</p>
          </TabPanel>
        </Tabs.Root>
        <p class="mt-4 text-white">
          <strong>Selected Tab Id</strong>: {selectedTabIdSig.value}
        </p>
      </div>
    </>
  );
});
