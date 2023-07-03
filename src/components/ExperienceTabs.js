import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Facebook from '../../content/experience/facebook.mdx';
import Meta from '../../content/experience/meta.mdx';
import TA from '../../content/experience/ta.mdx';
import PennApps from '../../content/experience/pennapps.mdx';
import Perelman from '../../content/experience/perelman.mdx';

import "../styles/styles.css";

const ExperienceTabs = () => {
	const [tabIndex, setTabIndex] = React.useState(0);
	const tabList = ["Meta", "Penn CIS", "Facebook", "PennApps", "Perelman"];
	const tabPanelList = [<Meta />, <TA />, <Facebook />, <PennApps />, <Perelman />];

	return (
		<Tabs 
			id="controlled-tabs" selectedTabClassName="border-[#DB7093] bg-[#DB7093] text-white"
			selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			<TabList>{tabList.map((name) => <Tab key={name}>{name}</Tab>)}</TabList>
			{tabPanelList.map((panel, i) => <TabPanel key={i}><div className="inner-tab-panel">{panel}</div></TabPanel>)}
		</Tabs>
	);
};
export default ExperienceTabs;
