import { GetStaticProps, NextPage } from "next";
import { ServiceHeader, ServicesType, TeamType } from "../types";
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";
import Team from "../components/Team";
interface Props {
  dataServiceHeader: ServiceHeader;
  dataServices: ServiceHeader[];
  dataTeam: TeamType[];
}
const ServicesPage: NextPage<Props> = ({
  dataServiceHeader,
  dataServices,
  dataTeam,
}) => {
  return (
    <>
      <PageBanner title={dataServiceHeader.services_block.preTitle} />
      <Services
        preTitle={dataServiceHeader.services_block.preTitle}
        title={dataServiceHeader.services_block.title}
        data={dataServices}
      />
      <Team
        data={dataTeam}
        title={dataServiceHeader.team_block.title}
        preTitle={dataServiceHeader.team_block.preTitle}
      />
    </>
  );
};
export default ServicesPage;

export const getStaticProps: GetStaticProps = async () => {
  const resServiceHeader = await fetch("http://localhost:5001/services_page");
  const dataServiceHeader: ServiceHeader = await resServiceHeader.json();

  const resServices = await fetch("http://localhost:5001/services");
  const dataServices: ServicesType[] = await resServices.json();

  const resTeam = await fetch("http://localhost:5001/team");
  const dataTeam: TeamType[] = await resTeam.json();

  return {
    props: {
      dataServiceHeader,
      dataServices,
      dataTeam,
    },
  };
};
