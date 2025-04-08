import * as React from "react";

import SLB from '../../content/experience/slb.mdx';
import Facebook from '../../content/experience/facebook.mdx';
import Meta from '../../content/experience/meta.mdx';

import "../styles/styles.css";

const ExperienceTabs = () => {
	const experienceList = [<SLB />, <Meta />, <Facebook />];

	return (
		<>{experienceList.map((panel, i) => <div key={i} className="inner-tab-panel mb-4">{panel}</div>)}</>
	);
};
export default ExperienceTabs;
