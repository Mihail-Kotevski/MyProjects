import { GetStaticProps, NextPage } from "next";
import { AboutPageType, TeamType } from "../types";
import PageBanner from "../components/PageBanner";
import AboutBlock from "../components/AboutBlock";
import FeatureBlock from "../components/FeatureBlock";
import Team from "../components/Team";

interface Props {
  data: AboutPageType;
  dataTeam: TeamType[];
}

const AboutPage: NextPage<Props> = ({ data, dataTeam }) => {
  console.log(data);
  return (
    <>
      <PageBanner title={data.about_block.preTitle} />
      <AboutBlock {...data.about_block} />
      <FeatureBlock
        {...data.feature_block}
        data={data.feature_block.usp_items}
      />
      <Team
        preTitle={data.about_block.title}
        title={data.about_block.title}
        data={dataTeam}
      />
    </>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/about_page");
  const data: AboutPageType = await res.json();

  const resTeam = await fetch("http://localhost:5001/team");
  const dataTeam: TeamType[] = await resTeam.json();

  return {
    props: {
      data,
      dataTeam,
    },
  };
};
