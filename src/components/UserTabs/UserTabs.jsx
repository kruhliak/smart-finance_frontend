import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const UserTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Расход</Tab>
      <Tab>Доход</Tab>
    </TabList>

    <TabPanel>
      <h2>Какая-то прибыль</h2>
    </TabPanel>
    <TabPanel>
      <h2>Непомерные траты</h2>
    </TabPanel>
  </Tabs>
);

export default UserTabs;