import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Facebook from '../../content/experience/facebook.mdx';
import Meta from '../../content/experience/meta.mdx';
import CIS240 from '../../content/experience/cis240.mdx';
import PennApps from '../../content/experience/pennapps.mdx';
import Perelman from '../../content/experience/perelman.mdx';

import "../styles/styles.css";

const ExperienceTabs = () => {
	const [tabIndex, setTabIndex] = React.useState(0);
	const tabList = ["Meta", "CIS240", "FB", "PennApps", "Perelman"];
	const tabPanelList = [<Meta />, <CIS240 />, <Facebook />, <PennApps />, <Perelman />];

	return (
		<Tabs 
			id="controlled-tabs" selectedTabClassName="border-[#DDA1DD] bg-[#DDA1DD] text-white"
			selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
			<TabList>{tabList.map((name) => <Tab key={name}>{name}</Tab>)}</TabList>
			{tabPanelList.map((panel, i) => <TabPanel key={i}><div className="inner-tab-panel">{panel}</div></TabPanel>)}
		</Tabs>
	);
};
export default ExperienceTabs;
